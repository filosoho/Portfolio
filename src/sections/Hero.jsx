import { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HeroImage from "../components/HeroImage";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import Matrix from "../components/Matrix";
import MatrixControls from "../components/MatrixControls";

const Hero = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Anna";
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 150;
  const delayBetweenLoops = 1300;

  const [fontSizeMin, setFontSizeMin] = useState(12);
  const [fontSizeMax, setFontSizeMax] = useState(16);
  const [speed, setSpeed] = useState(250);
  const [colorSet, setColorSet] = useState("default");
  const [analogousColors, setAnalogousColors] = useState([]);
  const [hueColors, setHueColors] = useState([]);
  const [controlsVisible, setControlsVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [displayMode, setDisplayMode] = useState("words");
  const [columnSpacing, setColumnSpacing] = useState(20);
  const [columnSpacing2, setColumnSpacing2] = useState(40);
  const [charLimit, setCharLimit] = useState(100);

  const cameraRef = useRef();
  const controlsRef = useRef();

  const isSmall = useMediaQuery({ query: "(max-width: 440px)" });
  const isMedium = useMediaQuery({ query: "(max-width: 640px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "( min-width: 767px) and (max-width: 1024px)",
  });

  const sizes = calculateSizes(isSmall, isMedium, isMobile, isTablet);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHeroImageClick = () => {
    // setControlsVisible((prev) => !prev);
    setControlsVisible(true);
  };

  const handleClickOutside = (event) => {
    if (
      controlsVisible &&
      controlsRef.current &&
      !controlsRef.current.contains(event.target)
    ) {
      setControlsVisible(false);
    }
  };

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

  useEffect(() => {
    // Add event listener for clicks outside the MatrixControls
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [controlsVisible]);

  // Update this effect to set the analogous colors whenever the colorSet changes
  const handleAnalogousColorsChange = (newColors) => {
    setAnalogousColors(newColors); // Update the state with new colors
  };

  const handleHueColorsChange = (newColors) => {
    setHueColors(newColors); // Update the state with new colors
  };

  return (
    <section id="home" className="relative min-h-screen w-full">
      <div className="absolute inset-0 -z-10">
        <div style={{ marginTop: "70px" }}>
          <Matrix
            fontSizeMin={fontSizeMin}
            fontSizeMax={fontSizeMax}
            speed={speed}
            colorSet={colorSet}
            analogousColors={analogousColors}
            hueColors={hueColors}
            displayMode={displayMode}
          />
        </div>
      </div>

      <div className="flex items-center justify-center hero-container">
        {/* <section className=" min-h-screen w-full flex flex-col relative header"> */}
        <section
          className={`min-h-screen w-full flex flex-col relative header ${
            isHeaderVisible ? "visible" : "hidden"
          }`}
        >
          {isHeaderVisible && (
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
              <p className="hi-tag typing-effect">
                {text}
                <span className="caret"></span>
              </p>
              <p className="hero_tag text-gray_gradient">
                A Curious Front End Developer
                {/* <span>
                <img
                  className="octocat-img vertical-align-middle"
                  src="/assets/octocat.png"
                />
              </span> */}
              </p>
            </div>
          )}

          <div className="w-full h-full absolute inset-0">
            <Leva />

            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera
                  ref={cameraRef}
                  makeDefault
                  position={[0, 0, 30]}
                />

                <HeroCamera isMobile={isMobile}>
                  {controlsVisible ? null : (
                    <HeroImage
                      camera={cameraRef.current}
                      position={sizes.deskPosition}
                      rotation={sizes.deskRotation}
                      scale={sizes.deskScale}
                      onClick={handleHeroImageClick}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </HeroCamera>

                <ambientLight intensity={1} />
                <directionalLight position={[5, 2, 5]} intensity={2} />
              </Suspense>
            </Canvas>
          </div>

          <div className="hero-btn  absolute bottom-7 left-0 right-0 w-full z-10 c-space">
            <Button
              name="Let's work together"
              isBeam
              containerClass="sm:w-fit w-full sm:min-w-96"
              onClick={handleButtonClick}
            />
          </div>

          <section
            className="flex justify-center  items-center "
            style={{ position: "relative" }}
          >
            {controlsVisible && (
              <>
                <div className="controls" ref={controlsRef}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "absolute",
                      top: "165px",
                      right: "76px",
                      zIndex: 100,
                      borderRadius: "5px",
                      backdropFilter: "blur(8px)",
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <MatrixControls
                      fontSizeMin={fontSizeMin}
                      setFontSizeMin={setFontSizeMin}
                      fontSizeMax={fontSizeMax}
                      setFontSizeMax={setFontSizeMax}
                      speed={speed}
                      setSpeed={setSpeed}
                      colorSet={colorSet}
                      setColorSet={setColorSet}
                      onAnalogousColorsChange={handleAnalogousColorsChange}
                      onHueColorsChange={handleHueColorsChange}
                      isHeaderVisible={isHeaderVisible}
                      setIsHeaderVisible={setIsHeaderVisible}
                      displayMode={displayMode}
                      setDisplayMode={setDisplayMode}
                      setColumnSpacing={setColumnSpacing}
                      setColumnSpacing2={setColumnSpacing2}
                      columnSpacing={columnSpacing}
                      columnSpacing2={columnSpacing2}
                      charLimit={charLimit}
                      setCharLimit={setCharLimit}
                    />
                    {/* <button
                      style={{
                        position: "relative",
                        // top: "280px",
                        // right: "530px",

                        zIndex: 10,
                        backgroundColor: "rgba(19, 19, 19, 0.75)",
                        boxShadow: "1px 1px 2px rgba(126, 126, 126, 0.35)",
                        color: "#f5deb3",
                        fontSize: "14px",
                        border: "1px solid #ccc",
                        padding: "8px 20px",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                      onClick={() => setControlsVisible((prev) => !prev)}
                    >
                      Hide Controls
                    </button> */}
                  </div>
                </div>
              </>
            )}
          </section>
        </section>
        {/* Always show the header toggle button */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: 100,
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "695px",
              right: "1240px",
              backgroundColor: "rgba(0, 0, 0, 0.7)",

              fontSize: "14px",
              color: "wheat",
              width: "110px",
              padding: "10px",
              borderRadius: "6px",
              cursor: "pointer",
              border: "1px solid rgba(245, 222, 179, 0.5)",
              // rgba(245, 222, 179, 0.7)
            }}
            onClick={() => setIsHeaderVisible((prev) => !prev)}
          >
            {isHeaderVisible ? "Hide Header" : "Show Header"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
