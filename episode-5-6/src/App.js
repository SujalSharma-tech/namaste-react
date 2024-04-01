import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import Aboutus from "./components/Offers";
import ErrorElement from "./components/ErrorElement";
import Offers from "./components/Offers";
import MenuComponent from "./components/MenuComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MenuComponent from "./components/MenuComponent";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="res-layout">
      <HeaderComponent />
      <Outlet />
      {/* <MenuComponent /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
