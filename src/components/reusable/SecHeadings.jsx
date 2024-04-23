import "./SecHeadings.css";

const SecHeadings = (props) => {
  return (
    <div className="secHeading">
      <p className="title"> {props.heading} </p>
      <h4 className="subTitle"> {props.subheading} </h4>
    </div>
  );
};

export default SecHeadings;
