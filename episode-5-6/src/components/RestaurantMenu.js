import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../images/res-logo.jpg";
import nonvegicon from "../images/nonvegicon.jpg";
import rupeeicon from "../images/rupeeicon.png";
import ratingicon from "../images/rating.jpg";
import { CDN_URL } from "../utils/constants";
import { MENU_API } from "../utils/constants";
import vegicon from "../images/vegicon.png";

const CategoryContainer = (item) => {
  return (
    <div className="res-menu-category-container">
      <div className="res-menu-category">
        <h2>
          {item.title} ({item.itemList.length})
        </h2>
      </div>
      <div className="res-menu-dropdown"> {">"} </div>
    </div>
  );
};

const MenuContainer = (item) => {
  let classyfyImg = nonvegicon;
  if (item.itemAttribute.vegClassifier === "VEG") {
    classyfyImg = vegicon;
  }
  return (
    <div>
      <div className="menu-item-body-outer">
        <div className="menu-item-body">
          <div className="menu-item-info">
            <div className="menu-item-veg-nonveg">
              <div className="veg-nonveg-img">
                <img src={classyfyImg} />
              </div>
            </div>
            <div className="menu-item-name">
              <h3>{item.name}</h3>
            </div>
            <div className="menu-item-price">
              {" "}
              <img src={rupeeicon} />{" "}
              {item.price / 100 || item.defaultPrice / 100}
            </div>
            <div className="menu-item-ratings res-card-rating-time">
              <div className="menu-item-rating-start">
                <img width={30} src={ratingicon} />
              </div>
              <h5>
                if ({item.ratings.aggregatedRating.rating}) {}
                {item.ratings.aggregatedRating.rating || <h1></h1>} (
                {item.ratings.aggregatedRating.ratingCount || <h1>NA</h1>})
              </h5>
            </div>
            <div className="menu-item-description">{item.description}</div>
          </div>
          <div className="menu-item-img-body">
            <div className="menu-item-img">
              <img src={CDN_URL + item.imageId} />
            </div>
            <div className="menu-item-img-addtocart">
              <button>ADD</button>
            </div>
          </div>
        </div>
      </div>
      <div className="res-menu-border"></div>
    </div>
  );
};
const RestaurantMenu = () => {
  const [menuList, setmenuList] = useState([]);
  //   const API =
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0760&lng=72.8777&restaurantId=23737&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER";
  const { resId } = useParams();

  const API = MENU_API + resId; //23737
  const apiData = async () => {
    const fetched = await fetch(API);
    const data = await fetched.json();

    // const reslist =
    //   data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
    //     (item) => {
    //       const currCategory = item.card.card.title;
    //       if (currCategory) {
    //         return currCategory;
    //       }
    //     }
    //   );
    const reslist = data.data.cards.filter((currarry) => {
      //   console.log(currarry);
      if (currarry.groupedCard) {
        return currarry;
      }
    });
    console.log(reslist);

    const FinalResList = reslist[0].groupedCard.cardGroupMap.REGULAR.cards
      .filter((item) => {
        const currCategory = item.card.card.title;
        if (currCategory) {
          return currCategory;
        }
      })
      .filter((res) => {
        if (res?.card?.card?.itemCards) {
          return res;
        }
      });
    console.log(FinalResList);
    //!task : filter acc to groupedCard present

    const itemCards = FinalResList.map((item) => {
      return {
        itemList: item.card.card.itemCards,
        title: item.card.card.title,
      };
    });
    setmenuList(itemCards);
  };

  useEffect(() => {
    apiData();
  }, []);
  return (
    <div className="res-menu-page-body">
      {menuList.map((item) => {
        return (
          <div key={item.title}>
            <div>
              <CategoryContainer key={item} {...item} />
            </div>

            <div className="res-menu-items-container">
              {item.itemList.map((currItem) => {
                return (
                  <MenuContainer
                    key={currItem.card.info.id}
                    {...currItem.card.info}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
