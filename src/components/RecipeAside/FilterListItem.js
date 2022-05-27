import React from "react";
import img_white from "../../Assets/wit.png";

const FilterListItem = ({ item: { title, price, Time, rating } }) => (
  <div className="listItem-wrap">
    <img src="" alt="recipe image" />
    <header>
      <h4>{title}</h4>
      <span>
        {img_white}
        {rating}
      </span>
    </header>
    <footer>
      <p>
        <b>{Time}</b>
      </p>
      <p>
        <b>€{price}</b>
      </p>
    </footer>
  </div>
);

export default FilterListItem;
