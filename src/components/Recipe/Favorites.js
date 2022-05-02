import React, { useEffect, useState } from "react";
import img_test from "../../Assets/test2.jpg";
import img_wit from "../../Assets/wit.png";
import img_zwart from "../../Assets/black.png";
import { readAllItem } from "../../utils/crud";
import {
  doc,
   getDoc
 } from "firebase/firestore";
import { db } from "../../utils/firebase";
import RecipeRating from "./RecipeRating";
// import { query, orderBy, limit } from "firebase/firestore";  

// const favoriteLimit = query(Ref, orderBy("favorite", "desc"), limit(3));

const Favorites = () => {
  const [favoriet, setFavoriet] = useState([]);

  const readAllFavorites = async (id) => {
    const docRef = doc(db, "favorite", id);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      console.log(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  return (
    <>
   <section className="top-recep">
      <div className="top-recep__container">
        <h2 className="top-recep__title">Most favorite recipes</h2>
        <div className="top-recep__list">
          <article className="recep-item">
            <img src={img_test} alt="test" className="recep-item__img" />
            <div className="item-overlay">
              <div className="item-btns">
                <a className="btn btn-view">
                  <img
                    src={img_wit}
                    alt="koksmutsje wit of zwart"
                    className="btn"
                  />
                </a>
              </div>
            </div>
            <div className="item-detail">
              <h3 className="item-name">Title </h3>
            <RecipeRating/>
            </div>
          </article>
          </div>
    </div>
</section>


    </>

  )
};

export default Favorites;
