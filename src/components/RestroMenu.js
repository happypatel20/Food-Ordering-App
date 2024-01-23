import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import MenuCategoryItem from "./MenuCategoryItem";



const RestroMenu = () => {
  const { resId } = useParams();
  const restroMenu = useRestaurantMenu(resId);
  const [openItem, setOpenItem] = useState(null)

  const setShowIndexProps = (index) =>{
    if(index === openItem)
    {
      setOpenItem(null)
    }
    else{
      setOpenItem(index)
    }
  }

  if (restroMenu === null) {
    return <Shimmer />;
  }
  const { name, cuisines } = restroMenu?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restroMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;
  const  categoryList = restroMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item => item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(restroMenu?.data?.cards[0]?.card?.card?.info);
  
  return (
    <>
    <div className="m-8">
      <Link to="/" className="border border-orange-500 text-orange-500 inline-block mb-4 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-md group"><FontAwesomeIcon icon={faArrowLeft}  size="lg"  className="text-orange-500 group-hover:text-white"/></Link>
      <div className="bg-orange-100 p-5 rounded-md w-6/12 mx-auto mb-5">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h2 className="my-2 text-lg">{cuisines.join(", ")}</h2>
      </div>
      {categoryList.map((item,index) => <MenuCategoryItem key={index} data={item.card.card} open={index === openItem && true} setShowIndexProps={() => setShowIndexProps(index)}/>)}
    </div>
    </>
  );
};
export default RestroMenu;
