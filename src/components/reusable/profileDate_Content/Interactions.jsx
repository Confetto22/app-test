import "./Interactions.css";

const Interactions = (props) => {
  return (
    <div className="interactions">
      <button className="likes">
        <img src={props.img} />
        <span className="number"> {props.likes} </span>
      </button>
      <button className="comments">
        <img src="../../../../public/images/comment.svg" />
        <span className="number"> {props.comments} </span>
      </button>
      <button className="share">
        <img src="../../../../public/images/share.svg" />
        <span className="number"> {props.share} </span>
      </button>
    </div>
  );
};

export default Interactions;
