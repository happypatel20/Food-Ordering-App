import restroList from "../utils/mockData";
import RestroCard from "./RestroCard";
import { useState } from "react";

const RestroContainer = () => {
const [listOfRestro, setListOfRestro] = useState(restroList)
  return (
    <div className="container restro_container">
      <div className="search_filter">
        {/* <input placeholder="search Restaurant"></input> */}
        <button
          className="search_btn"
          onClick={() => {
            filtredRestro = listOfRestro.filter(res => res.data.avgRating > 4)
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
