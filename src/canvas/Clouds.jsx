import { Cloud } from "@react-three/drei";
import { forwardRef } from "react";

export default forwardRef(function Clouds(props, ref) {
  return (
    <group ref={ref}>
      {/* ☁️ BIG FOREGROUND CLOUDS */}
      <Cloud
        position={[-2.5, -0.5, 30]}
        scale={7}
        opacity={0.15}
        speed={0.05}
        color="#ffffff"
        depthTest={false}
      />

      <Cloud
        position={[2.5, -0.5, 20]}
        scale={7}
        opacity={0.15}
        speed={0.05}
        color="#ffffff"
        depthTest={false}
      />

      {/* ☁️ BACKGROUND CLOUDS */}
      <Cloud position={[-3, 1, -4]} scale={0.7} opacity={0.07} />
      <Cloud position={[-1, 0.5, -5]} scale={0.8} opacity={0.01} />
      <Cloud position={[1, 1.5, -6]} scale={0.9} opacity={0.06} />
      <Cloud position={[1.5, -2.5, -8]} scale={1} opacity={0.06} />
      <Cloud position={[-1.5, -3.5, -7]} scale={3} opacity={0.05} />
    </group>
  );
});
