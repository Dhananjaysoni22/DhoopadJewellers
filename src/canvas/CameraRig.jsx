import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

export default function CameraRig() {
  const { camera } = useThree();

  useEffect(() => {
    // 🎬 Start BEFORE big clouds
    camera.position.set(0, 0, 60);
    camera.rotation.set(0, 0, 0);

    const lookAtTarget = { x: 0, y: -0.1, z: 0 };

    gsap.to(camera.position, {
      z: 3,
      duration: 5,
      ease: "power2.inOut",
      onUpdate: () => {
        camera.lookAt(lookAtTarget.x, lookAtTarget.y, lookAtTarget.z);
      },
    });
  }, []);

  return null;
}
