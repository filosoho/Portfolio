import React, { useState, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");

const HeroImage = React.forwardRef(({ onClick, ...props }, ref) => {
  const { nodes, materials } = useGLTF("/models/low_poly_sci-fi_tablet.glb");
  const groupRef = useRef();

  const [scale, setScale] = useState(5);
  const [position, setPosition] = useState([0, -1.5, 0]);

  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  }

  const debouncedWidth = useDebounce(window.innerWidth, 150);

  useEffect(() => {
    // Handle resize logic within the effect
    const handleResize = () => {
      if (debouncedWidth <= 480) {
        setScale(8);
        setPosition([0, -22, 0]);
      } else if (debouncedWidth <= 640) {
        setScale(5);
        setPosition([0, -10, 0]);
      } else if (debouncedWidth <= 767) {
        setScale(5);
        setPosition([0, -5.5, 0]);
      } else if (debouncedWidth <= 1200) {
        setScale(2.5);
        setPosition([0, -2.5, 0]);
      } else {
        setScale(3);
        setPosition([0, -1.5, 0]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <group
      ref={ref || groupRef}
      {...props}
      dispose={null}
      onClick={onClick}
      onPointerOver={(e) => (document.body.style.cursor = "pointer")}
      onPointerOut={(e) => (document.body.style.cursor = "default")}
    >
      <group position={position} rotation={[0, 0, 0]} scale={scale}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh castShadow receiveShadow>
            <mesh
              geometry={nodes.defaultMaterial.geometry}
              material={materials.MAT_TabletGlass}
            />
            <mesh
              geometry={nodes.defaultMaterial_1.geometry}
              material={materials.MAT_OpacityText}
            />
            <mesh
              geometry={nodes.defaultMaterial_2.geometry}
              material={materials.MAT_Tablet}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
});

useGLTF.preload("/models/low_poly_sci-fi_tablet.glb", true, dracoLoader);

export default HeroImage;
