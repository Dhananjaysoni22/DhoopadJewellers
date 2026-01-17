import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ringScrollTimeline({ ringRef, diamondRef }) {
  // 💎 Diamond initial state
  gsap.set(diamondRef.current.position, {
    x: 0.12,
    y: -1.25,
    z: -2.28,
  });

  gsap.set(diamondRef.current.rotation, {
    x: -1.43,
    y: 0.59,
  });

  gsap.set(diamondRef.current.scale, {
    x: 1.38,
    y: 1.38,
    z: 1.38,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".ring-scroll",
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: true, // remove later
    },
  });

  // 💎 Diamond drops
  tl.to(diamondRef.current.position, {
    y: -0.4,
    z: 0.5,
    ease: "power2.out",
  });

  // 💍 Ring fades + scales in (REVERSIBLE)
  tl.to(
    ringRef.current.scale,
    {
      x: 1,
      y: 1,
      z: 1,
    },
    "<",
  );

  tl.to(
    ringRef.current,
    {
      onUpdate: () => {
        ringRef.current.traverse((child) => {
          if (child.material) {
            child.material.opacity = gsap.utils.clamp(0, 1, tl.progress());
          }
        });
      },
    },
    "<",
  );

  // 💎 Diamond snaps into ring
  tl.to(diamondRef.current.position, {
    x: 0,
    y: 0,
    z: 0,
    ease: "power2.inOut",
  });

  return tl;
}
