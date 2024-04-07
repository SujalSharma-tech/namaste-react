import carticon from "../images/cart.png";
import helpicon from "../images/help.png";
import homeicon from "../images/home.png";
import offersicon from "../images/offers.png";
import signinicon from "../images/signin.png";
import reslogo from "../images/res-logo.jpg";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="res-header">
      <div className="res-logo">
        <img src={reslogo} alt="Logo" />
      </div>
      <div className="res-nav-items">
        <ul>
          <li>
            <img src={homeicon} width={20} />
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <img src={offersicon} width={20} />
            <Link to={"/offers"}>Offers</Link>
          </li>
          <li>
            <img src={signinicon} width={20} />
            <Link to={"/signin"}>SignIn</Link>
          </li>
          <li>
            <img src={carticon} width={20} />
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
