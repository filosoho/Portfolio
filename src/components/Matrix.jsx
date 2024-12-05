import React, { useEffect, useRef, useState } from "react";

const Matrix = ({
  fontSizeMin,
  fontSizeMax,
  speed,
  colorSet,
  analogousColors,
  hueColors,
  displayMode,
  columnSpacing = 20,
  columnSpacing2 = 40,
  charLimit = 100,
  animationState,
}) => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1440, height: 680 });
  const [ypos, setYpos] = useState([]);

  const words = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "React Native",
    "JavaScript",
    "GSAP",
    "Three.js",
    "Vite",
    "DOM",
    "jQuery",
    "React",
    "Responsive Design",
    "WAVE",
    "Lighthouse",
    "Node.js",
    "Express.js",
    "API",
    "JavaScript",
    "SQL",
    "PostgreSQL",
    "Supabase",
    "MongoDB",
    "Git",
    "npm",
    "React",
    "Netlify",
    "Render",
    "Figma",
    "Illustrator",
    "Photoshop",
    "After Effects",
    "Procreate",
    "Linux",
    "Slack",
    "Trello",
    "Agile",
    "Scrum",
    "Excalidraw",
    "Paired Programming",
  ];

  const colorSets = {
    default: [
      "#FF6F61",
      "#6B5B95",
      "#88B04B",
      "#F7CAC9",
      "#92A8D1",
      "#955251",
      "#B565A7",
      "#009B77",
      "#DD4124",
      "#D65076",
      "#45B8AC",
      "#EFC050",
    ],
    analogous: analogousColors,
    hue: hueColors,
  };

  useEffect(() => {
    const updateCanvasSize = () => {
      const container = canvasRef.current.parentElement;
      const width = container.clientWidth;
      if (width <= 480) {
        setDimensions({ width, height: 360 });
      } else if (width <= 640) {
        setDimensions({ width, height: 338 });
      } else if (width <= 767) {
        setDimensions({ width, height: 528 });
      } else if (width <= 1024) {
        setDimensions({ width, height: 528 });
      } else if (width < 1200) {
        setDimensions({ width, height: 528 });
      } else {
        const aspectRatio = 1440 / 760;
        const newHeight = width / aspectRatio;
        setDimensions({ width, height: newHeight });
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  const intervalRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Canvas context not found");
      return;
    }

    const { width: w, height: h } = dimensions;
    canvas.width = w;
    canvas.height = h;

    const cols = Math.floor(w / columnSpacing) + 1;

    if (ypos.length === 0) {
      setYpos(Array(cols).fill(0));
    }

    const matrixEffect = () => {
      if (animationState === "stop") {
        ctx.clearRect(0, 0, w, h);
        return;
      }

      ctx.fillStyle = "#0002";
      ctx.fillRect(0, 0, w, h);

      const newYpos = [...ypos];

      newYpos.forEach((y, ind) => {
        let text;

        if (displayMode === "words") {
          text = words[Math.floor(Math.random() * words.length)];
        } else if (displayMode === "randomSymbols") {
          text = String.fromCharCode(Math.random() * 128);
        } else if (displayMode === "binary") {
          text = Math.random() > 0.5 ? "1" : "0";
        }

        const color = colorSets[colorSet]
          ? colorSets[colorSet][
              Math.floor(Math.random() * colorSets[colorSet].length)
            ]
          : "#FFFFFF";

        const fontSize =
          Math.floor(Math.random() * (fontSizeMax - fontSizeMin + 1)) +
          fontSizeMin;

        ctx.font = `${fontSize}pt monospace`;
        ctx.fillStyle = color;

        const x = ind * columnSpacing2;
        ctx.fillText(text, x, y);

        if (y > charLimit + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
      });
    };

    intervalRef.current = setInterval(matrixEffect, speed);

    return () => {
      clearInterval(intervalRef.current);
      canvas.width = 0;
      canvas.height = 0;
    };
  }, [
    fontSizeMin,
    fontSizeMax,
    speed,
    colorSet,
    analogousColors,
    hueColors,
    displayMode,
    columnSpacing,
    columnSpacing2,
    charLimit,
    animationState,
    ypos,
  ]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default Matrix;