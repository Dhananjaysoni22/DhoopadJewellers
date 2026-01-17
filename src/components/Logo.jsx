import { forwardRef, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default forwardRef(function Logo(_, externalRef) {
  const localRef = useRef();
  const { scene } = useGLTF("/basic_DJ.glb");

  // 👇 YOUR FINAL VALUES (unchanged)
  useEffect(() => {
    if (!localRef.current) return;

    localRef.current.position.set(-1.2, -0.2, 0);
    localRef.current.rotation.set(1.54, 0, 0);
    localRef.current.scale.set(0.3, 0.3, 0.3);
  }, []);

  // 🔁 expose real object to Scene
  useEffect(() => {
    if (!externalRef || !localRef.current) return;

    if (typeof externalRef === "function") {
      externalRef(localRef.current);
    } else {
      externalRef.current = localRef.current;
    }
  }, [externalRef]);

  return <primitive ref={localRef} object={scene} />;
});
