import React from "react";
import Recipe from "./Recipe";
import { useRecipes } from "../../context/RecipeContext";

const RecipeDetail = () => {
  const [value, dispatch] = useRecipes();

  return (
    <>
    {JSON.stringify(value)}
    <button
        onClick={() =>
          dispatch({
            type: "addRecipe",
            payload: { name: "test", ingredients: [] }
          })
        }
      >
        Add recipe
      </button>
      <br />
      <button
        onClick={
          () =>
            dispatch({
              type: "addIngredient",
              name: "test",
              payload: { name: "ingredient 1" }
            })
          /**
           * store ingredient in firebase
           */
        }
      >
        Add ingredient
      </button>
    <Recipe/>
    </>
  );
};

export default RecipeDetail;
