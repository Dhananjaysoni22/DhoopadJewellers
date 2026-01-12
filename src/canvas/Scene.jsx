import { Environment, OrbitControls, Sky } from "@react-three/drei";
import CameraRig from "./CameraRig";
import Clouds from "./Clouds";
import Logo from "./Logo";
import Lights from "./Lights";
import Effects from "./Effects";

export default function Scene() {
  return (
    <>
      <color attach="background" args={["#8fa3b8"]} />
      <Environment preset="sunset" />

      <Sky
        distance={450000}
        sunPosition={[0, 0.02, 0]}
        inclination={0.4}
        azimuth={0.25}
      />
      <CameraRig />
      <Lights />
      <Clouds />
      <Logo />
      <Effects />
      <OrbitControls />
    </>
  );
}
