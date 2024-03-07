import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Rocket from "../models/Rocket";
import Space from "../models/Space";
{
  /*<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center ">
        Aarambh
      </div>*/
  // this is the name popup
}

const Home = () => {
  // const [scrollY, setScrollY] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent absolute"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={3} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Space />
          <Rocket />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
