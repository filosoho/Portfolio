import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  // Move logic outside JSX
  const progressText =
    progress !== 0 ? `${progress.toFixed(2)}%` : "Loading...";

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        className="text-center font-generalsans"
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progressText}
      </p>
    </Html>
  );
};

export default CanvasLoader;
