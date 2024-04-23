import "./ExploreBt.css";
const ExploreBt = (props) => {
  return (
    <button className="explorebt">
      {props.explorebtText}
      <span>
        <img src="../../../public/images/arrow_icon.svg" alt="" />
      </span>
    </button>
  );
};

export default ExploreBt;
