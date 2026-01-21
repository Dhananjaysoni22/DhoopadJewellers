import { MathUtils } from "three";

export default function getPageProgress(
    scroll,
    page,
    totalPages,
    start = 0,
    end = 1
) {
    const pageSize = 1 / totalPages;
    const pageStart = page * pageSize;
    const pageEnd = pageStart + pageSize;

    // return 0 if outside this page
    if (scroll.offset < pageStart || scroll.offset > pageEnd) return 0;

    const localProgress =
        (scroll.offset - pageStart) / pageSize;

    return MathUtils.clamp(
        (localProgress - start) / (end - start),
        0,
        1
    );
}
