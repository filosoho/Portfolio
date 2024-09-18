import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HeroImage from "../components/HeroImage-2";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva } from "leva";
// import {useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Anna";
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 150;
  const delayBetweenLoops = 1300;

  // const controls = useControls("HeroImage", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },

  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // });

  const isSmall = useMediaQuery({ query: "(max-width: 440px)" });
  const isMedium = useMediaQuery({ query: "(max-width: 640px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "( min-width: 767px) and (max-width: 1024px)",
  });

  const sizes = calculateSizes(isSmall, isMedium, isMobile, isTablet);

  useEffect(() => {
    let timeout;
    if (isTyping) {
      timeout = setTimeout(() => {
        setText((prev) => {
          const nextText = fullText.slice(0, prev.length + 1);
          if (nextText === fullText) {
            setIsTyping(false);
          }
          return nextText;
        });
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText("");
        setIsTyping(true);
      }, delayBetweenLoops);
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  return (
    <>
      <section className="min-h-screen w-full flex flex-col relative header">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
          <p className="hi-tag typing-effect">
            {text}
            <span className="caret"></span>
          </p>
          <p className="hero_tag text-gray_gradient">
            A Curious Software Engineer
            <span>
              <img
                className="octocat-img vertical-align-middle"
                src="/assets/octocat.png"
              />
            </span>
          </p>
        </div>

        <div className="w-full h-full absolute inset-0">
          <Leva />
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />

              <HeroCamera isMobile={isMobile}>
                <HeroImage
                  // scale={1}
                  // position={[0, 0, 0]}
                  // rotation={[0, 0, 0]}
                  // position={[0.35, 1.5, 3.5]}
                  position={sizes.deskPosition}
                  rotation={sizes.deskRotation}
                  scale={sizes.deskScale}
                />
              </HeroCamera>

              <ambientLight intensity={1} />
              {/* <directionalLight position={[5, 2, 5]} intensity={2} /> */}
              <directionalLight position={[5, 2, 5]} intensity={2} />
            </Suspense>
          </Canvas>
        </div>

        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
          <a href="#about" className="w-fit">
            <Button
              name="Let's work together"
              isBeam
              containerClass="sm:w-fit w-full sm:min-w-96"
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
