import restroList from "../utils/mockData";
import RestroCard from "./RestroCard";

const RestroContainer = () => {
  return (
    <div className="container restro_container">
      <div className="search_filter">
        <input placeholder="search Restaurant"></input>
        <button className="search_btn">Search</button>
      </div>
      <div className="restro_row">
        {restroList.map((restaurant) => (
          <RestroCard key={restaurant.data.id} restroData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestroContainer;
