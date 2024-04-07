import Restaurantcard from "./Restaurantcard";
import searchLogo from "../images/search-logo.png";
import { useState, useEffect } from "react";
import { RESTAURANT_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [ratingChecked, setratingChecked] = useState("Not Clicked");

  const apiData = async () => {
    const data = await fetch(RESTAURANT_API);
    const api_data = await data.json();
    console.log(api_data);
    const resLiveList =
      api_data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setrestaurantList(resLiveList);
    console.log(resLiveList);
    setFilteredRestaurants(resLiveList);
  };

  useEffect(() => {
    apiData();
  }, []);

  // Conditional Rendering

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-body-content">
      <h2>Popular restaurants near me</h2>
      <div className="res-body-bar">
        <div className="res-searchbar">
          <input
            type="text"
            id="res-search"
            placeholder="Search for a restaurant"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="searchbtnlogo"
            onClick={() => {
              let inputVal = { searchText };
              if (inputVal) {
                let filteredRes = restaurantList.filter((rest) =>
                  rest.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                filteredRes.length === 0
                  ? alert("Not Found")
                  : setFilteredRestaurants(filteredRes);
              }
            }}
          >
            <img src={searchLogo} />
          </button>
        </div>
        <div className="res-top-rated-btn">
          <button
            className="res-top-rated"
            onClick={() => {
              if (ratingChecked === "Not Clicked") {
                setratingChecked("Clicked");
                document
                  .getElementsByClassName("res-top-rated")[0]
                  .classList.add("active-rating");
                setFilteredRestaurants(
                  restaurantList.filter((res) => res.info.avgRating >= 4.5)
                );
              } else {
                setratingChecked("Not Clicked");
                document
                  .getElementsByClassName("res-top-rated")[0]
                  .classList.remove("active-rating");
                setFilteredRestaurants(restaurantList);
              }
            }}
          >
            Ratings 4.5+
          </button>
        </div>
      </div>

      <div className="res-restaurants">
        {filteredRestaurants.map((restaurant) => (
          <Restaurantcard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
