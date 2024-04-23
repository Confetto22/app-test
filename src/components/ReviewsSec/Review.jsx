import Profile_dets from "../reusable/Sec4ProfileCard/Profile_dets";
import Comment from "./Comment";

import "./Review.css";
const Review = () => {
  return (
    <section className="reviews_section">
      <div className="review_profile">
        <Profile_dets
          img="../.././../public/images/Reviewperson1.svg"
          name="Sarah Thompson"
          role="San Francisco, USA"
        />
      </div>
      <Comment />
    </section>
  );
};

export default Review;
