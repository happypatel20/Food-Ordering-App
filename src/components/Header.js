import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login")
  const onlineStatus = useOnlineStatus()

  const {loggedInUser} = useContext(UserContext)
 const cartItems = useSelector((store) => store.cart.items)
 console.log(cartItems);
  return (
    <header>
      <div className="flex justify-between items-center shadow-lg">
        <img className="w-24 h-24" src={LOGO_URL} />
        <ul className="flex items-center">
          <li className="p-3">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="p-3">
            <Link to="/" className="relative pb-2 group transition-all">Home<span className="absolute left-0 transition-all bottom-0 group-hover:w-full w-0 h-1 bg-red-400"></span></Link>
          </li>
          <li className="p-3">
            <Link to="/about" className="relative pb-2 group transition-all">About Us<span className="absolute left-0 transition-all bottom-0 group-hover:w-full w-0 h-1 bg-red-400"></span></Link>
            </li>
          <li className="p-3">
            <Link to="/contact" className="relative pb-2 group transition-all">Contact<span className="absolute left-0 transition-all bottom-0 group-hover:w-full w-0 h-1 bg-red-400"></span></Link>
          </li>
          <li className="p-3">
            <Link to="/grocery" className="relative pb-2 group transition-all">Grocery<span className="absolute left-0 transition-all bottom-0 group-hover:w-full w-0 h-1 bg-red-400"></span></Link>
          </li>
          <li className="p-3">
            <Link to="/cart" className="relative pb-2 group transition-all font-bold">Cart ({cartItems.length})<span className="absolute left-0 transition-all bottom-0 group-hover:w-full w-0 h-1 bg-red-400"></span></Link>
          </li>
          <li className="p-3">
          <button className="px-3 py-2 bg-orange-500 text-white rounded-md" onClick={() => {
            if(isLoggedIn === "Login"){
              setIsLoggedIn("Logout");
            }
            else{
              setIsLoggedIn("Login");
            }
          }}>{isLoggedIn}</button>
          </li>
          <li className="text-green-500 font-bold text-sm mr-3">User: {loggedInUser}</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
