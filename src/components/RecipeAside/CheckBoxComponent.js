import React from "react";

const CheckBoxComponent = ({ changeChecked, dinnerMoment }) => {
  const { checked, label, id } = dinnerMoment;
  return (
    <>
      <ul className="filter-list">
        <li className="filter-list__item">
          <label className="filter-list-label"></label>
          <input
            className="wrap"
            type="checkbox"
            checked={checked}
            onChange={() => changeChecked(id)}
          ></input>
          <span>{label}</span>
        </li>
      </ul>
    </>
  );
};

export default CheckBoxComponent;
