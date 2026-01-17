import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ringScrollTimeline({ ringRef, logoRef }) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".ring-scroll",
      start: "top center",
      end: "bottom center",
      scrub: 1,
    },
  });

  tl.to(logoRef.current, {
    visible: false,
  });

  // logo disappears
  tl.to(logoRef.current, {
    opacity: 0,
    duration: 0.3,
  });

  // show ring
  tl.set(ringRef.current, {
    visible: true,
  });

  // ring moves center → left center
  tl.set(ringRef.current.position, {
    x: -0.5,
    y: -0.2,
    z: 0,
  });

  tl.to(ringRef.current.scale, {
    x: 0.5,
    y: 0.5,
    z: 0.5,
  });

  tl.to(ringRef.current.rotation, {
    x: -0.5,
    y: 0.8,
    z: 0,
  });

  return tl;
}
