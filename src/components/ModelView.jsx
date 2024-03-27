import { View, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React, { Suspense } from "react";
import Lights from "./Lights";
import * as THREE from "three";
import Loader from "./Loader";
import Rocket from "./Rocket";
const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
}) => {
  return (
    <View index={index} id={gsapType} className="w-full h-full absolute">
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      <group ref={groupRef} name="rocket" position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <Rocket scale={[0.4, 0.4, 0.4]} />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
