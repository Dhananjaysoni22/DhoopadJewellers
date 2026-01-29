import { Environment, useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Color } from "three";

import CameraRig from "./CameraRig";
import Lights from "./Lights";
import Clouds from "./Clouds";
import Logo from "../components/Logo";
import Ring from "../components/Ring/Ring";
import useBackgroundScroll from "./scroll/useBackgroundScroll";

import useIntroScroll from "./scroll/useIntroScroll";
import useRingScroll from "./scroll/useRingScroll";
import PlainRing from "../components/PlainRing/PlainRing";
import usePlainRingScroll from "./scroll/usePlainRingScroll";
import Gallery from "../components/Gallery/Gallery";

export default function Scene() {
  const ringRef = useRef();
  const logoRef = useRef();
  const cloudsRef = useRef();
  const plainRingRef = useRef();
  const galleryRef = useRef();

  const { gl, camera } = useThree();
  const scroll = useScroll();

  const bgColor = useRef(new Color("#8fa3b8"));

  useEffect(() => {
    gl.setClearColor(bgColor.current, 1);
  }, []);

  useFrame(() => {
    useIntroScroll({ scroll, logoRef });
    useRingScroll({ scroll, ringRef, cloudsRef });
    useBackgroundScroll({
      scroll,
      gl,
      bgColor,
    });
    usePlainRingScroll({ scroll, plainRingRef });
  });

  return (
    <>
      <Environment preset="sunset" intensity={3} />
      <CameraRig />
      <Lights />
      <Clouds ref={cloudsRef} />
      <Logo ref={logoRef} />
      <Ring ref={ringRef} />
      <PlainRing ref={plainRingRef} />
      <Gallery ref={galleryRef} />
    </>
  );
}
