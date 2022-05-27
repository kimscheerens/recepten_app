import React, { useState, useEffect } from "react";
import { writeFavoItem, updateRating } from "../../utils/crud";
import { onSnapshot } from "firebase/firestore";
import img_white from "../../Assets/wit.png";
import img_black from "../../Assets/black.png";
import { useParams } from "@gatsbyjs/reach-router";

// whith chefshad
const RecipeRating = () => {
  const [rating, setRating] = useState(0);

  const { recipeid } = useParams();

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
            onClick={() => updateRating(i)}
          >
            <img
              alt="chefshead white or black"
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
console.log(updateRating);

export default RecipeRating;
