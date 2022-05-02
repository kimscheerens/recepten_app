import React, { useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../state/reducer";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";


const RecipeContext = React.createContext([]);

export const RecipeProvider = (props) => {
  const [recipes, setRecipes] = useState([]);

  /**
   * fetch data from firebase
   */
  const recipesCollectionRef = collection(db, "recept");
  useEffect(() => {
    onSnapshot(recipesCollectionRef, (snapshot) => {
      setRecipes(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id, ...doc.data(),
          };
        })
      );
    });
  }, []);

  const state = useReducer(reducer, [...recipes]);
  return (
    <RecipeContext.Provider value={state}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => {
  const value = useContext(RecipeContext);
  return value;
};
