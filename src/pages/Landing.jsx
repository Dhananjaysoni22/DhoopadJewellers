import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "../canvas/Scene";
import CameraLogger from "../helpers/CameraLogger";

export default function Landing() {
  return (
    <div className="landing">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 35 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <CameraLogger />
      </Canvas>
    </div>
  );
}
