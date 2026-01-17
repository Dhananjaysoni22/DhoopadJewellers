import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";
import Diamond from "./Diamond";

export default forwardRef(function Ring(props, ref) {
  const { nodes } = useGLTF("/ring.glb");

  return (
    <group ref={ref} visible={false} position={[0, -2, 0]}>
      <primitive object={nodes.gold} />
      <primitive object={nodes.silver} />
      <Diamond ref={props.diamondRef} />
    </group>
  );
});
