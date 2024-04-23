import "./PeopleCard.css";

const PeopleCard = (props) => {
  return (
    <div className="people_card">
      <img src={props.image1} />
      <img src={props.image2} />
      <img src={props.image3} />
      <img src={props.image4} />
    </div>
  );
};

export default PeopleCard;
