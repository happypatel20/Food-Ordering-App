import RestroCard, {bestRestroLabel} from "./RestroCard";
import { useState , useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const RestroContainer = () => {
const [listOfRestro, setListOfRestro] = useState([])
const [filteredList, setfilteredList] = useState([])
const [searchValue, setSearchValue] = useState("")

const BestRestroCard = bestRestroLabel(RestroCard) 
const {setUserInfo, loggedInUser} = useContext(UserContext)

useEffect(()=>{
  fetchData()
},[])

const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json()
  console.log('json :>> ', json);
  setListOfRestro(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
  setfilteredList(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
  console.log("setfilteredList",json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
}
const onlineStatus = useOnlineStatus()
if (onlineStatus === false) return <h1>Please check your internet connection!!!</h1>
  return (
    <div className="m-8">
      <div className="ml-4">
        <input className="border border-black p-2 rounded-md outline-none focus:border-orange-400" placeholder="search Restaurant" onChange={(e) => {
          setSearchValue(e.target.value)
        }} value={searchValue}></input>

        <button className="py-2 px-4 bg-orange-500 text-white rounded-md ml-3" onClick={() => {
            const searchFilterData = listOfRestro.filter(res => res.info.name.toLowerCase().includes(searchValue.toLowerCase()))
            setfilteredList(searchFilterData)
        }}>Search</button>

          <button
            className="py-2 px-4 bg-orange-500 text-white rounded-md ml-3"
            onClick={() => {
            const filtredRestro = filteredList.filter(res => res.info.avgRating > 4)
              setfilteredList(filtredRestro)
            }}
          >
            Top Rated
          </button>
            <input value={loggedInUser} className="border border-black p-2 rounded-md outline-none focus:border-orange-400 ml-5" onChange={(e) => {
              setUserInfo(e.target.value)
            }} />
      </div>
      <div className="flex flex-wrap">
        {
          filteredList.length === 0 && Array(10).fill('').map((e, index) => (<Shimmer key={index} />))
        }
        {filteredList.map((restaurant) => (
          restaurant.info.avgRating > 4 ? <Link className="w-[calc(100%/5)] my-3 relative" to={/restaurants/+restaurant.info.id} key={restaurant.info.id}> <BestRestroCard restroData={restaurant} /></Link> : <Link className="w-[calc(100%/5)] my-3" to={/restaurants/+restaurant.info.id} key={restaurant.info.id}> <RestroCard restroData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default RestroContainer;
