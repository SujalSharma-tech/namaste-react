import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "Nested h2 Element"),
    React.createElement("h2", {}, "Nested h2 Element2"),
    React.createElement("h2", {}, "Nested h2 Element3"),
  ])
);

//*time consuming
console.log(parent); //*parent is an object here not normal html element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//* npx parcel build index.html  (for production builds)
//* learnt about bundlers. how parcel works and its features.
//* learnt about package.json and packagelock.json
//* learnt about dist and caching
