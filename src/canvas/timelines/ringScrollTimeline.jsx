import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ringScrollTimeline({
  ringRef,
  logoRef,
  bgColor,
  cloudsRef,
  gl,
}) {
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

  tl.set(ringRef.current, {
    visible: true,
  });

  // START STATE (off-screen, slightly twisted)
  tl.set(ringRef.current.position, {
    x: 0,
    y: 1.2,
    z: 0,
  });

  tl.set(ringRef.current.rotation, {
    x: -1.2,
    y: 0.2,
    z: 0,
  });

  tl.set(ringRef.current.scale, {
    x: 0.2,
    y: 0.2,
    z: 0.2,
  });

  // MOVE INTO FINAL POSE
  tl.to(ringRef.current.position, {
    x: -0.5,
    y: -0.2,
    z: 0,
    duration: 2,
    ease: "power3.out",
  });

  tl.to(
    ringRef.current.rotation,
    {
      x: -0.2,
      y: -0.16,
      z: 0,
      duration: 2,
      ease: "power3.out",
    },
    "<",
  );

  tl.to(
    ringRef.current.scale,
    {
      x: 0.7,
      y: 0.7,
      z: 0.7,
      duration: 2,
      ease: "power3.out",
    },
    "<",
  );

  // ☁️ clouds fade + drift away
  tl.to(
    cloudsRef.current.position,
    {
      y: 5,
      z: 20,
      ease: "power2.out",
    },
    "<",
  );

  tl.to(
    cloudsRef.current,
    {
      opacity: 0,
    },
    "<",
  );

  // 🎨 background transition (luxury wine red)
  tl.to(
    bgColor.current,
    {
      r: 0.96,
      g: 0.78,
      b: 0.82,
      onUpdate: () => {
        gl.setClearColor(bgColor.current, 1);
      },
      ease: "power2.out",
    },
    "<",
  );
  tl.to(
    bgColor.current,
    {
      r: 0.77, // rich pink
      g: 0.55,
      b: 0.75,
      onUpdate: () => gl.setClearColor(bgColor.current, 1),
      ease: "power1.inOut",
    },
    "stage2+=0.1", // happens later in scroll
  );

  return tl;
}
