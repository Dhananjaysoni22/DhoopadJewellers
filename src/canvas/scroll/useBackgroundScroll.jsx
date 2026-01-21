import { Color } from "three";
import getPageProgress from "../../utils/getPageProgress";

const bgStart = new Color("#8fa3b8");
const bgMid = new Color().setRGB(0.96, 0.78, 0.82);
const bgEnd = new Color().setRGB(0.77, 0.55, 0.75);
const bg3 = new Color().setRGB(0.66, 0.98, 0.78);

export default function useBackgroundScroll({ scroll, gl, bgColor }) {
  const p0 = getPageProgress(scroll, 0, 3);
  const p1 = getPageProgress(scroll, 1, 3);
  const p2 = getPageProgress(scroll, 2, 3);

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
