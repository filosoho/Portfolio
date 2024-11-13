/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: EnigmaticDragon (https://sketchfab.com/EnigmaticDragon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/retro-computer-cecd3967c85642b4b5f124f50bb66b6e
Title: Retro Computer
*/

import React from "react";
import { useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import gsap from "gsap";

const DemoComputer = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/retro_computer-atom.glb");

  const txt = useTexture(
    props.texture ? props.texture : "/textures/project/project1.png"
  );

  const rotation = 0;

  txt.repeat.set(1.2, 1.6);
  txt.offset.set(-0.1, -0.5);
  txt.rotation = rotation;

  useEffect(() => {
    if (txt) {
      txt.flipY = false;
    }
  }, [txt]);

  useEffect(() => {
    if (group.current) {
      gsap.from(group.current.rotation, {
        y: -Math.PI / 2,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={4.5}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.computer}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.screen}
          >
            {" "}
            <meshBasicMaterial map={txt} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.computer}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/retro_computer-atom.glb");
export default DemoComputer;
