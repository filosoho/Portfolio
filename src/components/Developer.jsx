/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGraph } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

const Developer = ({ animationName = "idle", ...props }) => {
  const group = useRef();

  const { scene } = useGLTF("/models/animations/developer.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: idleAnimation } = useFBX("/models/animations/idle.fbx");
  const { animations: saluteAnimation } = useFBX(
    "/models/animations/salute.fbx"
  );
  const { animations: headNodYesAnimation } = useFBX(
    "/models/animations/bow.fbx"
  );
  const { animations: clappingAnimation } = useFBX(
    "/models/animations/clapping.fbx"
  );
  const { animations: thankfulAnimation } = useFBX(
    "/models/animations/thankful.fbx"
  );

  idleAnimation[0].name = "idle";
  saluteAnimation[0].name = "salute";
  headNodYesAnimation[0].name = "bow";
  clappingAnimation[0].name = "clapping";
  thankfulAnimation[0].name = "thankful";

  const filterTracks = (animation) => {
    return {
      ...animation,
      tracks: animation.tracks.filter(
        (track) => !track.name.includes("Armature.quaternion")
      ),
    };
  };

  const filteredIdleAnimation = filterTracks(idleAnimation[0]);
  const filteredSaluteAnimation = filterTracks(saluteAnimation[0]);
  const filteredHeadNodYesAnimation = filterTracks(headNodYesAnimation[0]);
  const filteredClappingAnimation = filterTracks(clappingAnimation[0]);
  const filteredThankfulAnimation = filterTracks(thankfulAnimation[0]);

  const { actions } = useAnimations(
    [
      filteredIdleAnimation,
      filteredSaluteAnimation,
      filteredHeadNodYesAnimation,
      filteredClappingAnimation,
      filteredThankfulAnimation,
    ],
    group
  );
  useEffect(() => {
    if (actions && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
    }
    return () => {
      if (actions && actions[animationName]) {
        actions[animationName].fadeOut(0.5);
      }
    };
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials["Wolf3D_Eye.007"]}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials["Wolf3D_Eye.007"]}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials["Wolf3D_Body.007"]}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials["Wolf3D_Glasses.007"]}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials["Wolf3D_Hair.007"]}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials["Wolf3D_Skin.007"]}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials["Wolf3D_Outfit_Bottom.007"]}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials["Wolf3D_Outfit_Footwear.007"]}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials["Wolf3D_Outfit_Top.007"]}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials["Wolf3D_Teeth.007"]}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <primitive object={nodes.Hips} />
    </group>
  );
};

useGLTF.preload("/models/animations/developer.glb");

export default Developer;
