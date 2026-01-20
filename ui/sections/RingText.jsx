import { useScroll } from "@react-three/drei";

export default function RingText() {
  const scroll = useScroll();

  // Page 1: 0.5 → 1.0
  const progress = Math.min(Math.max((scroll.offset - 0.5) / 0.2, 0), 1);

  return (
    <div
      className="ring-text"
      style={{
        opacity: progress,
        transform: `scale(${0.95 + progress * 0.05})`,
      }}
    >
      <h1>Crafted Precision</h1>
      <p>Designed for elegance and durability</p>
    </div>
  );
}
