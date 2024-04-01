import { useState, useEffect } from "react";

const Makeitem = (props) => {
  console.log(props);
  return (
    <>
      <h3>{props.prop}</h3>
    </>
  );
};
const MenuItems = (props) => {
  const CategoryItem = props.item.itemList.map((item) => {
    return item.card.info.name;
  });
  return (
    <div>
      <h1>
        {props.item.title} ({CategoryItem.length} items)
      </h1>
      {CategoryItem.map((item) => {
        return <Makeitem prop={item} />;
      })}
    </div>
  );
};

const MenuComponent = () => {
  const [menuList, setmenuList] = useState([]);
  const API =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0760&lng=72.8777&restaurantId=23737&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER";
  const apiData = async () => {
    const fetched = await fetch(API);
    const data = await fetched.json();
    const resTotList =
      data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards;
    const resTotList2 =
      data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards;
    const WhatsNewList =
      data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card
        .itemCards;

    const reslist =
      data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (item) => {
          console.log(item.card.card.title);
          const currCategory = item.card.card.title;
          if (currCategory) {
            return currCategory;
          }
        }
      );

    const itemCards = reslist.map((item) => {
      return {
        itemList: item.card.card.itemCards,
        title: item.card.card.title,
      };
    });
    console.log(itemCards);

    const menuItems = resTotList.map((item) => {
      return {
        itemName: item.card.info.name,
        price: item.card.info.price / 100,
      };
    });
    const menuItems2 = resTotList2.map((item) => {
      return {
        itemName: item.card.info.name,
        price: item.card.info.price / 100,
      };
    });
    const WhatsNewMenu = WhatsNewList.map((item) => {
      return {
        itemName: item.card.info.name,
        price: item.card.info.price / 100,
      };
    });
    const updatedList = menuItems.concat(menuItems2);
    // setmenuList(updatedList.concat(WhatsNewMenu));
    setmenuList(itemCards);
  };

  useEffect(() => {
    apiData();
  }, []);
  return (
    <div>
      {menuList.map((item) => (
        <MenuItems key={item.title} item={item} />
      ))}
    </div>
  );
};

export default MenuComponent;
