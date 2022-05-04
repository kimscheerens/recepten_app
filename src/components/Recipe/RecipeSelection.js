import React from "react";

const RecipeSelection = () => {
  return (
    <form className="search-filters-form">
      <div className="filter-section">
        <h3 className="filter-section__title">Looking for: </h3>
        <ul className="filter-list">
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>Breakfast </span>
          </li>
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>Lunch </span>
          </li>
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>Dinner </span>
          </li>
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>Snacks </span>
          </li>
        </ul>
      </div>
      <div className="filter-section">
        <h3 className="filter-section__title">Prep Time: </h3>
        <ul className="filter-list">
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>5 min </span>
          </li>
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>10 min</span>
          </li>
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>15 min </span>
          </li>
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>30 min </span>
          </li>
        </ul>
      </div>
      <div className="filter-section">
        <h3 className="filter-section__title">Allergies: </h3>
        <ul className="filter-list">
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>Nuts</span>
          </li>
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>Milk </span>
          </li>
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>shellfish</span>
          </li>
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>soja </span>
          </li>
        </ul>
      </div>
      <div className="filter-section">
        <h3 className="filter-section__title">price: </h3>
        <ul className="filter-list">
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>5 €</span>
          </li>
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>5 € - 10 € </span>
          </li>
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>11€ - 15 €</span>
          </li>
          <li className="filter-list__item">
            <label className="filter-list-label"></label>
            <input type="checkbox"></input>
            <span>16 €</span>{" "}
          </li>
        </ul>
      </div>
    </form>
  );
};

export default RecipeSelection;
