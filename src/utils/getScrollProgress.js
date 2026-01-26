import { MathUtils } from "three";

export default function getScrollProgress(scroll, start, end) {
  return MathUtils.clamp((scroll.offset - start) / (end - start), 0, 1);
}
