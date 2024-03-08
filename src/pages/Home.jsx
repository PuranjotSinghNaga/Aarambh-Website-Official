import Jumbotron from "./sections/Jumbotron";
import RocketAvionics from "./sections/RocketAvionics";
import RocketIntro from "./sections/RocketIntro";
import RocketPropulsion from "./sections/RocketPropulsion";
import RocketRecovery from "./sections/RocketRecovery";
import RocketStructure from "./sections/RocketStructure";

const Home = () => {
  return (
    <div className="">
      <Jumbotron />
      <RocketIntro />
      <RocketRecovery />
      <RocketAvionics />
      <RocketStructure />
      <RocketPropulsion />
    </div>
  );
};

export default Home;
