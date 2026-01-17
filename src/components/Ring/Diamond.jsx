import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";

export default forwardRef(function Diamond(props, ref) {
  const { nodes } = useGLTF("/ring.glb");

  return (
    <primitive
      ref={ref}
      object={nodes.diamonds002}
      visible={false} // intro will enable
    />
  );
});
