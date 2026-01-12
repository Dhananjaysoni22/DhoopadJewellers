import { useRef, useEffect } from "react";
import { useGLTF, Center } from "@react-three/drei";
import gsap from "gsap";
import introTimeline from "../animations/introTimeline";
import { useControls } from "leva";

export default function Logo() {
  const ref = useRef();
  const { scene } = useGLTF("/basic_DJ.glb");

  const { posX, posY, posZ, rotY, scale, rotX } = useControls("Logo", {
    posX: { value: 0, min: -3, max: 3, step: 0.01 },
    posY: { value: -0.2, min: -2, max: 2, step: 0.01 },
    posZ: { value: 0, min: -3, max: 3, step: 0.01 },
    rotY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    scale: { value: 1, min: 0.5, max: 2, step: 0.01 },
  });

  useEffect(() => {
    if (!ref.current) return;

    ref.current.position.set(posX, posY, posZ);
    ref.current.rotation.y = rotY;
    ref.current.rotation.x = rotX;
    ref.current.scale.set(scale, scale, scale);
  }, [posX, posY, posZ, rotY, scale, rotX]);

  useEffect(() => {
    introTimeline(ref);
  }, []);

  return (
    <Center ref={ref}>
      <primitive object={scene} scale={1} />;
    </Center>
  );
}
