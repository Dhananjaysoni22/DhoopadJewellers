import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Gallery() {
  const galleryRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      galleryRef.current,
      {
        opacity: 0,
        scale: 1.2, // Start more zoomed in to match the zoom-out effect
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      },
    );
  }, []);
  return (
    <div
      ref={galleryRef}
      className="gallery"
      style={{
        minHeight: "100vh",
        backgroundColor: "black", // Or whatever your gallery background should be
        color: "white",
      }}
    >
      <h1>Gallery Page</h1>
      {/* Your gallery content */}
      <p>This is the gallery content</p>
    </div>
  );
}
