import { useState, useEffect } from "react";

const MenuItems = (props) => {
  const { itemName, price } = props.item;
  return <div>{itemName + " price:" + price}</div>;
};

const MenuComponent = () => {
  const [menuList, setmenuList] = useState([]);
  const API =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.2231589&lng=75.7670466&restaurantId=787638&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER";
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
    setmenuList(updatedList.concat(WhatsNewMenu));
  };

  useEffect(() => {
    apiData();
  }, []);
  return (
    <div>
      {menuList.map((item) => (
        <MenuItems key={item.itemName} item={item} />
      ))}
    </div>
  );
};

export default MenuComponent;
