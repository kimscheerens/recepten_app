import React from "react";
import img_test from "../../Assets/logo.jpg";
import Banner from "../Header/Banner";

const WeekMenu = () => {
  const today = new Date();

  return (
    <>
      <Banner />
      <h3>Weekmenu</h3>
      <div>
        Today:
        {today.getDate() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getFullYear()}
      </div>
      <div className="buttons">
        <button className="previous"> &gt </button>
        <button className="next"> &gt </button>
      </div>

      <div className="WeekMenu">
       
  </div>
       
    </>
  );
};

export default WeekMenu;
