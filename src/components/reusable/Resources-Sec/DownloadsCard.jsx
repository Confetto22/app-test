import PeopleCard from "../PeopleCard";
import "./DownloadsCard.css";
import Preview from "./Preview";

const DownloadsCard = (props) => {
  return (
    <div className="downloads_card">
      <div className="cardInfo">
        <p className="cardText"> {props.cardText} </p>
        <h4 className="cardDetail"> {props.cardDetail} </h4>
      </div>
      <PeopleCard
        image1="../../../public/images/Image.svg"
        image2="../../../public/images/Image (1).svg"
        image3="../../../public/images/Image (2).svg"
        image4="../../../public/images/Image (3).svg"
      />
      <PeopleCard
        image1="../../../public/images/person5.svg"
        image2="../../../public/images/person6.svg"
        image3="../../../public/images/person7.svg"
        image4="../../../public/images/person8.svg"
      />

      <Preview />
    </div>
  );
};

export default DownloadsCard;
