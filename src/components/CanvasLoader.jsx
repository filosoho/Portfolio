import { Html, useProgress } from "@react-three/drei";
import { useMemo } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();

  // Memoize the progress text to prevent unnecessary renders
  const progressText = useMemo(
    () => (progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."),
    [progress]
  );

  return (
    <Html as="div" center className="canvas-loader-container">
      <span className="canvas-loader"></span>
      <p className="text-center canvas-loader-text font-generalsans">
        {progressText}
      </p>
    </Html>
  );
};

export default CanvasLoader;
