import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HeroImage from "../components/HeroImage";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I am Anna";
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 150;
  const delayBetweenLoops = 1300;

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
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p
          className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans typing-effect"
          style={{ minHeight: "40px" }}
        >
          {text}
          <span className="caret"></span>
        </p>
        <p className="hero_tag text-gray_gradient">
          A curious Software Engineer
          <span>
            <img
              className="w-10 h-10  mx-3.5 mb-1 inline-block vertical-align-middle"
              src="/assets/octocat.png"
            />
          </span>
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroImage scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]} />

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
