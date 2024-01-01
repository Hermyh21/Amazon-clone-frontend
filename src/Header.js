import React, { useState } from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import flag from "./images/flag-en.png";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  // const basket = [],
  //   user = undefined;
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  //

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <div className="header__search">
        <div className="dropdown">
          <div className="selected-option" onClick={toggleDropdown}>
            All
            <span className="caret-icon">&#xf0d7;</span>
          </div>
          {isDropdownOpen && (
            <ul className="options-list">
              <li>
                <span>Option 1</span>
              </li>
              <li>
                <span>Option 2</span>
              </li>
              <li>
                <span>Option 3</span>
              </li>
              {/* Add more options as needed */}
            </ul>
          )}
        </div>
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search Amazon"
        />

        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div class="language-selector">
          <div class="dropdown">
            <div class="selected-language">
              <img src={flag} alt="English Flag" class="flag-icon" />
              EN
              <span class="caret-icon">&#xf0d7;</span>
            </div>
            <ul class="language-list">
              <li>English</li>
              <li>Español</li>
              <li>Français</li>
              <li>Deutch</li>
              {/*<li>
                Change currency{" "}
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Learn more
                </a>{" "}
                {"\n"}$ - USD - US Dollar
              </li>
  */}
            </ul>
          </div>
        </div>
        <Link to={!user && "/login"} className="header__clearlink">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello, {!user ? "Sign In" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Account & Lists"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        {/*<div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>*/}
        <Link to="/checkout" className="header__clearlink">
          <div className="header__optionBasket">
            <AddShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
