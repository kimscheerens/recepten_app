import React from "react";
import img_test2 from "../../Assets/test1.jpg";
import img_test from "../../Assets/test2.jpg";
import img_breakfast from "../../Assets/breakfast.webp";
import img_dinner from "../../Assets/dinner.jpg";
// import Recipe from "./Recipe";

const RecipeList = () => {
  return (
    <section className="allRecipes">
      <div className="top-recep__container">
        <div className="top-recep__list">
          <article className="recep-item">
            <img src={img_breakfast} alt="test" className="recep-item__img" />
            <h3 className="recep-item__title">
              <a href="#test" className="recep-item__link">
                Breakfast
              </a>
              <i className="#359902"></i>
            </h3>
          </article>
          <article className="recep-item">
            <img src={img_test2} alt="test" className="recep-item__img" />
            <h3 className="recep-item__title">
              <a href="#test" className="recep-item__link">
                lunch
              </a>
            </h3>
          </article>
          <article className="recep-item">
            <img src={img_dinner} alt="test" className="recep-item__img" />
            <h3 className="recep-item__title">
              <a href="#test" className="recep-item__link">
                Dinner
              </a>
            </h3>
          </article>
          <article className="recep-item">
            <img src={img_test} alt="test" className="recep-item__img" />
            <h3 className="recep-item__title">
              <a href="#test" className="recep-item__link">
                Snacks
              </a>
            </h3>
          </article>
        </div>
        <a href="/RecipeList" className="top-recep__cta">
          See all our recipes
        </a>
      </div>
    </section>
  );
};

export default RecipeList;
