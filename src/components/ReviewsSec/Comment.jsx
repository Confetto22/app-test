import Ratings from "./Ratings";
import "./Comment.css";

const Comment = () => {
  return (
    <div className="comment">
      <p className="remark">
        <Ratings />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit, at
        maxime repellendus voluptatum voluptate vel reprehenderit unde incidunt?
        Officia.
      </p>
    </div>
  );
};

export default Comment;
