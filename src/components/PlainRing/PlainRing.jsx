import { useGLTF } from "@react-three/drei";
import { forwardRef, useEffect } from "react";
import * as THREE from "three";

export default forwardRef(function PlainRing(props, ref) {
  const gltf = useGLTF("/chala.glb");

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (!child.isMesh) return;
      // console.log(gltf);

      // 🔎 DEBUG (keep this once, then remove)
      // console.log("MESH:", child.name);

      // 💎 Detect diamond meshes (adjust name if needed)
      const isDiamond =
        child.name.toLowerCase().includes("diamond") ||
        child.material?.name?.toLowerCase().includes("diamond");

      if (isDiamond) {
        // ✅ Replace with real diamond material
        child.material = new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          transmission: 1,
          thickness: 1.2,
          roughness: 0,
          metalness: 0,
          ior: 2.417,
          reflectivity: 1,
          envMapIntensity: 25,
          clearcoat: 1,
          clearcoatRoughness: 0,
          attenuationColor: new THREE.Color("#ffffff"),
          attenuationDistance: 0.4,
        });

        child.castShadow = true;
        child.receiveShadow = true;
      } else {
        // 💍 Keep metal parts correct
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [gltf]);

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.geometry.center();
      }
    });

    // Set initial position once on the ref instead
    if (ref.current) {
      ref.current.position.set(0.25, -0.4, -0.8);
    }
  }, [gltf, ref]);

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      // Remove position prop - let the scroll animation control it
    />
  );
});
