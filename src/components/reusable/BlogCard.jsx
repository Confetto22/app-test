import "./Blogcard.css";

const BlogCard = (props) => {
  return (
    <div className="blog_card">
      <h4 className="card_head"> {props.cardHead} </h4>
      <p className="card_text"> {props.cardText} </p>
    </div>
  );
};

export default BlogCard;
