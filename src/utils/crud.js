import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  query,
  limit,
} from "firebase/firestore";
import { db } from "./firebase";
import React, { useEffect, useState } from "react";


export const recipeCollectionRef = collection(db, "recept");
// console.log(recipeCollectionRef);

export const favoritesCollectionRef = query(
  collection(db, "favorites"),
  limit(4)
);
// console.log(favoritesCollectionRef);

export const shoppingCollectionRef = collection(db, "shoppingCart");
// console.log(shoppingCollectionRef);

// C create item

export const writeItem = async () => {
  const payload = {};
  const docRef = await addDoc(recipeCollectionRef, payload);
  console.log(docRef.id);
};

export const writeFavoItem = async (recipe) => {
  const favoRef = collection(db, "favorites");
  const payload = {
    image: `${recipe.imageUrl}`,
    recipeId: `${recipe.id}`,
    title: `${recipe.title}`,
    value: 0,
  };
  await addDoc(favoRef, payload);
  console.log(favoRef);
  console.log(payload);
};

// R read item
export const readItem = async (id) => {
  const docSnap = await getDoc(recipeCollectionRef, id);

  if (docSnap.exists()) {
    console.log(docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

// get all favoItems
// export const favoPosts = db.collection("favorites").where("recipeId", )

// R readAllItems
export const readAllItem = async (id) => {
  const docRef = doc(db, "recept", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log(docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};
// console.log(readAllItem);

// U update Item
export const updateItem = async (id, updatedRecipe) => {
  const docRef = doc(
    db,
    "recept",
    id
    // title,
    // imageUrl,
    // desc,
    // ingredients,
    // steps,
    // label,
    // allergies,
    // time
  );
  console.log(docRef);
  await updateDoc(docRef, updatedRecipe);
};

// addrating to DB

export const updateRating = async ( i ) => {
  const docRef = doc(db, "favorites", "value");  
  await updateDoc(docRef, { value: `${i}` });
};

console.log(updateRating);
console.log(updateDoc);

//update shoppingCart
// export const updateCart = async (id) => {
//   const docRef = doc(db, "shoppingCart", id);
//   console.log(docRef);
//   await updateDoc(docRef, { quantity: `${increment or decrement}` });
// };
// console.log(updateCart);

// D Delete Item's
export const deleteItem = async (id) => {
  const docRef = doc(db, "recept", id);
  await deleteDoc(docRef);
};

export const deleteFavorite = async (id) => {
  const docRef = doc(db, "favorites", id);
  await deleteDoc(docRef);
  console.log(deleteFavorite);
};

export const deleteShopping = async (id) => {
  const docRef = doc(db, "shoppingCart", id);
  await deleteDoc(docRef);
};
