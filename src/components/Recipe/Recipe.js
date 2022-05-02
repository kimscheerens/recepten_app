import React from "react";
import { db, storage } from "../../utils/firebase";
import { useState, useEffect } from "react";
import { updateItem, deleteItem } from "../../utils/crud";
import { updateIngredientsByPersons } from "./VariablesRecipe";
import img_wit from "../../Assets/wit.png";
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  endAt,
} from "firebase/firestore";
import ImagesUpload from "../ImagesUpload";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// this is the CRUD for recipe

function Recipe() {
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
  const recipesCollectionRef = collection(db, "recept");
  useEffect(() => {
    onSnapshot(recipesCollectionRef, (snapshot) => {
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

  // if we submit the form all the fields exept imageUrl are completed
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

    addDoc(recipesCollectionRef, form);

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

  // to get more than 1 ingrediënt in the array
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

  // const uploadFile = () => {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `Images/${imageUpload.imageUrl}`);
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageUrls((prev) => [...prev, url]);
  //     });
  //   });
  // };

  return (
    <>
      <div className="recipe">
        <h1 className="recipe__title">My recipes</h1>
        <button onClick={() => setPopupActive(!popupActive)}>Add recipe</button>

        <ul className="recipe__list">
          {recipes.map((recipe, i) => (
            <div className="recipe-item" key={recipe.id}>
              <div className="recipe-item__container">
                <h3 className="recipe-item__title">{recipe.title}</h3>
                <p
                  className="recipe-item__detail"
                  dangerouslySetInnerHTML={{ __html: recipe.desc }}
                ></p>
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
                  🗑️
                </button>
                <button
                  className="recipe-item__btn"
                  onClick={() => updateItem(recipe.id)}
                >
                  ✏️
                </button>
                <button className="recipe-item__btn">
                  <img
                    src={img_wit}
                    alt="koksmutsje wit of zwart"
                    className="recipe-item__btn-icon"
                  />
                </button>
              </div>
              <div className="labels">
                <span className="labels__labels">Labels: {recipe.label}</span>
                <span className="labels__allergenen">
                  Allergies: {recipe.allergies}
                </span>
                <span className="labels__info">
                  Raadpleeg altijd het productetiket voor de meest accurate
                  informatie over ingrediënten en allergenen.
                </span>
              </div>

              {recipe.viewing && (
                <div>
                  <aside className="aside">
                    <span className="aside__time">
                      Bereidingstijd: {recipe.time}
                      <i>⏱️</i>
                    </span>

                    <span className="aside__persons">Persons: 2 🍴</span>

                    <span className="aside__price">
                      Price: {recipe.price} €
                    </span>
                  </aside>
                  <div className="cont_over_hidden">
                    <div className="numbre_container">
                      Persons:
                      <button
                        onClick={() =>
                          updateIngredientsByPersons(
                            recipe.id,
                            recipe.ingredient
                          )
                        }
                        className="numbre_button"
                      >
                        1
                      </button>
                      <button
                        onClick={() =>
                          updateIngredientsByPersons(
                            recipe.id,
                            recipe.ingredient
                          )
                        }
                        className="numbre_button"
                      >
                        2
                      </button>
                      <button
                        onClick={() =>
                          updateIngredientsByPersons(
                            recipe.id,
                            recipe.ingredient
                          )
                        }
                        className="numbre_button"
                      >
                        3
                      </button>
                      <button
                        onClick={() =>
                          updateIngredientsByPersons(
                            recipe.id,
                            recipe.ingredient
                          )
                        }
                        className="numbre_button"
                      >
                        4
                      </button>
                      <button
                        onClick={() =>
                          updateIngredientsByPersons(
                            recipe.id,
                            recipe.ingredient
                          )
                        }
                        className="numbre_button"
                      >
                        5
                      </button>
                      <button
                        onClick={() =>
                          updateIngredientsByPersons(
                            recipe.id,
                            recipe.ingredient
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
                              {recipe.ingredients.map((ingredient, i) => (
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
                        {recipe.steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>

      {popupActive && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Add a new recipe</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title:</label>
                <input
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
                <ImagesUpload />
                {/* <input
        type="file"
        // value={url}
        onChange={(e) =>
          setForm({...form, imageUrl: e.target.files[0] })
        }
      ></input> */}
              </div>
              <div className="form-group">
                <label>Time:</label>
                <input
                  type="text"
                  value={form.time}
                  placeholder="How much time is needed..."
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Price:</label>
                <input
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
                  <option className="select_box__text" value="Breakfast">
                    Breakfast
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
                    type="text"
                    placeholder="enter one ingrediënt..."
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
