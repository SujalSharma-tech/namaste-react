import React from "react";
import ReactDOM from "react-dom/client";
import flower from "./flower.jpg";

//* using attributes in jsx
const jsxheading = <h1>Hello world</h1>;
const jsximage = <img src={flower} width={280} height={200} alt="A flower" />;
const anchor = (
  <a target="_blank" href="https://www.youtube.com">
    This is link
  </a>
);

const spanjsx = <span>React Element</span>;
const div = (
  <div className="parent">
    This is parent div and {spanjsx} //* jsx under jsx
    <div className="child">This is child div</div>
  </div>
);

//* Functional Components - normal js func. that returns jsx code

const Title = () => (
  <h1 className="title" id="main-title">
    Namaste React Course
  </h1>
);

const Heading = () => (
  <div id="parent">
    <Title />
    <h2>learning namaste react Course</h2>
  </div>
);

//* using {} to write exectuable js code
const Body = () => (
  <div>
    {div} //*jsx under functional component
    <Heading />
    <Title />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Body />); //* functional components are used by < />

//* Note-Jsx performs code santization before executing it.
