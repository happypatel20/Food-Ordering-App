import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login")
  const onlineStatus = useOnlineStatus()
  return (
    <header className="header">
      <div className="container header-wrap">
        <img className="header_logo" src={LOGO_URL} />
        <ul className="header_nav-list">
          <li>
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
            </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <a>Cart</a>
          </li>
          <li>
          <button onClick={() => {
            if(isLoggedIn === "Login"){
              setIsLoggedIn("Logout");
            }
            else{
              setIsLoggedIn("Login");
            }
          }}>{isLoggedIn}</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
