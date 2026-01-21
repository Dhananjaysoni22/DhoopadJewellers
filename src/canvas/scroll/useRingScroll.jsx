import { MathUtils } from "three";
import getScrollProgress from "../../utils/getScrollProgress";
import getPageProgress from "../../utils/getPageProgress";

export default function useRingScroll({ scroll, ringRef, cloudsRef }) {
  // const progress = getScrollProgress(scroll, 0.5, 1.0);
  const progress = getPageProgress(scroll, 1, 3);

  if (!ringRef.current) return;

  ringRef.current.visible = progress > 0.001;

  ringRef.current.position.x = MathUtils.lerp(0, -0.5, progress);
  ringRef.current.position.y = MathUtils.lerp(1.2, -0.2, progress);

  ringRef.current.rotation.x = MathUtils.lerp(-1.2, -0.2, progress);
  ringRef.current.rotation.y = MathUtils.lerp(0.2, -0.16, progress);

  ringRef.current.scale.setScalar(MathUtils.lerp(0.2, 0.7, progress));

  /* CLOUDS */
  if (cloudsRef?.current) {
    const cloudsProgress = getScrollProgress(scroll, 0.15, 0.45);
    cloudsRef.current.position.y = MathUtils.lerp(0, 5, cloudsProgress);
    cloudsRef.current.position.z = MathUtils.lerp(0, 20, cloudsProgress);
  }
}
