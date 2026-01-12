import gsap from "gsap";

export default function introTimeline(logoRef) {
  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
  });

  // FIX ORIENTATION (text facing camera)
  tl.set(logoRef.current.rotation, {
    x: 1.54,
    y: 0,
    z: 0,
  });

  // START slightly inside clouds
  tl.set(logoRef.current.position, {
    y: -0.4,
    z: -0.2,
  });

  tl.set(logoRef.current.scale, {
    x: 0.25,
    y: 0.25,
    z: 0.25,
  });

  // FLOAT INTO VIEW
  tl.to(logoRef.current.position, {
    y: 0,
    z: 0.9,
    duration: 3,
  });

  return tl;
}
