import gsap from "gsap";

export default function introTimeline({ camera, logoRef, diamondRef }) {
  const tl = gsap.timeline();

  // 🎥 camera intro
  tl.to(camera.position, {
    z: 3,
    duration: 5,
    ease: "power2.inOut",
  });

  // 💎 diamond over J (KEEP YOUR VALUES)
  tl.set(diamondRef.current, { visible: true });

  tl.set(diamondRef.current.position, {
    x: 0.148,
    y: -0.1,
    z: -2.28,
  });

  tl.set(diamondRef.current.rotation, {
    x: -1.43,
    y: 0.59,
  });

  tl.set(diamondRef.current.scale, {
    x: 1.38,
    y: 1.38,
    z: 1.38,
  });

  return tl;
}
