import React from "react";
import ReactDOM from "react-dom/client";
import reslogo from "./images/res-logo.jpg";
import ratingicon from "./images/rating.jpg";
import resList from "./swiggydata.json";
import carticon from "./images/cart.png";
import helpicon from "./images/help.png";
import offersicon from "./images/offers.png";
import signinicon from "./images/signin.png";

const HeaderComponent = () => {
  return (
    <div className="res-header">
      <div className="res-logo">
        <img src={reslogo} alt="Logo" />
      </div>
      <div className="res-nav-items">
        <ul>
          <li>
            <img src={offersicon} width={20} />
            Offers
          </li>
          <li>
            <img src={helpicon} width={20} />
            Help
          </li>
          <li>
            <img src={signinicon} width={20} />
            SignIn
          </li>
          <li>
            <img src={carticon} width={20} />
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

const Restaurantcard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, slaString, areaName, cuisines, avgRating } =
    resData?.info;

  return (
    <div className="res-card-template">
      <div className="res-card-img">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
      </div>
      <div className="res-card-info">
        <div className="res-card-resname text-overflow fontweight">{name}</div>
        <div className="res-card-rating-time fontweightnormal">
          <img width={30} src={ratingicon} />
          <span className="rating">{avgRating} </span>
          <span className="delievertime"> {resData.info.sla.slaString}</span>
        </div>
        <div className="res-card-cuisine text-overflow">
          {cuisines.join(",")}
        </div>
        <div className="res-card-resaddress text-overflow">{areaName}</div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="res-body-content">
      <h2>Popular restaurants near me</h2>
      <div className="res-searchbar">Search</div>
      <div className="res-restaurants">
        {resList.map((restaurant) => (
          <Restaurantcard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="res-layout">
      <HeaderComponent />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
