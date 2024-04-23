import "./Sec4.css";
import SecHeadings from "../reusable/SecHeadings";
import ExploreBt from "../reusable/ExploreBt";
import Sec4Filter from "../reusable/Sec4Filter";
import Profile_dets from "../reusable/Sec4ProfileCard/Profile_dets";
import PostDetails from "../reusable/profileDate_Content/PostDetails";
import Interactions from "../reusable/profileDate_Content/Interactions";

const Sec4 = () => {
  return (
    <section className="section_4">
      <div className="section4_intro">
        <SecHeadings
          heading="A Knowledge Treasure Trove"
          subheading="Explore FUtureTech's In-Depth Blog Posts"
        />
        <ExploreBt explorebtText="View All Blogs" />
      </div>
      <div className="sec4_filter">
        <Sec4Filter btText="All" />
        <Sec4Filter btText="Quantum Computing" />
      </div>
      <div className="profileCards">
        <div className="singleCard">
          <div className="profileTop">
            <Profile_dets
              img="../../../../public/images/person1.svg"
              name="John Techson"
              role="Quantum Computing"
            />
            <ExploreBt explorebtText="View Blog" />
          </div>
          <PostDetails
            date="October 15, 2023"
            heading="The Quantum Leap in Computing"
            content=" Explore the revolution in quantum computing, its applications, and its
          potential impact on various industries."
          />
          <Interactions
            img="../../../../public/images/liked.svg"
            likes="24.5k"
            comments="50"
            share="20"
          />
        </div>

        <div className="singleCard">
          <div className="profileTop">
            <Profile_dets
              img="../../../../public/images/person2.svg"
              name="Sarah Ethicist"
              role="AI Ethics"
            />
            <ExploreBt explorebtText="View Blog" />
          </div>
          <PostDetails
            date="November 5, 2023"
            heading="The Ethical Dilemmas of AI"
            content=" A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency."
          />
          <Interactions
            img="../../../../public/images/unliked.svg"
            likes="32k"
            comments="72"
            share="18"
          />
        </div>

        <div className="singleCard">
          <div className="profileTop">
            <Profile_dets
              img="../../../../public/images/person3.svg"
              name="Astronomer X"
              role="Space Exploration"
            />
            <ExploreBt explorebtText="View Blog" />
          </div>
          <PostDetails
            date="December 10, 2023"
            heading="The Mars Colonization Challenge"
            content=" Exploring the technical and logistical challenges of human colonization on Mars."
          />
          <Interactions
            img="../../../../public/images/unliked.svg"
            likes="20k"
            comments="31"
            share="12"
          />
        </div>
      </div>
    </section>
  );
};

export default Sec4;
