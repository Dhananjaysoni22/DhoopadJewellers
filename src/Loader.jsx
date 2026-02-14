// Loader.jsx
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-white">
        <p className="text-2xl text-black font-bold">{progress.toFixed(0)} %</p>
        <div className="w-55 h-2 bg-gray-700 rounded mt-2">
          <div
            className="h-full bg-white rounded transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Html>
  );
}
