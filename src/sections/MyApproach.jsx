import { Suspense, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { myApproachValues } from "../constants/index.js";
import { useDebounce } from "../hooks/useDebounce";

const MyApproach = () => {
  const [animationName, setAnimationName] = useState("idle");
  const debouncedAnimationName = useDebounce(animationName, 500);

  return (
    <section className="c-space my-20" id="myApproach">
      <div className="w-full text-white-600">
        <h2 className="head-text">My Approach</h2>

        <div className="my-approach-container">
          <div className="my-approach-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {myApproachValues.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() =>
                    setAnimationName(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName("idle")}
                  className="my-approach-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="my-approach-content_logo">
                      <img
                        className="w-full h-full"
                        src={item.icon}
                        alt={item.alt}
                        loading="lazy"
                      />
                    </div>
                    <div className="my-approach-content_bar" />
                  </div>
                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800 mb-5">
                      {item.title}
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="my-approach-canvas canvas-full-height">
            <Canvas>
              <AdaptiveDpr pixelated />
              <AdaptiveEvents />
              <ambientLight intensity={3} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  scale={2.5}
                  rotation={[-1.5, 0, 0]}
                  position={[0.1, -2, 0]}
                  animationName={debouncedAnimationName}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyApproach;
