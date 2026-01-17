import { Environment, Sky } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

import CameraRig from "./CameraRig";
import Lights from "./Lights";
import Clouds from "./Clouds";
import Logo from "../components/Logo";
import Ring from "../components/Ring/Ring";
import introTimeline from "./timelines/introTimeline";
import ringScrollTimeline from "./timelines/ringScrollTimeline";

export default function Scene() {
  const ringRef = useRef();
  const diamondRef = useRef();
  const logoRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    introTimeline({ camera, logoRef, diamondRef });
    ringScrollTimeline({ ringRef, logoRef });
  }, []);

  return (
    <>
      <color attach="background" args={["#8fa3b8"]} />
      <Environment preset="sunset" />
      <Sky sunPosition={[0, 0.02, 0]} />

      <CameraRig />
      <Lights />
      <Clouds />

      <Logo ref={logoRef} />
      <Ring ref={ringRef} diamondRef={diamondRef} />
    </>
  );
}
