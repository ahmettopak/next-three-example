import React, { useEffect, useState, useRef } from "react";
import { Html } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three/src/core/Object3D"; //Object3D types

interface group {
  current: {
    rotation: {
      x: number;
      y: number;
    };
  };
}

type ModelProps = {
  data: [number, number, number];
};


const Model = ({ data }: ModelProps) => {
  const [x, y, z] = data;
  /* Refs */
  const group: group = useRef();

  /* State */
  const [model, setModel] = useState<Object3D | null>(null);

  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("scene.gltf", async (gltf) => {
      const nodes = await gltf.parser.getDependencies("node");
      setModel(nodes[0]);

    });
  }, []);

  return (
    <>
      {model ? (
        <group ref={group} position={[x, y, z]} dispose={null}>
          <primitive ref={group} name="Object_0" object={model} />
        </group>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  );
};

export default Model;
