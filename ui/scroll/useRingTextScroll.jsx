import { useScroll } from "@react-three/drei";
import getScrollProgress from "../../src/utils/getScrollProgress.js";
import getPageProgress from "../../src/utils/getPageProgress.js";

export default function useRingTextScroll({ ref }) {
  const scroll = useScroll();

  if (!ref.current) return;

  const progress = getPageProgress(scroll, 1, 4);

  ref.current.style.opacity = progress;
  ref.current.style.transform = `
    translateY(${(1 - progress) * 40}px)
  `;
}
