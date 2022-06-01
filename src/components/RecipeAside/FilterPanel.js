import React from "react";
import FilterListToggle from "./FilterListToggle";
import { recipeCollectionRef, favoritesCollectionRef } from "../../utils/crud";
import CheckBox from "./CheckBoxComponent";
import Slidebar from "./Slidebar";
import CheckBoxComponent from "./CheckBoxComponent";

const FilterPanel = ({
  selectRating,
  selectedRating,
  dinner,
  changeChecked,
  allergies,
  selectedTime,
  changeTime,
  changePrice,
  selectedPrice,
}) => (
  <div className="search-filters-form">
    <div className="input-group">
      <h3 className="filter-section__title">Looking for: </h3>
      <p className="label filter-section">Dinner</p>
      {dinner.map((dinnerMoment) => (
        <CheckBoxComponent
          key={dinnerMoment.id}
          dinnerMoment={dinnerMoment}
          changeChecked={changeChecked}
          className="checkbox-text"
        />
      ))}
    </div>
    <div className="input-group">
      <p className="label filter-section">allergies</p>
      {allergies.map((allergie) => (
        <CheckBoxComponent
          key={allergie.id}
          dinnerMoment={allergie}
          changeChecked={changeChecked}
          className="checkbox-text"
        />
      ))}
    </div>
    <div className="input-group">
      <p className="label-range filter-section">Time: min </p>
      <Slidebar value={selectedTime} changePrice={changeTime} />
    </div>
    <div className="input-group">
      <p className="label-range">Price Range: €</p>
      <Slidebar value={selectedPrice} changePrice={changePrice} />
    </div>
    <div className="input-group">
      <p className="label filter-section">Rating</p>
      <FilterListToggle
        // options={favoritesCollectionRef}
        value={selectedRating}
        selectRating={selectRating}
      />
    </div>
  </div>
);

export default FilterPanel;
