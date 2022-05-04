import React, { useEffect, useState } from "react";
import img_test from "../../Assets/test2.jpg";
import img_white from "../../Assets/wit.png";
import img_black from "../../Assets/black.png";
import { readAllItem, favoritesCollectionRef } from "../../utils/crud";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase";
import RecipeRating from "./RecipeRating";
// import { query, orderBy, limit } from "firebase/firestore";

// const favoriteLimit = query(Ref, orderBy("favorite", "desc"), limit(3));

const Favorites = () => {
  const [favorite, setFavorite] = useState([]);
  const [favoItem, setFavoItem] = useState({
    recipeId: "",
    value: "",
  });

  // to get all the data from firestore

  useEffect(() => {
    onSnapshot(favoritesCollectionRef, (snapshot) => {
      setFavorite(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    });
  }, []);

  return (
    <>
      <section className="top-recep">
        <div className="top-recep__container">
          <h2 className="top-recep__title">Most favorite recipes</h2>
          <div className="top-recep__list">
            {favorite.map((favorit) => (
              <article className="recep-item">
                <img
                  src={favorit.image}
                  alt="test"
                  className="recep-item__img"
                />
                <div className="item-overlay">
                  <div className="item-btns">
                    <a className="btn btn-view">
                      <img
                        src={img_white}
                        alt="koksmutsje wit of zwart"
                        className="btn"
                      />
                    </a>
                  </div>
                </div>
                <div className="item-detail">
                  <h3 className="item-name">{favorit.title} </h3>
                  <RecipeRating />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Favorites;
