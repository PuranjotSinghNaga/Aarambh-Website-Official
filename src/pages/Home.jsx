import Jumbotron from "./sections/Jumbotron";
import RocketAvionics from "./sections/RocketAvionics";
import RocketGCS from "./sections/RocketGCS";
import RocketIntro from "./sections/RocketIntro";
import RocketPropulsion from "./sections/RocketPropulsion";
import RocketRecovery from "./sections/RocketRecovery";
import RocketSpaceSeparator from "./sections/RocketSpaceSeparator";
import RocketStructure from "./sections/RocketStructure";
import Model from "../components/Model";

const Home = () => {
  return (
    <div>
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
