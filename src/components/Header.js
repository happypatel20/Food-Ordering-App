import { LOGO_URL } from "../utils/constant";
const Header = () => {
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
        </ul>
      </div>
    </header>
  );
};

export default Header;
