import { useEffect, useState, useStateValue } from "react";
import img_test2 from "../../Assets/test1.jpg";
import img_test from "../../Assets/test2.jpg";
import img_breakfast from "../../Assets/breakfast.webp";
import img_dinner from "../../Assets/dinner.jpg";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { recipeCollectionRef } from "../../utils/crud";
import RecipeSelection from "./RecipeSelection";
import { async } from "@firebase/util";
import { db } from "../../utils/firebase";
import { Link } from "@gatsbyjs/reach-router";

// import Recipe from "./Recipe";

const RecipeList = () => {
  const [label, setLabel] = useState("breakfast");
  const [recipes, setRecipes] = useState([]);

  const handleClick = (e) => {
    setLabel(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    const recipeRef = query(recipeCollectionRef, where("label", "==", label));
    onSnapshot(recipeRef, (snapshot) => {
      setRecipes(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [label]);
  console.log(recipes);

  return (
    <section className="allRecipes">
      <div className="top-recep__container">
        <div className="top-recep__list">
          <article className="recep-item">
            <img src={img_breakfast} alt="test" className="recep-item__img" />
            <h3 className="recep-item__title">
              <button
                value="breakfast"
                onClick={handleClick}
                className="recep-item__link"
              >
                Breakfast
              </button>
            </h3>
          </article>
          <article className="recep-item">
            <img src={img_test2} alt="test" className="recep-item__img" />
            <h3 className="recep-item__title">
              <button
                value="lunch"
                onClick={handleClick}
                className="recep-item__link"
              >
                lunch
              </button>
            </h3>
          </article>
          <article className="recep-item">
            <img src={img_dinner} alt="test" className="recep-item__img" />
            <h3 className="recep-item__title">
              <button
                value="dinner"
                onClick={handleClick}
                className="recep-item__link"
              >
                Dinner
              </button>
            </h3>
          </article>
          <article className="recep-item">
            <img src={img_test} alt="test" className="recep-item__img" />
            <h3 className="recep-item__title">
              <button
                value="snacks"
                onClick={handleClick}
                className="recep-item__link"
              >
                Snacks
              </button>
            </h3>
          </article>
        </div>
        <ul className="top-recep__list">
          {recipes.map((recipe) => (
            <div className="recep-item" key={recipe.data.id}>
              {/* <Link path="/RecipeList/`${recipe.data.id}`"> */}
              <h3 className="recep-item__title">{recipe.data.title}</h3>
              {/* </Link> */}
              <img
                className="recep-item__label-img"
                src={recipe.data.imageUrl}
                alt="image of the recipe"
              ></img>
              <div className="label">
                <span className="label__all">
                  allergies:
                  {recipe.data.allergies}
                </span>
              </div>
            </div>
          ))}
        </ul>
      </div>
      <a href="/RecipeList" className="top-recep__cta">
        See all our recipes
      </a>
    </section>
  );
};

export default RecipeList;
