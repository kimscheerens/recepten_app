import React, { useEffect } from "react";
import { useState } from "react";
import img_white from "../../Assets/wit.png";
import RecipeAddToCalender from "./RecipeAddToCalender";
import { updateIngredientsByPersons } from "./VariablesRecipe";
import {
  recipeCollectionRef,
  deleteItem,
  updateItem,
  writeFavoItem,
} from "../../utils/crud";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useParams } from "@gatsbyjs/reach-router";

function RecipeDetail() {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const { recipeid } = useParams();

  const oneRecipeRef = doc(db, "recept", recipeid);

  // onSnapshot(oneRecipeRef, (doc) => {
  //   const data = doc.data();
  //   console.log(doc.data(), doc.id);
  //   setRecipeDetails(data);
  //   console.log(data);
  // });

  useEffect(() => {
    onSnapshot(recipeCollectionRef, (snapshot) => {
      setRecipeDetails(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    });
  }, []);
  console.log(setRecipeDetails);

  // to get more of the recipe
  const handleView = (id) => {
    const recipesClone = [...recipeDetails];

    recipesClone.forEach((recipe) => {
      if (recipe.id === id) {
        recipe.viewing = !recipe.viewing;
      } else {
        recipe.viewing = false;
      }
    });
    setRecipeDetails(recipesClone);
  };

  return (
    <section className="recipeDetail">
      <h2 className="recipeDetail__title"> Detail recipe:</h2>
      <div>
        {recipeDetails.map((recipeDetail, i) => (
          <>
            <div className="recipeDetail__container">
              <div key={recipeDetail.recipeid}> </div>
              <h3 className="recipeDetail__subtitle">{recipeDetail.title}</h3>
              <div className="recipeDetail__desc">{recipeDetail.desc}</div>
              <img
                className="recipeDetail__img"
                src={recipeDetail.imageUrl}
                alt="image of the recipe"
              ></img>
              <div className="recipeDetail__content">
                <button
                  className="recipeDetail__btn"
                  onClick={() => handleView(recipeDetail.recipeid)}
                >
                  View {recipeDetail.viewing ? "less" : "more"}
                </button>
                <button
                  className="recipeDetail__btn"
                  onClick={() => deleteItem(recipeDetail.id)}
                >
                  🗑️
                </button>
                <button
                  className="recipeDetail__btn"
                  onClick={() =>
                    updateItem(
                      recipeDetail.id,
                      recipeDetail.title,
                      recipeDetail.imageUrl,
                      recipeDetail.desc,
                      recipeDetail.ingredients,
                      recipeDetail.steps,
                      recipeDetail.label,
                      recipeDetail.allergies,
                      recipeDetail.time
                    )
                  }
                >
                  ✏️
                </button>
                <button className="recipeDetail__btn">
                  <img
                    src={img_white}
                    alt="chefshead white or black"
                    className="recipeDetail__btn-icon"
                    onClick={() => writeFavoItem(recipeDetail)}
                  />
                </button>
                <RecipeAddToCalender />
              </div>
              {recipeDetail.viewing ? (
                ""
              ) : (
                <div className="labels">
                  <span className="labels__labels">
                    Labels: {recipeDetail.label}
                  </span>
                  <span className="labels__allergenen">
                    Allergies: {recipeDetail.allergies}
                  </span>
                  <span className="labels__info">
                    Always refer to the product label for the most accurate
                    information on ingredients and allergens.
                  </span>
                </div>
              )}
              {recipeDetail.viewing && (
                <div>
                  <aside className="aside">
                    <span className="aside__time">
                      Preparation time: {recipeDetail.time}
                      <i>⏱️</i>
                    </span>
                    <span className="aside__persons">Persons: 2 🍴</span>
                    <span className="aside__price">
                      Price: {recipeDetail.price} €
                    </span>
                  </aside>
                  <div className="cont_over_hidden">
                    <div className="numbre_container">
                      Persons:
                      <button
                        onClick={() =>
                          updateIngredientsByPersons(
                            recipeDetail.id,
                            recipeDetail.ingredient
                          )
                        }
                        className="numbre_button"
                      >
                        1
                      </button>
                      <button
                        onClick={() =>
                          updateIngredientsByPersons(
                            recipeDetail.id,
                            recipeDetail.ingredient
                          )
                        }
                        className="numbre_button"
                      >
                        2
                      </button>
                      <button
                        onClick={() =>
                          updateIngredientsByPersons(
                            recipeDetail.id,
                            recipeDetail.ingredient
                          )
                        }
                        className="numbre_button"
                      >
                        3
                      </button>
                      <button
                        onClick={() =>
                          updateIngredientsByPersons(
                            recipeDetail.id,
                            recipeDetail.ingredient
                          )
                        }
                        className="numbre_button"
                      >
                        4
                      </button>
                      <button
                        onClick={() =>
                          updateIngredientsByPersons(
                            recipeDetail.id,
                            recipeDetail.ingredient
                          )
                        }
                        className="numbre_button"
                      >
                        5
                      </button>
                      <button
                        onClick={() =>
                          updateIngredientsByPersons(
                            recipeDetail.id,
                            recipeDetail.ingredient
                          )
                        }
                        className="numbre_button"
                      >
                        6
                      </button>
                    </div>
                    <div className="cont_tabs">
                      <ul>
                        <li>
                          <a href="#ingredients">
                            <h4 id="ingredients">INGREDIENTS</h4>
                            <div className="cont_text_ingredients">
                              {recipeDetail.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                              ))}
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#preparation">
                            <h4 id="preparation">PREPARATION</h4>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="cont_text_det_preparation">
                      <h4 className="cont_title_preparation">Steps</h4>
                    </div>
                    <div className="cont_info_preparation">
                      <ol className="cont_text_det_preparation">
                        {recipeDetail.steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        ))}
        ;
      </div>
    </section>
  );
}

export default RecipeDetail;
