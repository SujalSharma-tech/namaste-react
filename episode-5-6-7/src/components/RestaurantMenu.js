import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../images/res-logo.jpg";
import nonvegicon from "../images/nonvegicon.jpg";
import rupeeicon from "../images/rupeeicon.png";
import ratingicon from "../images/rating.jpg";
import { CDN_URL } from "../utils/constants";
import { MENU_API } from "../utils/constants";
import vegicon from "../images/vegicon.png";
import MenuShimmer from "./MenuShimmer";

const myfun = () => {
  const data = document.getElementsByClassName("no-img");
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].parentElement.parentElement);
    data[i].parentElement.parentElement.classList.add("no-img-container");
  }
};

const CategoryContainer = (item) => {
  return (
    <div className="res-menu-category-container">
      <button
        onClick={() => {
          {
            document
              .getElementsByClassName("res-menu-items-container")[0]
              .classList.remove("hide");
          }
        }}
      >
        <div className="res-menu-category">
          <h2>
            {item.title} ({item.itemList.length})
          </h2>
        </div>
        <div className="res-menu-dropdown"> {">"} </div>
      </button>
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
            {item.ratings.aggregatedRating.rating ? (
              <div className="menu-item-ratings res-card-rating-time">
                <div className="menu-item-rating-start">
                  <img width={30} src={ratingicon} />
                </div>
                <h5>
                  {item.ratings.aggregatedRating.ratingCount}(
                  {item.ratings.aggregatedRating.rating})
                </h5>
              </div>
            ) : (
              <h5>No ratings</h5>
            )}
            <div className="menu-item-description">{item.description}</div>
          </div>
          <div className="menu-item-img-body">
            <div className="menu-item-img">
              {item.imageId ? (
                <img src={CDN_URL + item.imageId} />
              ) : (
                <>
                  <h1 className="no-img"></h1>
                </>
              )}
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
  const [resName, setresName] = useState("");
  //   const API =
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0760&lng=72.8777&restaurantId=23737&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER";
  const { resId } = useParams();

  const API = MENU_API + resId; //23737
  const apiData = async () => {
    const fetched = await fetch(API);
    const data = await fetched.json();
    const resName = data.data.cards[0].card.card.text;
    console.log(resName);
    const reslist = data.data.cards.filter((currarry) => {
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

    const itemCards = FinalResList.map((item) => {
      return {
        itemList: item.card.card.itemCards,
        title: item.card.card.title,
      };
    });
    setmenuList(itemCards);
    setresName(resName);
  };

  useEffect(() => {
    apiData();
  }, []);

  return menuList.length === 0 ? (
    <MenuShimmer />
  ) : (
    <div className="res-menu-page-body">
      <div className="res-menu-name">
        <h1>{resName}</h1>
      </div>
      {menuList.map((item) => {
        return (
          <div key={item.title}>
            <div>
              <CategoryContainer key={item} {...item} />
            </div>

            <div className="res-menu-items-container ">
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
