import "./Profile_dets.css";

const Profile_dets = (props) => {
  return (
    <div className="profile_dets">
      <img src={props.img} />
      <div className="imgText">
        <h4 className="profileName"> {props.name} </h4>
        <p className="profileRole"> {props.role} </p>
      </div>
    </div>
  );
};

export default Profile_dets;
