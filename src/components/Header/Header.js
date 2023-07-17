import React from "react";
import "./Header.css";
import udemy from "../../assets/udemy.svg";
import { ReactComponent as MagnifyingGlassIcon } from "../../assets/magnifying-glass.svg";
import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-cart.svg";

function Header() {
  return (
    <div className="headerPrimary">
      <div className="left part">
        <div className="udemyLogo">
          <img src={udemy} className="logo" alt="logo" />
        </div>
        <div className="categoriesDiv">
          <span className="categories">Categories</span>
        </div>
      </div>
      <div className="mid part">
        <div className="searchIcon">
          <MagnifyingGlassIcon className="icon" />
        </div>
        <input className="searchBar" placeholder="Search for anything" />
      </div>
      <div className="right part">
        <div className="businessDiv">
          <span className="business">Udemy for Business</span>
        </div>
        <div className="teachDiv">
          <span className="teach">Teach on Udemy</span>
        </div>
        <div className="cartDiv">
          <ShoppingCartIcon className="icon" />
        </div>
        <div className="login button">Log In</div>
        <div className="signup button">Sign up</div>
      </div>
    </div>
  );
}

export default Header;
