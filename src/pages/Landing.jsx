import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Suspense } from "react";
import Scene from "../canvas/Scene";
import ScrollUI from "../../ui/ScrollUI";

export default function Landing() {
  return (
    <div className="landing">
      <Canvas camera={{ fov: 35 }} gl={{ antialias: true }}>
        <Suspense fallback={null}>
          {/* pages = total scroll length */}
          <ScrollControls pages={4} damping={0.2}>
            <Scene />

            <Scroll html>
              <ScrollUI />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
