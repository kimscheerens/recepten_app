import { async } from "@firebase/util";
import { updateDoc, doc} from "firebase/firestore";
import { db } from "../../utils/firebase";

import React from "react";


export const updateIngredientsByPersons = async (id, ingredient) => {
  const ingredientDoc = doc(db, "recept", id);
  const newFields = { ingredient: ingredient * 1 };
  await updateDoc(ingredientDoc, newFields);
};

// export const getFavorietRecipes = async (id) => {
//     const OnSnapshot = await get(child(db, `recept/${id}`));
//     if (OnSnapshot.exists()) {
//       return OnSnapshot.where().val();
//     }
//   };