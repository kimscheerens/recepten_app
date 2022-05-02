import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import React from "react";

const themeColors = ["rgb(124, 13, 14)", "rgba(249, 182, 11, 0.2)"];

const ThemeSelector = () => {
  const { changeColor } = useContext(ThemeContext);
  const { backgroundColor } = useContext(ThemeContext);

  return (
    <div className="theme_selector" style={{ backgroundColor }}>
      <div className="theme_buttons">
        {themeColors.map((color) => (
          <div
            //   key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
