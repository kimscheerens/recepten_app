import React from "react";
import Slider from "@material-ui/core/Slider";


const Slidebar = ({ value, changePrice }) => {


  return (
    <div className="slider__root">
      <Slider
       className="slider"
        value={value}
        onChange={changePrice}
        valueLabelDisplay="on"
        min={0}
        max={50}      
      />
    </div>
  );
};

export default Slidebar;
