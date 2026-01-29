import { useScroll } from "@react-three/drei";
import getPageProgress from "../../src/utils/getPageProgress";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

function PlainRingText() {
  const scroll = useScroll();
  const [progress, setProgress] = useState(0);
  useFrame(() => {
    // Define page 3 range (4 pages total)
    const page3Start = 2 / 4; // 0.5
    const page3End = 3 / 4; // 0.75

    const isOnPage3 = scroll.offset >= page3Start && scroll.offset < page3End;

    if (isOnPage3) {
      // Fully visible only on page 3
      setProgress(1);
    } else {
      // Normal fade-in on page 2
      const rawProgress = getPageProgress(scroll, 2, 4);
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(clampedProgress);
    }
  });

  return (
    <div
      className="max-w-3xl mt-90 mr-160 text-gray-900 z-10 pointer-events-none ring-0 shadow-none"
      style={{
        opacity: progress,
        transform: `scale(${0.95 + progress * 0.05})`,
      }}
    >
      <h1 className="text-5xl font-extralight mb-4 border-0 outline-none leading-tight tracking-tight">
        Rooted in Tradition,
        <br />
        Inspired by Tomorrow
      </h1>

      <div className="w-20 h-px bg-gray-400 mb-5"></div>

      <p className="text-sm font-semibold tracking-widest mb-3 opacity-50 border-0 outline-none">
        THE JAIPUR LEGACY
      </p>

      <p className="text-lg leading-relaxed mb-4 opacity-85 border-0 outline-none font-light">
        Nestled in the heart of the Pink City, our atelier has been the trusted
        name for discerning patrons for over a century. Since 1920, four
        generations of master craftsmen have called our workshop home,
        preserving ancient techniques while embracing contemporary innovation.
      </p>

      <p className="text-lg leading-relaxed mb-4 opacity-85 border-0 outline-none font-light">
        We are custodians of Rajasthan's rich jewelry heritage—from intricate
        Kundan work and delicate Meenakari enameling to the timeless beauty of
        Polki diamonds and traditional Jadau settings. Each technique, passed
        down through generations, carries the soul of royal craftsmanship.
      </p>

      <p className="text-lg leading-relaxed mb-4 opacity-85 border-0 outline-none font-light">
        Yet tradition is only half our story. We blend centuries-old artistry
        with modern design sensibilities, creating pieces that honor the past
        while speaking to today's sophisticated aesthetic. From statement
        necklaces inspired by Mughal courts to minimalist contemporary rings, we
        bridge eras with grace.
      </p>

      <div className=" border-l-4 p-6 mb-4 font-serif">
        <p className="text-base leading-relaxed opacity-80 font-light">
          Our commitment extends beyond creation. Every piece undergoes rigorous
          quality checks, comes with detailed gemstone certification, and is
          backed by our family's century-old promise of authenticity and
          excellence.
        </p>
      </div>

      <p className="text-lg leading-relaxed mb-4 opacity-85 border-0 outline-none font-light">
        From royal families and heritage collectors to modern couples
        celebrating their love stories, Dhoopad Jewellers has been the keeper of
        precious moments. Your milestone becomes our mission, your vision
        becomes our craft.
      </p>

      <p className="text-3xl font-light tracking-wider border-0 outline-none mb-4">
        HERITAGE · INNOVATION · EXCELLENCE
      </p>

      <p className="text-sm opacity-60 font-light italic">
        Located in the artisan heart of Jaipur, where every stone tells a story
        and every setting holds a secret passed down through time.
      </p>
    </div>
  );
}

export default PlainRingText;
