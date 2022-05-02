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
  getDoc
 } from "firebase/firestore";
import { db } from "./firebase";
import React, { useEffect, useState } from "react";

// C create item

// export const writeItem = async () => {
//   const titel = prompt("enter titel gerecht");
//   const bereiding = prompt("enter bereiding gerecht");
//   const ingrediënten = prompt("enter ingredienten gerecht");

//   const CollectionRef = collection(db, "recept");
//   const payload = {
//     titel,
//     bereiding,
//     ingrediënten,
//   };
//   const docRef = await addDoc(CollectionRef, payload);
//   console.log(docRef.id);
// };

// R read item
export const readItem = async () => {};

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
  const recipeDoc = doc(db, "recept", id );
  console.log(recipeDoc);
  await updateDoc (recipeDoc, updatedRecipe);
};

// D Delete Item
export const deleteItem = async (id) => {
  const docRef = doc(db, "recept", id);
  await deleteDoc(docRef);
};
