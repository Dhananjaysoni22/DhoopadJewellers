import { Color } from "three";
import getPageProgress from "../../utils/getPageProgress";

const bgStart = new Color("#8fa3b8"); // Soft blue-grey (Diamond/Platinum)
const bgMid = new Color("#f8f6f2"); // Pure ivory white (luxury showcase)
const bgEnd = new Color("#f0e6db"); // Soft vanilla cream (elegant warmth)
const bg3 = new Color("#e8ddd0"); // Warm sand beige (premium feel)

export default function useBackgroundScroll({ scroll, gl, bgColor }) {
  const p0 = getPageProgress(scroll, 0, 4);
  const p1 = getPageProgress(scroll, 1, 4);
  const p2 = getPageProgress(scroll, 2, 4);

  if (p0 > 0) {
    bgColor.current.copy(bgStart).lerp(bgMid, p0);
  }

  if (p1 > 0) {
    bgColor.current.copy(bgMid).lerp(bgEnd, p1);
  }

  if (p2 > 0) {
    bgColor.current.copy(bgEnd).lerp(bg3, p2);
  }

  gl.setClearColor(bgColor.current, 1);
}
