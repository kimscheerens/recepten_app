import React from "react";
import { useState, useEffect } from "react";
import {
  updateRecipe,
  deleteItem,
  recipeCollectionRef,
  writeFavoItem,
} from "../../utils/crud";
import img_white from "../../Assets/wit.png";
import { onSnapshot, addDoc } from "firebase/firestore";
import ImagesUpload from "../ImagesUpload";

// this is the CRUD for recipe

function Recipe() {
  const [imageUrl, setImageUrl] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [form, setForm] = useState({
    title: "",
    imageUrl: "",
    desc: "",
    ingredients: [],
    steps: [],
    label: "",
    allergies: "",
    time: "",
  });
  const [popupActive, setPopupActive] = useState(false);

  // to query on the data , get the pagination: https://firebase.google.com/docs/firestore/query-data/query-cursors

  // to get all the data from firestore
  // const recipesCollectionRef = collection(db, "recept");

  useEffect(() => {
    onSnapshot(recipeCollectionRef, (snapshot) => {
      setRecipes(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewing: false,
            ...doc.data(),
          };
        })
      );
    });
  }, []);

  // to get more of the recipe
  const handleView = (id) => {
    const recipesClone = [...recipes];

    recipesClone.forEach((recipe) => {
      if (recipe.id === id) {
        recipe.viewing = !recipe.viewing;
      } else {
        recipe.viewing = false;
      }
    });

    setRecipes(recipesClone);
  };

  // // if we submit the form all the fields exept imageUrl are completed
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.desc ||
      !form.ingredients ||
      !form.steps ||
      !form.allergies ||
      !form.label ||
      !form.time
    ) {
      alert("Please fill out all fields");
      return;
    }

    addDoc(recipeCollectionRef, { ...form, imageUrl });

    setForm({
      title: "",
      imageUrl: "",
      desc: "",
      ingredients: [],
      steps: [],
      label: "",
      allergies: "",
      time: "",
    });

    setPopupActive(false);
  };

  // to get more than 1 ingredi??nt in the array
  const handleIngredient = (e, i) => {
    const ingredientsClone = [...form.ingredients];

    ingredientsClone[i] = e.target.value;

    setForm({
      ...form,
      ingredients: ingredientsClone,
    });
  };

  // to get more than 1 step in the array
  const handleStep = (e, i) => {
    const stepsClone = [...form.steps];

    stepsClone[i] = e.target.value;

    setForm({
      ...form,
      steps: stepsClone,
    });
  };

  const handleIngredientCount = () => {
    setForm({
      ...form,
      ingredients: [...form.ingredients, ""],
    });
  };

  const handleStepCount = () => {
    setForm({
      ...form,
      steps: [...form.steps, ""],
    });
  };

  return (
    <>
      <div className="recipe">
        <h1 className="recipe__title">My recipes</h1>
        <button
          className="recipe__button"
          onClick={() => setPopupActive(!popupActive)}
        >
          Add recipe
        </button>
        <div className="recipe-collection">
          <ul className="recipe__list">
            {recipes.map((recipe, i) => (
              <div className="recipe-item" key={recipe.id}>
                <div className="recipe-item__container">
                  <a href={`/recipe/${recipe.id}`}>
                    <h3 className="recipe-item__title">{recipe.title}</h3>
                    <p
                      className="recipe-item__detail"
                      dangerouslySetInnerHTML={{ __html: recipe.desc }}
                    ></p>
                  </a>
                </div>
                <img
                  className="recipe-item__img"
                  src={recipe.imageUrl}
                  alt="image of the recipe"
                ></img>

                <div className="recipe-item__content">
                  <button
                    className="recipe-item__btn"
                    onClick={() => handleView(recipe.id)}
                  >
                    View {recipe.viewing ? "less" : "more"}
                  </button>
                  <button
                    className="recipe-item__btn"
                    onClick={() => deleteItem(recipe.id)}
                  >
                    ???????
                  </button>
                  <button
                    className="recipe-item__btn"
                    onClick={() => updateRecipe(recipe.id, {})}
                  >
                    ??????
                  </button>
                  <button className="recipe-item__btn">
                    <img
                      src={img_white}
                      alt="chefshead white or black"
                      className="recipe-item__btn-icon"
                      onClick={() => writeFavoItem(recipe)}
                    />
                  </button>                 
                </div>
                {recipe.viewing ? (
                  ""
                ) : (
                  <div className="labels">
                    <span className="labels__labels">
                      Labels: {recipe.label}
                    </span>
                    <span className="labels__allergenen">
                      Allergies: {recipe.allergies}
                    </span>
                    <span className="labels__info">
                      Always refer to the product label for the most accurate
                      information on ingredients and allergens.
                    </span>
                  </div>
                )}
                {recipe.viewing && (
                  <div>
                    <aside className="aside">
                      <span className="aside__time">
                        Preparation time: {recipe.time}
                        <i>??????</i>
                      </span>
                      <span className="aside__persons">Persons: 2 ????</span>
                      <span className="aside__price">
                        Price: {recipe.price} ???
                      </span>
                    </aside>
                    <div className="cont_over_hidden">
                      <div className="cont_tabs">
                        <ul>
                          <li>
                            <h4>INGREDIENTS</h4>
                            <div className="cont_text_ingredients">
                              {recipe.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                              ))}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
      {popupActive && (
        <div className="popup">
          <div className="popup-inner">
            <div className="popup-inner__close">
              <h2>Add a new recipe</h2>
              <button
                type="button"
                class="remove"
                onClick={() => setPopupActive(false)}
              >
                x
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title:</label>
                <input
                  className="form-group__input"
                  type="text"
                  value={form.title}
                  placeholder="enter a title..."
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea
                  type="text"
                  placeholder="write the description..."
                  value={form.desc}
                  onChange={(e) => setForm({ ...form, desc: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>add image:</label>
                <ImagesUpload setImageUrl={setImageUrl} />
              </div>
              <div className="form-group">
                <label>Time:</label>
                <input
                  className="form-group__input"
                  type="text"
                  value={form.time}
                  placeholder="How much time is needed..."
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Price:</label>
                <input
                  className="form-group__input"
                  type="text"
                  value={form.price}
                  placeholder="enter the price for 2 persons..."
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="label-title">Allergies:</label>
                <div className="label__container">
                  <input
                    className="label-check__input"
                    type="checkbox"
                    name="allergies"
                    value="nuts"
                    onChange={(e) =>
                      setForm({ ...form, allergies: e.target.value })
                    }
                  />
                  <label className="label-check">nuts</label>

                  <input
                    className="label-check__input"
                    type="checkbox"
                    name="allergies"
                    value="soja"
                    onChange={(e) =>
                      setForm({ ...form, allergies: e.target.value })
                    }
                  />
                  <label className="label-check">soja</label>

                  <input
                    className="label-check__input"
                    type="checkbox"
                    name="allergies"
                    value="milk"
                    onChange={(e) =>
                      setForm({ ...form, allergies: e.target.value })
                    }
                  />
                  <label className="label-check">milk</label>
                  <input
                    className="label-check__input"
                    type="checkbox"
                    name="allergies"
                    value="fish and shellfish"
                    onChange={(e) =>
                      setForm({ ...form, allergies: e.target.value })
                    }
                  />
                  <label className="label-check">fish and shellfish</label>
                </div>
              </div>

              <div className="form-group">
                <select
                  className="select_box"
                  name="label"
                  type="text"
                  value={form.label}
                  onChange={(e) => setForm({ ...form, label: e.target.value })}
                >
                  <option className="select_box__text">
                    Chose Dinner moment
                  </option>
                  <option className="select_box__text" value="Breakfast">
                    breakfast
                  </option>
                  <option className="select_box__text" value="lunch">
                    lunch
                  </option>
                  <option className="select_box__text" value="dinner">
                    dinner
                  </option>
                  <option className="select_box__text" value="snacks">
                    snacks
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Ingredients:</label>
                {form.ingredients.map((ingredient, i) => (
                  <input
                    className="form-group__input"
                    type="text"
                    placeholder="enter one ingredi??nt..."
                    key={i}
                    value={ingredient}
                    onChange={(e) => handleIngredient(e, i)}
                  />
                ))}
                <button type="button" onClick={handleIngredientCount}>
                  Add ingredient
                </button>
              </div>

              <div className="form-group">
                <label>Steps:</label>
                {form.steps.map((step, i) => (
                  <textarea
                    type="text"
                    placeholder="enter the steps..."
                    key={i}
                    value={step}
                    onChange={(e) => handleStep(e, i)}
                  />
                ))}
                <button type="button" onClick={handleStepCount}>
                  Add step
                </button>
              </div>
              <div className="two_buttons">
                <button type="submit">Submit</button>
                <button
                  type="button"
                  class="remove"
                  onClick={() => setPopupActive(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Recipe;
