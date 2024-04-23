import ArticleCard from "../reusable/articleCard";
import "./Sec2.css";

const Sec2 = () => {
  return (
    <section className="section_2">
      <ArticleCard
        cardImg="../../../public/images/newsupdate.svg"
        cardHead="Latest News Updates"
        cardText="Stay Current"
        articleText="Over 1,000 articles published monthly"
      />
      <ArticleCard
        cardImg="../../../public/images/contributors.svg"
        cardHead="Expert Contributors"
        cardText="Trusted Insights"
        articleText="50+ renowned AI experts on our team"
      />
      <ArticleCard
        cardImg="../../../public/images/readership.svg"
        cardHead="Global Readership"
        cardText="Worldwide Impact"
        articleText="2 million monthly readers"
      />
    </section>
  );
};

export default Sec2;
