import React, { useState, useEffect, useRef } from "react";
import { HexColorPicker } from "react-colorful";
import chroma from "chroma-js";

const MatrixControls = ({
  fontSizeMin,
  setFontSizeMin,
  fontSizeMax,
  setFontSizeMax,
  speed,
  setSpeed,
  colorSet,
  setColorSet,
  onAnalogousColorsChange,
  onHueColorsChange,
  displayMode,
  setDisplayMode,
  setColumnSpacing,
  setColumnSpacing2,
  setCharLimit,
  columnSpacing,
  columnSpacing2,
  charLimit,
}) => {
  const [selectedColor, setSelectedColor] = useState(() => {
    return localStorage.getItem("selectedColor") || "#FF6F61";
  });
  const [colorSets, setColorSets] = useState({
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
    analogous: [],
    hue: [],
  });
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const pickerRef = useRef(null);

  const generateHueColors = (baseColor) => {
    const base = chroma(baseColor);
    const hueShift = 30;
    const lightnessShift = 0.2;

    return [
      base
        .set("hsl.h", base.get("hsl.h") + hueShift)
        .set("hsl.l", base.get("hsl.l") + lightnessShift)
        .hex(),
      base
        .set("hsl.h", base.get("hsl.h") - hueShift)
        .set("hsl.l", base.get("hsl.l") - lightnessShift)
        .hex(),
      base
        .set("hsl.h", base.get("hsl.h") + hueShift * 2)
        .set("hsl.l", base.get("hsl.l") + lightnessShift * 1.5)
        .hex(),
      base
        .set("hsl.h", base.get("hsl.h") - hueShift * 2)
        .set("hsl.l", base.get("hsl.l") - lightnessShift * 1.5)
        .hex(),
      base
        .set("hsl.h", base.get("hsl.h") + hueShift * 3)
        .set("hsl.l", base.get("hsl.l") + lightnessShift * 2)
        .hex(),
      base
        .set("hsl.h", base.get("hsl.h") - hueShift * 3)
        .set("hsl.l", base.get("hsl.l") - lightnessShift * 2)
        .hex(),
    ];
  };

  const generateAnalogousColors = (baseColor) => {
    const base = chroma(baseColor);
    const hueShift = 10;
    const lightnessShift = 0.15;

    return [
      base
        .set("hsl.h", base.get("hsl.h") + hueShift)
        .set("hsl.l", base.get("hsl.l") + lightnessShift)
        .hex(),
      base
        .set("hsl.h", base.get("hsl.h") - hueShift)
        .set("hsl.l", base.get("hsl.l") - lightnessShift)
        .hex(),
      base
        .set("hsl.h", base.get("hsl.h") + hueShift / 2)
        .set("hsl.l", base.get("hsl.l") + lightnessShift * 1.2)
        .hex(),
      base
        .set("hsl.h", base.get("hsl.h") - hueShift / 2)
        .set("hsl.l", base.get("hsl.l") - lightnessShift * 1.2)
        .hex(),
      base.set("hsl.l", base.get("hsl.l") + lightnessShift * 2).hex(),
      base.set("hsl.l", base.get("hsl.l") - lightnessShift * 2).hex(),
    ];
  };

  useEffect(() => {
    if (colorSet === "analogous") {
      const newAnalogousColors = generateAnalogousColors(selectedColor);
      if (
        JSON.stringify(newAnalogousColors) !==
        JSON.stringify(colorSets.analogous)
      ) {
        setColorSets((prev) => ({
          ...prev,
          analogous: newAnalogousColors,
        }));
        onAnalogousColorsChange(newAnalogousColors);
      }
    } else if (colorSet === "hue") {
      const newHueColors = generateHueColors(selectedColor);
      if (JSON.stringify(newHueColors) !== JSON.stringify(colorSets.hue)) {
        setColorSets((prev) => ({
          ...prev,
          hue: newHueColors,
        }));

        onHueColorsChange(newHueColors);
      }
    }
  }, [selectedColor, colorSet, onAnalogousColorsChange, onHueColorsChange]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsPickerOpen(false);
      }
    };

    if (isPickerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPickerOpen]);

  useEffect(() => {
    localStorage.setItem("selectedColor", selectedColor);
  }, [selectedColor]);

  return (
    <div className="matrix-controls">
      <label
        htmlFor="fontSizeMin"
        style={{ display: "flex", alignItems: "center" }}
      >
        <span style={{ flex: "1" }}>Font Size (min):</span>
        <input
          id="fontSizeMin"
          type="range"
          min="1"
          max="40"
          value={fontSizeMin}
          onChange={(e) => setFontSizeMin(Number(e.target.value))}
          className="styled-range"
          style={{ flex: "1", marginLeft: "10px" }}
        />
        <span style={{ marginLeft: "10px" }}>{fontSizeMin}</span>
      </label>

      <label
        htmlFor="fontSizeMax"
        style={{ display: "flex", alignItems: "center" }}
      >
        <span style={{ flex: "1" }}>Font Size (max):</span>
        <input
          id="fontSizeMax"
          type="range"
          min="1"
          max="50"
          value={fontSizeMax}
          onChange={(e) => setFontSizeMax(Number(e.target.value))}
          className="styled-range"
          style={{ flex: "1", marginLeft: "10px" }}
        />
        <span style={{ marginLeft: "10px" }}>{fontSizeMax}</span>
      </label>

      <label
        htmlFor="columnSpacing"
        style={{ display: "flex", alignItems: "center" }}
      >
        <span style={{ flex: "1" }}>Column Gap (calc):</span>
        <input
          id="columnSpacing"
          type="range"
          min="1"
          max="100"
          value={columnSpacing}
          onChange={(e) => setColumnSpacing(Number(e.target.value))}
          className="styled-range"
          style={{ flex: "1", marginLeft: "10px" }}
        />
        <span style={{ marginLeft: "10px" }}>{columnSpacing}</span>
      </label>

      <label
        htmlFor="columnSpacing2"
        style={{ display: "flex", alignItems: "center" }}
      >
        <span style={{ flex: "1" }}>Column Pos (calc):</span>
        <input
          id="columnSpacing2"
          type="range"
          min="1"
          max="100"
          value={columnSpacing2}
          onChange={(e) => setColumnSpacing2(Number(e.target.value))}
          className="styled-range"
          style={{ flex: "1", marginLeft: "10px" }}
        />
        <span style={{ marginLeft: "10px" }}>{columnSpacing2}</span>
      </label>
      <label
        htmlFor="charLimit"
        style={{ display: "flex", alignItems: "center" }}
      >
        <span style={{ flex: "1" }}>Text Height (max):</span>
        <input
          id="charLimit"
          type="range"
          min="1"
          max="1000"
          value={charLimit}
          onChange={(e) => setCharLimit(Number(e.target.value))}
          className="styled-range"
          style={{ flex: "1", marginLeft: "10px" }}
        />
        <span style={{ marginLeft: "10px" }}>{charLimit}</span>
      </label>

      <label htmlFor="speed" style={{ display: "flex", alignItems: "center" }}>
        <span style={{ flex: "1" }}>Speed (ms):</span>
        <input
          id="speed"
          type="range"
          min="5"
          max="250"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="styled-range"
          style={{ flex: "1", marginLeft: "10px" }}
        />
        <span style={{ marginLeft: "10px" }}>{speed}</span>
      </label>

      <label
        htmlFor="displayMode"
        style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
      >
        Display Mode:
        <select
          value={displayMode}
          onChange={(e) => setDisplayMode(e.target.value)}
          className="color-set-select"
          style={{
            flex: "1.5",
            marginLeft: "38px",
            borderRadius: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "5px 10px",
          }}
        >
          <option value="words">Tech Stack</option>
          <option value="randomSymbols">Random Symbols</option>
          <option value="binary">Binary (0 and 1)</option>
        </select>
      </label>

      <label
        htmlFor="colorSet"
        style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
      >
        <span style={{ flex: "1" }}>Color Set:</span>
        <select
          id="colorSet"
          value={colorSet}
          onChange={(e) => {
            setColorSet(e.target.value);
            if (e.target.value === "analogous" || e.target.value === "hue") {
              setIsPickerOpen(true);
            } else {
              setIsPickerOpen(false);
            }
          }}
          className="color-set-select"
          style={{
            flex: "1.5",
            marginLeft: "25px",
            borderRadius: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "5px 10px",
          }}
        >
          <option value="default">Colourful</option>
          <option value="analogous">Analogous Colors</option>
          <option value="hue">Hue</option>
        </select>
      </label>

      {/* Color Picker */}
      {(colorSet === "analogous" || colorSet === "hue") && isPickerOpen && (
        <>
          <div
            style={{
              marginTop: "10px",
              marginRight: "10px",
              width: "fit-content",
            }}
          >
            Select Base Color:
          </div>
          <div
            ref={pickerRef}
            style={{ marginTop: "10px", width: "fit-content" }}
          >
            <HexColorPicker
              style={{ marginTop: "10px" }}
              color={selectedColor}
              onChange={setSelectedColor}
            />
          </div>
        </>
      )}

      {/* Button to toggle color picker visibility */}
      {(colorSet === "analogous" || colorSet === "hue") && !isPickerOpen && (
        <button
          onClick={() => setIsPickerOpen(true)}
          style={{ marginTop: "10px" }}
        >
          Show Color Picker
        </button>
      )}
    </div>
  );
};

export default MatrixControls;