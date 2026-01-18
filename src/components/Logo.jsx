import { forwardRef, useEffect, useRef } from "react";
import { useGLTF, Text } from "@react-three/drei";

export default forwardRef(function Logo(_, externalRef) {
  const groupRef = useRef();
  const { scene } = useGLTF("/DJ.glb");

  useEffect(() => {
    if (!groupRef.current) return;

    groupRef.current.position.set(-1.3, -0.2, 0);
    groupRef.current.rotation.set(1.54, 0, 0);
    groupRef.current.scale.set(5, 5, 5);
  }, []);

  // expose group to parent (GSAP)
  useEffect(() => {
    if (!externalRef || !groupRef.current) return;

    if (typeof externalRef === "function") {
      externalRef(groupRef.current);
    } else {
      externalRef.current = groupRef.current;
    }
  }, [externalRef]);

  return (
    <group ref={groupRef}>
      {/* LOGO MODEL */}
      <primitive object={scene} />

      {/* TEXT BELOW LOGO */}
      <Text
        position={[0.25, -0.1, 0.02]} // 👈 below logo
        fontSize={0.025}
        rotation={[-1.54, 0, 0]}
        color="#ffffff"
        fontStyle="Arial"
        anchorX="center"
        anchorY="top"
        fontWeight={600}
      >
        {` A Legacy of Royalty & Craftsmanship`.toUpperCase()}{" "}
      </Text>
      <Text
        position={[0.25, -0.2, 0.07]} // 👈 below logo
        fontSize={0.017}
        textAlign="center"
        rotation={[-1.54, 0, 0]}
        color="#ffffff"
        fontStyle="Arial"
        anchorX="center"
        anchorY="top"
        fontWeight={300}
        maxWidth={2}
      >
        {`For over a century, Dhoopad Jewellers has been synonymous with timeless elegance. Rooted in `.toUpperCase()}
      </Text>
      <Text
        position={[0.25, -0.2, 0.09]} // 👈 below logo
        fontSize={0.017}
        textAlign="center"
        rotation={[-1.54, 0, 0]}
        color="#ffffff"
        fontStyle="Arial"
        anchorX="center"
        anchorY="top"
        fontWeight={300}
        maxWidth={2}
      >
        {`tradition yet inspired by modern luxury, every creation is a reflection of artistry passed down`.toUpperCase()}
      </Text>
      <Text
        position={[0.25, -0.2, 0.11]} // 👈 below logo
        fontSize={0.017}
        textAlign="center"
        rotation={[-1.54, 0, 0]}
        color="#ffffff"
        fontStyle="Arial"
        anchorX="center"
        anchorY="top"
        fontWeight={300}
        maxWidth={0.96}
      >
        {`through generation`.toUpperCase()}
      </Text>
    </group>
  );
});
