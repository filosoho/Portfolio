import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/Loading.jsx";
import { myApproachValues } from "../constants/index.js";

const MyApproach = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Approach</p>

        <div className="work-container">
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {myApproachValues.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() =>
                    setAnimationName(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName("idle")}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img
                        className="w-full h-full"
                        src={item.icon}
                        alt="company logo"
                      />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    {/* <p className="font-bold text-white-800">{item.pos}</p> */}
                    <p className="text-sm mb-5">
                      {item.name}
                      {/* <br /> <span>{item.duration}</span>
                       */}
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.title}
                    </p>
                    {/* <div className="group-hover:text-white transition-all ease-in-out duration-500 ">
                      <ul>
                        {Array.isArray(item.title) &&
                          item.title.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                      </ul>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={3} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  scale={2.5}
                  rotation={[-1.5, 0, 0]}
                  position={[0.1, -2, 0]}
                  animationName={animationName}
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
