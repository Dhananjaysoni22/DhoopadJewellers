import { useState } from "react";
import { motion } from "framer-motion";

export default function InfiniteCarousel({ imgSet }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev - 1 + imgSet.length) % imgSet.length);

  const next = () => setIndex((prev) => (prev + 1) % imgSet.length);

  return (
    <div className="relative w-full h-87.5 sm:h-112.5 md:h-175 flex items-center justify-center overflow-hidden">
      {imgSet.map((img, i) => {
        const diff = (i - index + imgSet.length) % imgSet.length;

        let position = "";
        if (diff === 0) position = "center";
        else if (diff === 1) position = "right";
        else if (diff === imgSet.length - 1) position = "left";
        else position = "hidden";

        if (position === "hidden") return null;

        return (
          <motion.img
            key={img + index} // 🔥 important fix
            src={img}
            onClick={() => {
              if (position === "left") prev();
              if (position === "right") next();
            }}
            className="absolute cursor-pointer rounded-2xl shadow-2xl object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              x:
                position === "center"
                  ? 0
                  : position === "left"
                    ? "-40%"
                    : "40%",
              scale: position === "center" ? 1 : 0.85,
              opacity: position === "center" ? 1 : 0.5,
              filter: position === "center" ? "blur(0px)" : "blur(4px)",
              zIndex: position === "center" ? 20 : 10,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            style={{
              width: "clamp(220px, 40%, 500px)",
              height: "80%",
            }}
          />
        );
      })}
    </div>
  );
}
