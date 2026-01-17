import { useGLTF } from "@react-three/drei";

export default function Diamond({ diamondRef }) {
  const { nodes } = useGLTF("/ring.glb");

  return (
    <primitive ref={diamondRef} object={nodes.diamonds002} visible={true} />
  );
}
