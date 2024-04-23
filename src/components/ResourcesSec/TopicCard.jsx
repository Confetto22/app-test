import "./TopicCard.css";

const TopicCard = (props) => {
  return (
    <div className="topics">
      <h4 className="topicHeading"> {props.topicHeading} </h4>
      <p className="topicSubHeading"> {props.topicSubHeading} </p>
      <img src={props.img} />
    </div>
  );
};

export default TopicCard;
