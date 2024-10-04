import { useRef, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import gsap from "gsap";

const DemoComputer = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/computer_2.glb");

  //   const txt = useVideoTexture("/textures/project/project1.mp4");
  const txt = useTexture(
    props.texture ? props.texture : "/textures/project/project1.png"
  );

  const rotation = -1.57;

  txt.repeat.set(1, 1.5);
  txt.offset.set(1, 0);
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
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={9}
      position={[0, -6, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.Terminal}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_29.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_35.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials.Terminal_screen}
      >
        <meshBasicMaterial map={txt} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_41.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_47.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_50.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_53.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_56.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_59.geometry}
        material={materials.Terminal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_62.geometry}
        material={materials.Terminal}
      />
    </group>
  );
};

useGLTF.preload("/models/computer_2.glb");

export default DemoComputer;
