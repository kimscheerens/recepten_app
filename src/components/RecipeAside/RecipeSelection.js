import React, { useState, useEffect } from "react";
import FilterPanel from "./FilterPanel";
import FilterList from "./FilterList";

import { recipeCollectionRef } from "../../utils/crud";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useParams } from "@gatsbyjs/reach-router";

const RecipeSelection = () => {
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedPrice, setSelectedPrice] = useState([1, 50]);
  const [resultsFound, setResultsFound] = useState(true);
  const [FilterList, setFilterList] = useState();

  // const params = useParams();
  // const { recipe } = useParams();

  // console.log(FilterList);
  // console.log(params);

  const [dinner, setDinner] = useState([
    { id: 1, checked: false, label: "breakfast" },
    { id: 2, checked: false, label: "lunch" },
    { id: 3, checked: false, label: "dinner" },
    { id: 4, checked: false, label: "snack" },
  ]);

  const [allergies, setAllergies] = useState([
    { id: 5, checked: false, label: "nuts" },
    { id: 6, checked: false, label: "milk " },
    { id: 7, checked: false, label: "shelfish" },
    { id: 8, checked: false, label: "meat" },
  ]);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const dinnerList = dinner;
    const changeCheckedDinner = dinnerList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setDinner(changeCheckedDinner);
  };
  // console.log();

  const handleChangeCheckedAllergies = (id) => {
    const allergiesList = allergies;
    const handleChangeCheckedAllergies = allergiesList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAllergies(handleChangeCheckedAllergies);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = ({ recipe }) => {
    const updatedList = recipeCollectionRef.id;
    console.log(updatedList);

    setFilterList(updatedList);
  };
  useEffect(() => {
    applyFilters();
  }, [selectedRating, dinner, allergies, selectedPrice]);

  return (
    <div className="container">
      <FilterPanel
        selectRating={handleSelectRating}
        selectedRating={selectedRating}
        dinner={dinner}
        setDinner={setDinner}
        allergies={allergies}
        setAllergies={setAllergies}
        changeChecked={handleChangeChecked}
        handleChangeCheckedAllergies={handleChangeCheckedAllergies}
        changePrice={handleChangePrice}
      />

      {/* List & Empty View */}
      <div className="aside_list-wrap">
        {resultsFound ? "test" : "null"}
        {/* <FilterList FilterList={FilterList} /> : <EmptyView /> */}
      </div>
    </div>
  );
};

export default RecipeSelection;
