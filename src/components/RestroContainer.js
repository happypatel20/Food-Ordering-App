import restroList from "../utils/mockData";
import RestroCard from "./RestroCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestroContainer = () => {
const [listOfRestro, setListOfRestro] = useState([])
const [filteredList, setfilteredList] = useState([])
const [searchValue, setSearchValue] = useState("")

useEffect(()=>{
  fetchData()
},[])

const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json()
  console.log('json :>> ', json);
  setListOfRestro(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants)
  setfilteredList(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants)
}

const onlineStatus = useOnlineStatus()
if (onlineStatus === false) return <h1>Please check your internet connection!!!</h1>
  return (
    <div className="container restro_container">
      <div className="search_filter">
        <input placeholder="search Restaurant" onChange={(e) => {
          setSearchValue(e.target.value)
        }} value={searchValue}></input>

        <button className="search_btn" onClick={() => {
            const searchFilterData = listOfRestro.filter(res => res.info.name.toLowerCase().includes(searchValue.toLowerCase()))
            setfilteredList(searchFilterData)
        }}>Search</button>

          <button
            className="search_btn"
            onClick={() => {
            const filtredRestro = filteredList.filter(res => res.info.avgRating > 4)
              setfilteredList(filtredRestro)
            }}
          >
            Top Rated
          </button>
      </div>
      <div className="restro_row">
        {
          filteredList.length == 0 && Array(10).fill('').map((e, index) => (<Shimmer key={index} />))
        }
        {filteredList.map((restaurant) => (
         <Link className="restro_card" to={/restaurants/+restaurant.info.id} key={restaurant.info.id}> <RestroCard restroData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default RestroContainer;
