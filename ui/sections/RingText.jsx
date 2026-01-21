import { useScroll } from "@react-three/drei";
import getPageProgress from "../../src/utils/getPageProgress";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

export default function RingText() {
  const scroll = useScroll();
  const [progress, setProgress] = useState(0);

  useFrame(() => {
    setProgress(getPageProgress(scroll, 1, 3));
  });
  return (
    <div
      className="ring-text"
      style={{
        opacity: progress,
        transform: `scale(${0.95 + progress * 0.05})`,
        marginRight: "100px",
        // height: "500px",
      }}
    >
      <h1>Exclusivity, Crafted Just for You</h1>
      <p>Crafted Precision</p>
    </div>
  );
}
