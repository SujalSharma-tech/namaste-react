import ratingicon from "../images/rating.jpg";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
const Restaurantcard = (props) => {
  const { resData } = props;

  const { id, name, cloudinaryImageId, areaName, cuisines, avgRating } =
    resData?.info;

  return (
    <Link
      to={"/restaurants/" + id}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="res-card-template">
        <div className="res-card-img">
          {cloudinaryImageId ? (
            <img src={CDN_URL + cloudinaryImageId} />
          ) : (
            <h1></h1>
          )}
          {/* <img src={CDN_URL + cloudinaryImageId} /> */}
        </div>
        <div className="res-card-info">
          <div className="res-card-resname text-overflow fontweight">
            {name}
          </div>
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
    </Link>
  );
};

export default Restaurantcard;
