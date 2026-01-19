import { useRef } from "react";
import useRingTextScroll from "../scroll/useRingTextScroll";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import "./RingText.css"; // ✅ IMPORTANT

export default function RingText() {
  const ref = useRef();
  const scroll = useScroll();
  useFrame(() => {
    useRingTextScroll({ scroll, ref });
  });

  return (
    <>
      <section ref={ref} className="ring-text">
        <h1>Crafted Precision</h1>
        <p>Designed for elegance and durability</p>
      </section>
    </>
  );
}
