import { IMG_URL } from "../utils/constant";
const RestroCard = (props) => {
  const { name, avgRating, cuisines, address, cloudinaryImageId } =
    props.restroData.data;
  return (
    <div className="restro_card">
      <img className="restro_card-img" src={IMG_URL + cloudinaryImageId} />
      <div className="restro_card-heading">
        <h2>{name}</h2>
        <span className="rating"> {avgRating}</span>
      </div>
      <p>{cuisines.join(", ")}</p>
      <p>{address}</p>
    </div>
  );
};

export default RestroCard;
