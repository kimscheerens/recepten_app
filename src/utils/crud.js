import { async } from "@firebase/util";
import {
  collection,
  onSnapshot,
  addDoc,
  setDoc,
  doc,
  deleteDoc,
  getDocs,
  updateDoc,
  getDoc,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import React, { useEffect, useState } from "react";

export const recipeCollectionRef = collection(db, "recept");
// console.log(recipeCollectionRef);

export const favoritesCollectionRef = collection(db, "favorites");
// console.log(favoritesCollectionRef);

export const shoppingCollectionRef = collection(db, "shoppingCart");
// console.log(shoppingCollectionRef);

// C create item

export const writeItem = async () => {
  const payload = {};
  const docRef = await addDoc(recipeCollectionRef, payload);
  console.log(docRef.id);
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

// U update Item
export const updateItem = async (id, updatedRecipe) => {
  const docRef = doc(db, "recept", id);
  console.log(docRef);
  await updateDoc(docRef, updatedRecipe);
};

// D Delete Item's
export const deleteItem = async (id) => {
  const docRef = doc(db, "recept", id);
  await deleteDoc(docRef);
};

export const deleteFavorite = async (id) => {
  const docRef = doc(db, "favorites", id);
  await deleteDoc(docRef);
};

export const deleteShopping = async (id) => {
  const docRef = doc(db, "shoppingCart", id);
  await deleteDoc(docRef);
};
