// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";
//
// function Model(props) {
//   const { nodes, materials } = useGLTF("/scene.glb");
//   console.log(nodes, materials);
//   return (
//     <group {...props} dispose={null}>
//       <group scale={0.01}>
//         <mesh
//           geometry={nodes.mesh_base_material_0.geometry}
//           material={materials.base_material}
//           scale={179.427}
//         />
//       </group>
//     </group>
//   );
// }
// export default Model;
// useGLTF.preload("/scene.glb");
//
//[-Math.PI / 2, 0, 0]
import React from "react";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("../../public/rocket.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, -10, 0]} scale={1}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, -16.3226]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0.007, 0]}>
              <mesh
                geometry={nodes.Object_6.geometry}
                material={materials.Electron}
              />
              <mesh
                geometry={nodes.Object_7.geometry}
                material={materials.Electron_Metal}
              />
            </group>
            <group position={[0, 0.007, 0]}>
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
          <group position={[0, 0, 0.0325]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.Electron}
            />
            <group scale={[0.5, 1, 0.5]}>
              <mesh
                geometry={nodes.Object_16.geometry}
                material={materials.Electron}
              />
              <group position={[0, 0.3565, 0.7868]} scale={[2, 1, 2]}>
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
              <group position={[0, 0.3565, 0.7868]} scale={[2, 1, 2]}>
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
              scale={[0.5, 1, 0.5]}
            >
              <mesh
                geometry={nodes.Object_26.geometry}
                material={materials.Electron}
              />
              <group position={[0, 0.3565, 0.7868]} scale={[2, 1, 2]}>
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
            <group rotation={[-Math.PI, 0, -Math.PI]} scale={[0.5, 1, 0.5]}>
              <mesh
                geometry={nodes.Object_31.geometry}
                material={materials.Electron}
              />
              <group position={[0, 0.3565, 0.7868]} scale={[2, 1, 2]}>
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
              <group position={[0, 0.3565, 0.7868]} scale={[2, 1, 2]}>
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
              <group position={[0, 0.3565, 0.7868]} scale={[2, 1, 2]}>
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
            <group rotation={[0, Math.PI / 4, 0]} scale={[0.5, 1, 0.5]}>
              <mesh
                geometry={nodes.Object_46.geometry}
                material={materials.Electron}
              />
              <group position={[0, 0.3565, 0.7868]} scale={[2, 1, 2]}>
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
              position={[0, 0.2275, 0]}
              rotation={[0, Math.PI / 4, 0]}
              scale={[0.5, 1, 0.5]}
            >
              <mesh
                geometry={nodes.Object_51.geometry}
                material={materials.Electron}
              />
              <group
                position={[0, 0.129, 0]}
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
                position={[0, 6.4927, 0]}
                rotation={[0, -Math.PI / 4, 0]}
              />
            </group>
            <group rotation={[0, -Math.PI / 4, 0]} scale={[0.5, 1, 0.5]}>
              <mesh
                geometry={nodes.Object_58.geometry}
                material={materials.Electron}
              />
              <group position={[0, 0.3565, 0.7868]} scale={[2, 1, 2]}>
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
            <group position={[-0.6224, 6.0862, 0.0029]}>
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
              position={[0, 0.4649, 0]}
              rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
            />
            <mesh
              geometry={nodes.Object_66.geometry}
              material={materials.Electron_Metal}
              rotation={[0, 0.4189, 0]}
            />
            <mesh
              geometry={nodes.Object_68.geometry}
              material={materials.Electron_Metal}
              position={[0, 1.0555, 0]}
              rotation={[0, -Math.PI / 4, 0]}
            />
          </group>
          <group position={[0, 0, -14.3054]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_70.geometry}
              material={materials.Electron}
            />
            <mesh
              geometry={nodes.Object_71.geometry}
              material={materials.Electron_Gray}
            />
            <group position={[0, 0.0018, 0]}>
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
      </group>
    </group>
  );
}
export default Model;
useGLTF.preload("../../public/rocket.glb");
