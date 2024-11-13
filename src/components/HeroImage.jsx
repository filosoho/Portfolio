import React from "react";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const HeroImage = React.forwardRef(({ onClick, ...props }, ref) => {
  const { nodes, materials } = useGLTF("/models/low_poly_sci-fi_tablet.glb");
  const groupRef = useRef();

  return (
    <group
      ref={ref || groupRef}
      {...props}
      dispose={null}
      onClick={onClick}
      onPointerOver={(e) => (document.body.style.cursor = "pointer")}
      onPointerOut={(e) => (document.body.style.cursor = "default")}
    >
      <group position={[0, -1.5, 0]} rotation={[0, 0, 0]} scale={5}>
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

useGLTF.preload("/models/low_poly_sci-fi_tablet.glb");

export default HeroImage;
