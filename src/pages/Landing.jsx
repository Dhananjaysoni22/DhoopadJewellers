import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Scene from "../canvas/Scene";
import ScrollUI from "../../ui/ScrollUI";
import getPageProgress from "../../src/utils/getPageProgress";
import gsap from "gsap";
import Loader from "../Loader";

// ScrollTracker component
function ScrollTracker({ onScrollChange }) {
  const scroll = useScroll();

  useFrame(() => {
    const page3Progress = getPageProgress(scroll, 2, 3);
    const isOnPage3 = page3Progress > 0;
    onScrollChange(isOnPage3);
  });

  return null;
}

export default function Landing() {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  const transitionRef = useRef(null);
  const buttonRef = useRef(null);

  const handleNavigate = () => {
    // Get button position
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    // Position overlay at button center
    gsap.set(transitionRef.current, {
      left: buttonCenterX,
      top: buttonCenterY,
      xPercent: -50,
      yPercent: -50,
    });

    // Zoom out from button
    gsap.to(transitionRef.current, {
      scale: 100,
      opacity: 1,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => navigate("/gallery"),
    });
  };

  return (
    <>
      {/* Circular zoom overlay */}
      <div
        ref={transitionRef}
        style={{
          position: "fixed",
          width: "20px",
          height: "20px",
          backgroundColor: "black",
          opacity: 0,
          zIndex: 100,
          pointerEvents: "none",
          borderRadius: "50%",
          transform: "translate(-50%, -50%) scale(0.01)",
        }}
      />

      <div className="landing">
        <Canvas camera={{ fov: 35 }} gl={{ antialias: true }}>
          <Suspense fallback={<Loader />}>
            <ScrollControls pages={3} damping={0.2}>
              <ScrollTracker onScrollChange={setShowButton} />
              <Scene />
              <Scroll html>
                <ScrollUI />
              </Scroll>
            </ScrollControls>
            <Preload all />
          </Suspense>
        </Canvas>

        <div
          className="absolute right-10 bottom-10 z-50 transition-opacity duration-500"
          style={{
            opacity: showButton ? 1 : 0,
            pointerEvents: showButton ? "auto" : "none",
          }}
        >
          <button
            ref={buttonRef}
            onClick={handleNavigate}
            className="px-6 py-3 bg-white hover:bg-black hover:text-amber-50 text-black rounded-full hover:bg-opacity-90 transition-colors border-2 border-black cursor-pointer"
          >
            Open Gallery
          </button>
        </div>
      </div>
    </>
  );
}
