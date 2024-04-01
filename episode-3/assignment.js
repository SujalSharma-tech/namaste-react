import React from "react";
import ReactDOM from "react-dom/client";
import flower from "./flower.jpg";
import usericon from "./user.jpeg";
import searchicon from "./search.png";
// Create a Header Component from scratch using Functional Components with JSX
// Add a Logo on left
// Add a search bar in middle
// Add User icon on right
// Add CSS to make it look nice

const HeaderComponent = () => (
  <div id="header">
    <img src={flower} id="flowerImg" width={40} height={40} />
    <div id="inputDiv">
      <input id="inputBox" type="text" />
      <img src={searchicon} width={40} height={40} />
    </div>
    <img src={usericon} width={40} height={40} />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
