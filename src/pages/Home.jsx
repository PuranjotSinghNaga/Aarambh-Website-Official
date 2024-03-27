import Model from "../components/Model";
import Jumbotron from "./sections/Jumbotron";
import RocketAvionics from "./sections/RocketAvionics";
import RocketGCS from "./sections/RocketGCS";
import RocketIntro from "./sections/RocketIntro";
import RocketPropulsion from "./sections/RocketPropulsion";
import RocketRecovery from "./sections/RocketRecovery";
import RocketSpaceSeparator from "./sections/RocketSpaceSeparator";
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
      <RocketSpaceSeparator />
      <RocketGCS />
      <Model />
    </div>
  );
};

export default Home;
