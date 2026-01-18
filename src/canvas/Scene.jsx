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
import { Color } from "three";

export default function Scene() {
  const ringRef = useRef();
  const diamondRef = useRef();
  const logoRef = useRef();
  const cloudsRef = useRef();
  const { camera, gl } = useThree();
  const bgColor = useRef(new Color("#8fa3b8"));

  // useEffect(() => {
  //   introTimeline({ camera, logoRef, diamondRef });
  //   ringScrollTimeline({ ringRef, logoRef, bgColor, cloudsRef });
  // }, []);

  useEffect(() => {
    // 🔥 FORCE renderer background
    gl.setClearColor(bgColor.current, 1);

    introTimeline({ camera, logoRef, diamondRef });
    ringScrollTimeline({ ringRef, logoRef, bgColor, cloudsRef, gl });
  }, []);

  return (
    <>
      {/* <color attach="background" args={[bgColor.current]} /> */}
      <Environment preset="sunset" background={false} intensity={2} />
      {/* <Sky sunPosition={[0, 0.02, 0]} /> */}

      <CameraRig />
      <Lights />
      <Clouds ref={cloudsRef} />

      <Logo ref={logoRef} />
      <Ring ref={ringRef} diamondRef={diamondRef} />
    </>
  );
}
