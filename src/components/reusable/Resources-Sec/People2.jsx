import "./People2.css";

const People2 = (props) => {
  return (
    <div className="people2_card">
      <img src={props.image1} />
      <img src={props.image2} />
      <img src={props.image3} />
      <img src={props.image4} />
    </div>
  );
};

export default People2;
