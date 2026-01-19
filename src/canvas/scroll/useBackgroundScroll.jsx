import { Color } from "three";
import getScrollProgress from "../../utils/getScrollProgress";

const bgStart = new Color("#8fa3b8");
const bgMid = new Color().setRGB(0.96, 0.78, 0.82);
const bgEnd = new Color().setRGB(0.77, 0.55, 0.75);

export default function useBackgroundScroll({ scroll, gl, bgColor }) {
  const stage1 = getScrollProgress(scroll, 0.2, 0.5);
  const stage2 = getScrollProgress(scroll, 0.5, 1.0);

  bgColor.current.copy(bgStart).lerp(bgMid, stage1);
  bgColor.current.lerp(bgEnd, stage2);

  gl.setClearColor(bgColor.current, 1);
}
