import getScrollProgress from "../../utils/getScrollProgress";

export default function useIntroScroll({ scroll, logoRef }) {
  const progress = getScrollProgress(scroll, 0.0, 0.15);

  if (!logoRef.current) return;
  logoRef.current.visible = progress < 0.98;
  logoRef.current.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.transparent = true;
      child.material.opacity = 1 - progress;
    }
  });
}
