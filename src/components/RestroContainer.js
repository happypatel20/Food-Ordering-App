import restroList from "../utils/mockData";
import RestroCard from "./RestroCard";
import { useState , useEffect} from "react";

const RestroContainer = () => {
const [listOfRestro, setListOfRestro] = useState([])
useEffect(()=>{
  fetchData()
},[])

const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json()
  setListOfRestro(json?.data?.cards[2]?.data?.data?.cards)
}

  return (
    <div className="container restro_container">
      <div className="search_filter">
        <button
          className="search_btn"
          onClick={() => {
          const filtredRestro = listOfRestro.filter(res => res.data.avgRating > 4)
            setListOfRestro(filtredRestro)
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="restro_row">
        {listOfRestro.map((restaurant) => (
          <RestroCard key={restaurant.data.id} restroData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestroContainer;
