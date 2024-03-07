import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import rocketScene from "../assets/3d/rocket.glb";
import { a } from "@react-spring/three";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import gsap from "gsap";
const Rocket = (props) => {
  const rocketRef = useRef();
  const { nodes, materials } = useGLTF(rocketScene);
  // var pos_x = 0.01 * scrollY;
  // if (pos_x > window.innerWidth) pos_x = window.innerWidth;
  //
  // useEffect(() => {
  //   const rocket = rocketRef.current;
  //   rocket.position.y = -0.01 * scrollY - 2.5;
  //   rocket.rotation.y = 0.1 * scrollY;
  //   rocket.position.x = pos_x;
  // }, [scrollY]);
  return (
    <a.group
      ref={rocketRef}
      {...props}
      dispose={null}
      position={[0, -2.55, 0]}
      rotation={[Math.PI, 0, 0]}
      scale={[0.3, 0.3, 0.3]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, -16.32263184]} rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[0, 0.00699997, 0]}>
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.Electron}
            />
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials.Electron_Metal}
            />
          </group>
          <group position={[0, 0.00699997, 0]}>
            <mesh
              geometry={nodes.Object_9.geometry}
              material={materials.Electron}
            />
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.Electron_Metal}
            />
          </group>
        </group>
        <group position={[0, 0, 0.03249741]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials.Electron}
          />
          <group scale={[0.5, 1, 0.5]}>
            <mesh
              geometry={nodes.Object_16.geometry}
              material={materials.Electron}
            />
            <group position={[0, 0.35649523, 0.78676915]} scale={[2, 1, 2]}>
              <mesh
                geometry={nodes.Object_18.geometry}
                material={materials.Electron_Nozzle}
              />
              <mesh
                geometry={nodes.Object_19.geometry}
                material={materials.Electron}
              />
            </group>
          </group>
          <group rotation={[0, Math.PI / 2, 0]} scale={[0.5, 1, 0.5]}>
            <mesh
              geometry={nodes.Object_21.geometry}
              material={materials.Electron}
            />
            <group position={[0, 0.35649523, 0.78676915]} scale={[2, 1, 2]}>
              <mesh
                geometry={nodes.Object_23.geometry}
                material={materials.Electron_Nozzle}
              />
              <mesh
                geometry={nodes.Object_24.geometry}
                material={materials.Electron}
              />
            </group>
          </group>
          <group
            rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
            scale={[0.49999994, 1, 0.49999994]}
          >
            <mesh
              geometry={nodes.Object_26.geometry}
              material={materials.Electron}
            />
            <group
              position={[0, 0.35649523, 0.78676921]}
              scale={[2.00000024, 1, 2.00000024]}
            >
              <mesh
                geometry={nodes.Object_28.geometry}
                material={materials.Electron_Nozzle}
              />
              <mesh
                geometry={nodes.Object_29.geometry}
                material={materials.Electron}
              />
            </group>
          </group>
          <group
            rotation={[-Math.PI, -0.00000104, -Math.PI]}
            scale={[0.5, 1, 0.5]}
          >
            <mesh
              geometry={nodes.Object_31.geometry}
              material={materials.Electron}
            />
            <group position={[0, 0.35649523, 0.78676915]} scale={[2, 1, 2]}>
              <mesh
                geometry={nodes.Object_33.geometry}
                material={materials.Electron_Nozzle}
              />
              <mesh
                geometry={nodes.Object_34.geometry}
                material={materials.Electron}
              />
            </group>
          </group>
          <group
            rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
            scale={[0.5, 1, 0.5]}
          >
            <mesh
              geometry={nodes.Object_36.geometry}
              material={materials.Electron}
            />
            <group position={[0, 0.35649523, 0.78676921]} scale={[2, 1, 2]}>
              <mesh
                geometry={nodes.Object_38.geometry}
                material={materials.Electron_Nozzle}
              />
              <mesh
                geometry={nodes.Object_39.geometry}
                material={materials.Electron}
              />
            </group>
          </group>
          <group rotation={[0, -Math.PI / 2, 0]} scale={[0.5, 1, 0.5]}>
            <mesh
              geometry={nodes.Object_41.geometry}
              material={materials.Electron}
            />
            <group position={[0, 0.35649523, 0.78676915]} scale={[2, 1, 2]}>
              <mesh
                geometry={nodes.Object_43.geometry}
                material={materials.Electron_Nozzle}
              />
              <mesh
                geometry={nodes.Object_44.geometry}
                material={materials.Electron}
              />
            </group>
          </group>
          <group
            rotation={[0, Math.PI / 4, 0]}
            scale={[0.49999994, 1, 0.49999994]}
          >
            <mesh
              geometry={nodes.Object_46.geometry}
              material={materials.Electron}
            />
            <group position={[0, 0.35649523, 0.78676921]} scale={[2, 1, 2]}>
              <mesh
                geometry={nodes.Object_48.geometry}
                material={materials.Electron_Nozzle}
              />
              <mesh
                geometry={nodes.Object_49.geometry}
                material={materials.Electron}
              />
            </group>
          </group>
          <group
            position={[0, 0.22745067, 0]}
            rotation={[0, Math.PI / 4, 0]}
            scale={[0.49999994, 1, 0.49999994]}
          >
            <mesh
              geometry={nodes.Object_51.geometry}
              material={materials.Electron}
            />
            <group
              position={[0, 0.12904455, 0]}
              rotation={[0, -Math.PI / 4, 0]}
              scale={[2, 1, 2]}
            >
              <mesh
                geometry={nodes.Object_53.geometry}
                material={materials.Electron_Nozzle}
              />
              <mesh
                geometry={nodes.Object_54.geometry}
                material={materials.Electron}
              />
            </group>
            <mesh
              geometry={nodes.Object_56.geometry}
              material={materials.Electron_White}
              position={[0, 6.4927268, 0]}
              rotation={[0, -Math.PI / 4, 0]}
            />
          </group>
          <group rotation={[0, -Math.PI / 4, 0]} scale={[0.5, 1, 0.5]}>
            <mesh
              geometry={nodes.Object_58.geometry}
              material={materials.Electron}
            />
            <group position={[0, 0.35649523, 0.78676921]} scale={[2, 1, 2]}>
              <mesh
                geometry={nodes.Object_60.geometry}
                material={materials.Electron_Nozzle}
              />
              <mesh
                geometry={nodes.Object_61.geometry}
                material={materials.Electron}
              />
            </group>
          </group>
          <group position={[-0.62237489, 6.08615303, 0.00293476]}>
            <mesh
              geometry={nodes.Object_63.geometry}
              material={materials.Electron}
            />
            <mesh
              geometry={nodes.Object_64.geometry}
              material={materials.Electron_Metal}
            />
          </group>
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials.Electron_Metal}
            position={[0, 0.46494669, 0]}
            rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
          />
          <mesh
            geometry={nodes.Object_66.geometry}
            material={materials.Electron_Metal}
            rotation={[0, 0.41887897, 0]}
          />
          <mesh
            geometry={nodes.Object_68.geometry}
            material={materials.Electron_Metal}
            position={[0, 1.0554899, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          />
        </group>
        <group position={[0, 0, -14.30539703]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_70.geometry}
            material={materials.Electron}
          />
          <mesh
            geometry={nodes.Object_71.geometry}
            material={materials.Electron_Gray}
          />
          <group position={[0, 0.00178242, 0]}>
            <mesh
              geometry={nodes.Object_73.geometry}
              material={materials.Electron_Nozzle}
            />
            <mesh
              geometry={nodes.Object_74.geometry}
              material={materials.Electron}
            />
          </group>
        </group>
      </group>
    </a.group>
  );
};

useGLTF.preload("../assets/3d/rocket.glb");

export default Rocket;
