import React from "react";
import { BsThreeDots as Dots } from "react-icons/bs";

const RecipeAddToCalender = () => {
  return (
    <>
      <button className="recipe-item__btn">
        <li className="nav-item dropdown">
          <a href="/" className="main-nav__item">
            <Dots className="dots" />
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <a href="/" className="main-nav__sub-item">
                Monday
              </a>
              <ul className="dropdown-menu-detail">
                <li className="dropdown-item-detail">Breakfast</li>
                <li className="dropdown-item-detail">Lunch</li>
                <li className="dropdown-item-detail">Dinner</li>
                <li className="dropdown-item-detail">Snack</li>
              </ul>
            </li>

            <li className="dropdown-item">
              <a href="/" className="main-nav__sub-item">
                Tuesday
              </a>
              <ul className="dropdown-menu-detail">
                <li className="dropdown-item-detail">Breakfast</li>
                <li className="dropdown-item-detail">Lunch</li>
                <li className="dropdown-item-detail">Dinner</li>
                <li className="dropdown-item-detail">Snack</li>
              </ul>
            </li>
            <li className="dropdown-item">
              <a href="/" className="main-nav__sub-item">
                Wednesday
              </a>
              <ul className="dropdown-menu-detail">
                <li className="dropdown-item-detail">Breakfast</li>
                <li className="dropdown-item-detail">Lunch</li>
                <li className="dropdown-item-detail">Dinner</li>
                <li className="dropdown-item-detail">Snack</li>
              </ul>
            </li>
            <li className="dropdown-item">
              <a href="/" className="main-nav__sub-item">
                Thursday
              </a>
              <ul className="dropdown-menu-detail">
                <li className="dropdown-item-detail">Breakfast</li>
                <li className="dropdown-item-detail">Lunch</li>
                <li className="dropdown-item-detail">Dinner</li>
                <li className="dropdown-item-detail">Snack</li>
              </ul>
            </li>
            <li className="dropdown-item">
              <a href="/" className="main-nav__sub-item">
                Friday
              </a>
              <ul className="dropdown-menu-detail">
                <li className="dropdown-item-detail">Breakfast</li>
                <li className="dropdown-item-detail">Lunch</li>
                <li className="dropdown-item-detail">Dinner</li>
                <li className="dropdown-item-detail">Snack</li>
              </ul>
            </li>
            <li className="dropdown-item">
              <a href="/" className="main-nav__sub-item">
                Saturday
              </a>
              <ul className="dropdown-menu-detail">
                <li className="dropdown-item-detail">Breakfast</li>
                <li className="dropdown-item-detail">Lunch</li>
                <li className="dropdown-item-detail">Dinner</li>
                <li className="dropdown-item-detail">Snack</li>
              </ul>
            </li>
            <li className="dropdown-item">
              <a href="/" className="main-nav__sub-item">
                Sunday
              </a>
              <ul className="dropdown-menu-detail">
                <li className="dropdown-item-detail">Breakfast</li>
                <li className="dropdown-item-detail">Lunch</li>
                <li className="dropdown-item-detail">Dinner</li>
                <li className="dropdown-item-detail">Snack</li>
              </ul>
            </li>
          </ul>
        </li>
      </button>
    </>
  );
};

export default RecipeAddToCalender;
