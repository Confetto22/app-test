import HeroHeading from "./HeroHeading";
import HeroStats from "../reusable/HeroStats";
import PeopleCard from "../reusable/PeopleCard";
import ResourcesText from "./ResourcesText";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero_sec">
      <HeroHeading />
      <div className="hero_info">
        <HeroStats figure="300" span="+" text="Resources available" />
        <HeroStats figure="12k" span="+" text="Total Downloads" />
        <HeroStats figure="10k" span="+" text="Active Users" />
      </div>
      <div className="hero_resources">
        <PeopleCard
          image1="../../../public/images/Image.svg"
          image2="../../../public/images/Image (1).svg"
          image3="../../../public/images/Image (2).svg"
          image4="../../../public/images/Image (3).svg"
        />
        <ResourcesText />
      </div>
    </section>
  );
};

export default Hero;
