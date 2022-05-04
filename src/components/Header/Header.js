import React from "react";
import img_icon from "../../Assets/logo.jpg";
import img_avatar from "../../Assets/chef-kok.webp";
import img_head from "../../Assets/head_icon.jpg";
import CreateUser from "../User/CreateUser";
import { useAuth } from "../../utils/useAuth";
import { getFirestore } from "firebase/firestore";
import ThemeSelector from "./ThemeSelector";

const Header = () => {
  const currentUser = useAuth();

  return (
    <header className="header">
      <div className="header__container">
        <div className="upper-nav">
          <a href="/" className="upper-nav__logo">
            <img src={img_icon} alt="letter K in fruit" height="80px" />
          </a>
        </div>
        <nav className="main-nav">
          <ul className="main-nav__container">
            <li>
              <a href="/" className="main-nav__item">
                🏡 Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a href="/" className="main-nav__item">
                🍴 Recipe info v
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="/RecipeList" className="main-nav__sub-item">
                    Recipe detail
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="/favorites" className="main-nav__sub-item">
                    favorite recipes
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/RecipeList/WeekMenu" className="main-nav__item">
                🍽️ Weekly menu
              </a>
            </li>
            <li>
              <a href="/shop" className="main-nav__item">
                🛒Shop
              </a>
            </li>
            <div className="shop">
              <p className="shop__item">2</p>
            </div>
          </ul>
          <li className="nav-item dropdown">
            <a href="/" className="main-nav__item" component={CreateUser}>
              <img
                src={currentUser ? `${img_avatar}` : `${img_head}`}
                alt="avatar to userprofile"
                className="avatar"
                height="40px"
              ></img>
            </a>
            <div>
              Currently logged in as: {currentUser && currentUser.email}
            </div>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <a href="/Login" className="main-nav__sub-item">
                  {currentUser ? "log out" : "log in"}
                </a>
              </li>
              <li className="dropdown-item">
                <a href="/CreateUser" className="main-nav__sub-item">
                  Create Account
                </a>
              </li>
            </ul>
          </li>
        </nav>
      </div>
      {/* <ThemeSelector /> */}
    </header>
  );
};

export default Header;
