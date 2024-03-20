// const heading = React.createElement(
//   "h2",
//   { id: "heading" },
//   "This is from React"
// );

//*creating nested structures

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
console.log(parent); //*parent is an o

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
