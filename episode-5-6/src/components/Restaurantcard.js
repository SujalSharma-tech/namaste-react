import ratingicon from "../images/rating.jpg";
import { CDN_URL } from "../utils/constants";
const Restaurantcard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, areaName, cuisines, avgRating } =
    resData?.info;

  return (
    <div className="res-card-template">
      <div className="res-card-img">
        <img src={CDN_URL + cloudinaryImageId} />
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

export default Restaurantcard;
