import { useThree, useFrame } from "@react-three/fiber";
import { useEffect } from "react";

export default function CameraLogger() {
  // Access the camera object from the R3F state
  const { camera } = useThree();

  // Use useEffect to log the initial position and rotation when the component mounts
  useEffect(() => {
    console.log("Initial camera position:", camera.position);
    console.log(
      "Initial camera rotation (Euler angles in radians):",
      camera.rotation
    );
  }, [camera]);

  // Use useFrame to continuously log the camera position and rotation
  // This is useful if the camera is moving or being controlled by OrbitControls/CameraControls
  useFrame(() => {
    // console.log('Current camera position:', camera.position);
    // console.log('Current camera rotation (Euler angles in radians):', camera.rotation);
  });

  return null; // This component doesn't render any visible elements
}
