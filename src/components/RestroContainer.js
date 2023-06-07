import restroList from "../utils/mockData";
import RestroCard from "./RestroCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";

const RestroContainer = () => {
const [listOfRestro, setListOfRestro] = useState([])
const [filteredList, setfilteredList] = useState([])
const [searchValue, setSearchValue] = useState([])

useEffect(()=>{
  fetchData()
},[])

const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json()
  setListOfRestro(json?.data?.cards[2]?.data?.data?.cards)
  setfilteredList(json?.data?.cards[2]?.data?.data?.cards)
}
  return (
    <div className="container restro_container">
      <div className="search_filter">
        <input placeholder="search Restaurant" onChange={(e) => {
          setSearchValue(e.target.value)
        }} value={searchValue}></input>

        <button className="search_btn" onClick={() => {
          const searchFilterData = listOfRestro.filter(res => res.data.name.toLowerCase().includes(searchValue.toLowerCase()))
          setfilteredList(searchFilterData)
        }}>Search</button>

          <button
            className="search_btn"
            onClick={() => {
            const filtredRestro = filteredList.filter(res => res.data.avgRating > 4)
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
          <RestroCard key={restaurant.data.id} restroData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestroContainer;
