import React, { useState } from "react";
import img_wit from "../../Assets/wit.png";
import img_zwart from "../../Assets/black.png";
import { FaBeer } from "react-icons/fa";

// whith chefshad
// const RecipeRating = () => {
//   const [rating, setRating] = useState(null);

//   return (
//
//     <div>
//       {[...Array(5)].map((chefshad, i) => {
//         const ratingValue = i + 1;

//         console.log(ratingValue);
//         return (
//           <label>
//             <input
//               type="radio"
//               name="rating"
//               className="btn__radio"
//               value={ratingValue}
//             />
//             <img
//               alt="koksmutsje wit of zwart"
//               className="btn__icon"
//               onClick={() => setRating(ratingValue)}
//               src={img_wit}
//               //   src={
//               //     {(ratingValue) <= (hover || rating) ? { img_zwart } : { img_wit }
//               //   }}
//             />
//             {/* <img
//               alt="koksmutsje wit of zwart"
//               className="btn__icon2"
//               onClick={() => setRating(ratingValue)}
//               src={img_zwart}
//             /> */}
//           </label>
//         );
//       })}
//     </div>
//   );
// };

const RecipeRating = () => {
  const [rating, setRating] = useState(null);

  return (
    <div>
      {[...Array(5)].map((beer, i) => {
        const ratingValueBeer = i + 1;

        console.log(ratingValueBeer);
        return (
          <label>
            <input
              type="radio"
              name="rating"
              className="btn__radio"
              value={ratingValueBeer}
            />

            <FaBeer
              className="btn__icon"
              onClick={() => setRating(ratingValueBeer)}
              color={ratingValueBeer < rating ? "#e4e5e9" : "#ffc107"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default RecipeRating;
