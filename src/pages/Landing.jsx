import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "../canvas/Scene";
import CameraLogger from "../helpers/CameraLogger";

export default function Landing() {
  return (
    <div className="landing">
      {/* FIXED CANVAS */}
      <Canvas camera={{ fov: 35 }} gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <CameraLogger />
      </Canvas>

      {/* SCROLL CONTENT */}
      <div className="scroll-container">
        <section className="hero" />
        <section id="scroll-section" className="ring-scroll"></section>
        <section className="end" />
      </div>
    </div>
  );
}
