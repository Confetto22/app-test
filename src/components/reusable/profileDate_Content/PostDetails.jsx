import "./PostDetails.css";

const PostDetails = (props) => {
  return (
    <div className="post_details">
      <p className="date"> {props.date} </p>
      <div className="post_content">
        <h4 className="heading"> {props.heading} </h4>
        <p className="content"> {props.content} </p>
      </div>
    </div>
  );
};

export default PostDetails;
