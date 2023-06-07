import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_API } from "../utils/constant";
const RestroMenu = () => {
  const [restroMenu, setRestroMenu] = useState(null);
  const {resId} = useParams()
  useEffect(() => {
    getRestroMenu();
  },[])
  const getRestroMenu = async () => {
    const data =  await fetch(RES_MENU_API + resId)
    const json = await data.json();
    setRestroMenu(json)
  }
  console.log(restroMenu);
  if(restroMenu === null) {return <Shimmer />}
  const {name, cuisines} = restroMenu?.data?.cards[0]?.card?.card?.info;
  const {itemCards} = restroMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return(
    <div className="container restro_container">
      <h1>{name}</h1>
      <h2>{cuisines.join(', ')}</h2>
      <ul>
        {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100}</li>)}
      </ul>
    </div>
  )
}
export default RestroMenu;
