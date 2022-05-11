import React, { useState } from "react";
import { writeFavoItem } from "../../utils/crud";
import img_white from "../../Assets/wit.png";
import img_black from "../../Assets/black.png";

// whith chefshad
const RecipeRating = () => {
  const [rating, setRating] = useState(0);
  console.log(rating);

  return (
    <div className="chefshad-rating">
      {[...Array(5)].map((chefshad, i) => {
        i += 1;

        return (      
            <button
              type="button"
              key={i}
              className="btn__rating"
              onClick={() => writeFavoItem(i)}
            >
              <img
                alt="koksmutsje wit of zwart"
                className="btn__icon"
                onClick={() => setRating(i)}
                src={i <= rating ? `${img_black}` : `${img_white}`}
              />              
            </button>   
        );
      })}
    </div>
  );
};

export default RecipeRating;
