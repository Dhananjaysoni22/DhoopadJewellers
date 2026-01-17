import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Ring({ ringRef }) {
  const { nodes } = useGLTF("/ring.glb");

  useEffect(() => {
    if (!ringRef.current) return;

    ringRef.current.scale.set(0.6, 0.6, 0.6);
    ringRef.current.position.set(0, -1.2, 0.4); // 👈 bring in front

    ringRef.current.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.transparent = true;
        child.material.opacity = 0; // start hidden
        child.material.depthWrite = true;
        child.material.needsUpdate = true;
      }
    });
  }, []);

  return (
    <group ref={ringRef}>
      <primitive object={nodes.gold} />
      <primitive object={nodes.silver} />
    </group>
  );
}
