import React from "react";
import { Canvas } from "react-three-fiber";
import Lights from "@/components/Light";
import Model from "@/components/Model";
import { useParams, useLocation } from "react-router-dom";


const App = () => {

  const { param1, param2 } = useParams<{ param1: string; param2: string }>();
  console.log({ param2 });
  console.log({ param1 });
  return (
    <>
      <Canvas colorManagement camera={{ position: [0, 0, 300] }}>
        <Lights />
        <Model data={[1, -50, 3]} />
        <Model data={[4, 100, 6]} />

      </Canvas>
    </>
  );
};

export default App;
