import SecHeadings from "../reusable/SecHeadings";
import BlogIntro from "../reusable/BlogIntro";
import BlogCard from "../reusable/BlogCard";
import "./Sec3.css";

const Sec3 = () => {
  return (
    <section className="section_3">
      <SecHeadings
        heading="Unlock the power of"
        subheading="Future Tech Features"
      />
      <div className="blogPosts">
        <div className="individualBlog">
          <BlogIntro
            img="../../../public/images/techblog.svg"
            blogHeading="Future Technology Blog"
            blogSubHeading="Stay informed with our blog section dedicated to future technology."
          />
          <div className="blog_cards">
            <BlogCard
              cardHead="Quantity"
              cardText="Over 1,000 articles on emerging tech trends and breakthroughs."
            />
            <BlogCard
              cardHead="Variety"
              cardText="Articles cover fields like AI, robotics, biotechnology, and more."
            />
            <BlogCard
              cardHead="Frequency"
              cardText="Fresh content added daily to keep you up to date."
            />
            <BlogCard
              cardHead="Authoritative"
              cardText="Written by our team of tech experts and industry professionals."
            />
          </div>
        </div>
        <div className="individualBlog">
          <BlogIntro
            img="../../../public/images/insightsblog.svg"
            blogHeading="Research Insights Blogs"
            blogSubHeading="Dive deep into future technology concepts with our research section."
          />
          <div className="blog_cards">
            <BlogCard
              cardHead="Depth"
              cardText="500+ research articles for in-depth understanding."
            />
            <BlogCard
              cardHead="Graphics"
              cardText="Visual aids and infographics to enhance comprehension."
            />
            <BlogCard
              cardHead="Trends"
              cardText="Explore emerging trends in future technology research."
            />
            <BlogCard
              cardHead="Contributors"
              cardText="Contributions from tech researchers and academics."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec3;
