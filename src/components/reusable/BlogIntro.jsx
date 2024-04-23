import "./BlogIntro.css";

const BlogIntro = (props) => {
  return (
    <div className="blog_intro">
      <img src={props.img} />
      <div className="blog_text">
        <h4 className="blogHeading"> {props.blogHeading} </h4>
        <p className="blogSubHeading"> {props.blogSubHeading} </p>
      </div>
    </div>
  );
};

export default BlogIntro;
