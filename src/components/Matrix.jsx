import React, { useEffect, useRef } from "react";

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
}) => {
  const canvasRef = useRef(null);

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
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Canvas context not found");
      return;
    }

    const w = canvas.width;
    const h = canvas.height;

    const cols = Math.floor(w / columnSpacing) + 1;
    const ypos = Array(cols).fill(0);

    const matrixEffect = () => {
      ctx.fillStyle = "#0002";
      ctx.fillRect(0, 0, w, h);

      ypos.forEach((y, ind) => {
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

    const interval = setInterval(matrixEffect, speed);

    return () => clearInterval(interval);
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
  ]);

  return <canvas ref={canvasRef} width="1260" height="685" />;
};

export default Matrix;
