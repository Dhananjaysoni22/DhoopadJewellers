import { useEffect, useRef } from "react";
import gsap from "gsap";
import InfiniteCarousel from "../components/Gallery/InfiniteCarousel";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const galleryRef = useRef(null);
  const navigate = useNavigate();
  const images = ["/D1.png", "/D2.png", "/D3.png", "/D2.png", "/D1.png"];
  const gemImg = ["/G1.jpg", "/G2.jpg", "/G3.jpg"];

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

  const handleNavigate = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <div className="fixed top-6 left-6 z-50">
        <button
          className="px-5 py-2 bg-[#BF953F] text-black rounded-full shadow-lg hover:scale-105 transition"
          onClick={handleNavigate}
        >
          Back
        </button>
      </div>
      <div
        ref={galleryRef}
        className="gallery"
        style={{
          minHeight: "100vh",
          backgroundColor: "black", // Or whatever your gallery background should be
          color: "white",
        }}
      >
        <div className="mb-6">
          <div className="relative w-full flex justify-center items-center py-13">
            {/* Background Script Text */}
            <span
              className="absolute text-[300px] opacity-20 select-none pointer-events-none"
              style={{
                fontFamily: "'Qwitcher Grypen', cursive",
                color: "#C6A75E",
              }}
            >
              Gallery
            </span>
            {/* Foreground Main Title */}
            <h1
              className="relative text-6xl translate-y-10 opacity-90 bg-linear-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent"
              style={{
                fontFamily: "'Playfair Display SC', serif",
                color: "#B8960B",
              }}
            >
              GALLERY
            </h1>
          </div>
        </div>
        <InfiniteCarousel imgSet={images} />
        <div>
          <div className="relative w-full flex justify-center items-center py-13">
            {/* Background Script Text */}
            <span
              className="absolute text-[300px] opacity-20 select-none pointer-events-none"
              style={{
                fontFamily: "'Qwitcher Grypen', cursive",
                color: "#C6A75E",
              }}
            >
              Gems
            </span>
            {/* Foreground Main Title */}
            <h1
              className="relative text-6xl translate-y-10 opacity-90 bg-linear-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent"
              style={{
                fontFamily: "'Playfair Display SC', serif",
                color: "#B8960B",
              }}
            >
              Gems
            </h1>
          </div>
          <InfiniteCarousel imgSet={gemImg} />
        </div>
      </div>
    </>
  );
}
