import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login")
  return (
    <header className="header">
      <div className="container header-wrap">
        <img className="header_logo" src={LOGO_URL} />
        <ul className="header_nav-list">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact</a>
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
