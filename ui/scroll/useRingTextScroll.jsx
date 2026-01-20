import { useScroll } from "@react-three/drei";
import getScrollProgress from "../../src/utils/getScrollProgress.js";

export default function useRingTextScroll({ ref }) {
  const scroll = useScroll();

  if (!ref.current) return;

  const progress = getScrollProgress(scroll, 0.15, 0.6);

  ref.current.style.opacity = progress;
  ref.current.style.transform = `
    translateY(${(1 - progress) * 40}px)
  `;
}
