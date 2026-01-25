import { MathUtils } from "three";
import getPageProgress from "../../utils/getPageProgress";

export default function usePlainRingScroll({ scroll, plainRingRef }) {
  if (!plainRingRef.current) return;

  let progress = MathUtils.clamp(getPageProgress(scroll, 2, 3), 0, 0.98);

  const page3Start = (1 / 3) * 2;
  const isOnPage3 = scroll.offset >= page3Start;

  plainRingRef.current.visible = isOnPage3;
  if (!isOnPage3) return;

  // Check if at final position
  const isAtEnd = scroll.offset >= 1;

  if (isAtEnd) {
    // FINAL LOCK for exact last frame with continuous rotation
    plainRingRef.current.scale.setScalar(0.07);
    plainRingRef.current.position.x = 1.15;
    plainRingRef.current.position.y = -0.9;

    // Continuous rotation at final position
    plainRingRef.current.rotation.y += 0.01;
  } else {
    // Apply easing for smoother animation
    const smoothProgress = easeInOutCubic(progress);

    // Animated state with smooth transitions - updated to match final position
    const scale = MathUtils.lerp(0.3, 0.07, smoothProgress);
    plainRingRef.current.scale.setScalar(scale);

    // Rotation during movement
    plainRingRef.current.rotation.y = MathUtils.lerp(0.4, 0, smoothProgress);

    // Move to right corner with smooth transition - updated to match final position
    plainRingRef.current.position.x = MathUtils.lerp(0, 1.15, smoothProgress);
    plainRingRef.current.position.y = MathUtils.lerp(
      -0.4,
      -0.9,
      smoothProgress,
    );
  }
}

// Smooth easing function for better animation feel
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
