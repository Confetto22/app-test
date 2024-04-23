import SecHeadings from "../reusable/SecHeadings";
import ExploreBt from "../reusable/ExploreBt";
import BlogIntro from "../reusable/BlogIntro";
import "./Resources.css";
import DownloadsCard from "../reusable/Resources-Sec/DownloadsCard";
import TopicCard from "./TopicCard";

const Resources = () => {
  return (
    <section className="resources_section">
      <div className="section4_intro">
        <SecHeadings
          heading="Your Gateway to In-Depth Information"
          subheading="Unlock Valuable Knowledge with FutureTech's Resources"
        />
        <ExploreBt explorebtText="View All Blogs" />
      </div>

      <div className="all_resources">
        <div className="resource_container">
          <div className="introStats">
            <BlogIntro
              img="../../../public/images/Ebooks.svg"
              blogHeading="Ebooks"
              blogSubHeading="Explore our collection of ebooks covering a wide spectrun of future technology topics."
            />
            <ExploreBt explorebtText="Download Ebooks Now" />
            <DownloadsCard cardText="Downloaded By" cardDetail="10k + Users" />
          </div>
          <div className="intro-details">
            <TopicCard
              topicHeading="Variety of Topics"
              topicSubHeading="Topics include AI in education (25%), renewable energy (20%), healthcare
            (15%), and biotechnology (15%)."
              img="../../../public/images/topicimage1.svg"
            />
            <div className="card_row">
              <DownloadsCard
                cardText="Total Ebooks"
                cardDetail="Over 100 ebooks"
              />
              <DownloadsCard
                cardText="Download Formats"
                cardDetail="PDF format for access."
              />
              <DownloadsCard
                cardText="Average Author Expertise"
                cardDetail="Ebooks are authored by renowned experts with an average of 15 years experience"
              />
            </div>
          </div>
        </div>
        <div className="resource_container">
          <div className="introStats">
            <BlogIntro
              img="../../../public/images/whitepapers.svg"
              blogHeading="Whitepapers"
              blogSubHeading="Dive into comprehensive reports and analyses with our collection of whitepapers. "
            />
            <ExploreBt explorebtText="Download Whitepapers Now" />
            <DownloadsCard cardText="Downloaded By" cardDetail="10k + Users" />
          </div>
          <div className="intro-details">
            <TopicCard
              topicHeading="Topics Coverage"
              topicSubHeading="Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%)."
              img="../../../public/images/topicimage2.svg"
            />
            <div className="card_row">
              <DownloadsCard
                cardText="Total Ebooks"
                cardDetail="Over 50 whitepapers"
              />
              <DownloadsCard
                cardText="Download Formats"
                cardDetail="PDF format for access."
              />
              <DownloadsCard
                cardText="Average Author Expertise"
                cardDetail="Whitepapers are authored by subject matter experts with an average of 20 years of experience."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
