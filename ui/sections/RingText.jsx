import { useScroll } from "@react-three/drei";
import getPageProgress from "../../src/utils/getPageProgress";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

export default function RingText() {
  const scroll = useScroll();
  const [progress, setProgress] = useState(0);

  useFrame(() => {
    setProgress(getPageProgress(scroll, 1, 3));
  });
  return (
    <div
      className="mr-5"
      style={{
        opacity: progress,
        transform: `scale(${0.95 + progress * 0.05})`,
        // marginRight: "100px",
        // height: "500px",
      }}
    >
      <h1 className="text-5xl mt-100">Exclusivity, Crafted Just for You</h1>
      <p className="text-3xl flex  justify-center my-3 tracking-[0.3em]">
        Crafted Precision
      </p>
      <p className="w-160 text-xl text-left flex leading-10">
        From the rarest gemstones sourced across continents to the finest gold
        and silver refined to perfection, we transform your deepest desires into
        wearable art. Every creation begins with your story, your vision, your
        dreams.
      </p>
      <div className="border-l-2 border-gray-400 pl-6 mb-10">
        <p className="text-base italic opacity-70 mb-2">
          "A century of trust, crafted into every piece"
        </p>
        <p className="text-sm opacity-50">— The Dhoopad Legacy</p>
      </div>
      <div className="mb-8">
        <div className="mb-8">
          <h3 className="text-sm font-semibold tracking-widest mb-4 opacity-60">
            OUR EXPERTISE
          </h3>
          <div className="grid grid-cols-2 gap-4 text-base opacity-75">
            <div>• Custom Engagement Rings</div>
            <div>• Traditional Rajasthani Sets</div>
            <div>• Gemstone Consultation</div>
            <div>• Heirloom Restoration</div>
            <div>• Bespoke Wedding Jewelry</div>
            <div>• Contemporary Designs</div>
          </div>
        </div>

        <p className="text-3xl font-light tracking-wider border-0 outline-none mb-4">
          BESPOKE · TIMELESS · YOURS
        </p>

        <p className="text-sm opacity-60 w-160 font-light">
          Each piece comes with a lifetime guarantee and certificate of
          authenticity, ensuring your investment becomes a cherished legacy for
          generations to come.
        </p>
      </div>
    </div>
  );
}
