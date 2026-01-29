import { useGLTF } from "@react-three/drei";
import { forwardRef, useEffect } from "react";

export default forwardRef(function Gallery(props, ref) {
  const gltf = useGLTF("/chala.glb");

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.geometry.center();
      }
    });

    // Set initial position once on the ref instead
    if (ref.current) {
      ref.current.position.set(0.25, -0.4, -0.8);
    }
  }, [gltf, ref]);

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      // Remove position prop - let the scroll animation control it
    />
  );
});
