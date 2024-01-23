import { IMG_URL } from "../utils/constant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const RestroCard = (props) => {
  const { name, avgRating, cuisines, address, cloudinaryImageId } =
    props.restroData.info;
  return (
    <div className="group h-full mx-3 p-4 shadow-xl hover:shadow-lg border hover:border-orange-300 rounded-md">
      <div className="overflow-hidden rounded-md">
        <img className="rounded-md group-hover:scale-110 transition-all" src={IMG_URL + cloudinaryImageId} />
      </div>
      <div className="flex justify-between items-center mt-2">
        <h2 className="font-bold group-hover:text-orange-500">{name}</h2>
        <span className={"bg-gray-400 px-2 rounded-sm text-sm text-white font-bold my-2 inline-block whitespace-nowrap" + " "+ (avgRating > 4.2 ? "bg-green-400" : "")}> {avgRating}<FontAwesomeIcon icon={faStar}  size="xs"  className="ml-2 text-yellow-400"/></span>
      </div>
      <p className="text-sm">{cuisines.join(", ")}</p>
      <p>{address}</p>
    </div>
  );
};

export const bestRestroLabel = (RestroCard) => {
  return (props) => {
    return(
      <>
        <label className="absolute bg-black p-1 px-2 text-white z-[2] text-xs after:absolute after:content[''] after:bottom-[-8px] after:left-[0.7px] after:border-black after:border-l-[10px] after:border-r-[10px] after:border-t-[10px] after:border-l-transparent after:border-r-transparent after:rotate-[225deg]">Best Restro</label>
        <RestroCard {...props} />
      </>
    )
  }
}

export default RestroCard;
