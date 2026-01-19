import { useScroll } from "@react-three/drei";
import getScrollProgress from "../../src/utils/getScrollProgress.js";

export default function useRingTextScroll({ scroll, ref }) {
  // const scroll = useScroll();
  const progress = getScrollProgress(scroll, 0.25, 0.55);
  if (!ref.current) return;

  ref.current.style.opacity = progress;
  ref.current.style.transform = `
    translateY(${(1 - progress) * 40}px)
  `;
}
