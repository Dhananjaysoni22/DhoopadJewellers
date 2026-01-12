import { Cloud } from "@react-three/drei";

export default function Clouds() {
  return (
    <>
      {/* ☁️☁️ BIG FOREGROUND CLOUDS (camera crosses these) */}
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

      {/* ☁️ SMALL BACKGROUND CLOUDS (behind logo) */}
      <Cloud
        position={[-3, 1, -4]}
        scale={0.7}
        segments={30}
        opacity={0.07}
        speed={0.08}
        color="#f2f2f2"
      />

      <Cloud
        position={[-1, 0.5, -5]}
        scale={0.8}
        opacity={0.07}
        segments={30}
        speed={0.3}
        color="#f2f2f2"
      />
      <Cloud
        position={[1, 1.5, -6]}
        scale={0.9}
        segments={30}
        opacity={0.07}
        speed={0.7}
        color="#f2f2f2"
      />
      <Cloud
        position={[1.5, -2.5, -8]}
        scale={1}
        opacity={0.06}
        segments={30}
        speed={0.6}
        color="#f2f2f2"
      />
      <Cloud
        position={[-1.5, -3.5, -7]}
        scale={3}
        opacity={0.05}
        speed={0.4}
        segments={30}
        color="#f2f2f2"
      />
    </>
  );
}
