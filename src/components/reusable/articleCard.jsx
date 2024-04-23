import "./ArticleCard.css";

const ArticleCard = (props) => {
  return (
    <div className="article_card">
      <img src={props.cardImg} />
      <div className="text_arrow">
        <div className="text">
          <p className="card_head"> {props.cardHead} </p>
          <p className="card_text"> {props.cardText} </p>
        </div>
        <button className="arrow">
          <img src="../../../public/images/arrow-black.svg" alt="" />
        </button>
      </div>
      <p className="article_stat"> {props.articleText} </p>
    </div>
  );
};

export default ArticleCard;
