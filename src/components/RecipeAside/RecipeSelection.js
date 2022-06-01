import React, { useState, useEffect } from "react";
import FilterPanel from "./FilterPanel";
import FilterList from "./FilterList";

import { recipeCollectionRef } from "../../utils/crud";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useParams } from "@gatsbyjs/reach-router";
import { FilterSharp } from "@material-ui/icons";

const RecipeSelection = (selectedFilters) => {
  // const [filters, setFilters] = useState({ label: "breakfast" });
  const [filters, setFilters] = useState({});
  // Hier zet je je data waar je wil over filteren...
  const recipesRef = collection(db, "recept", filters);

  // const [selectedRating, setSelectedRating] = useState("");
  // const [selectedPrice, setSelectedPrice] = useState([1, 50]);
  // const [resultsFound, setResultsFound] = useState(true);
  // const [FilterList, setFilterList] = useState();

  // const [dinner, setDinner] = useState([
  //   { id: 1, checked: false, label: "breakfast" },
  //   { id: 2, checked: false, label: "lunch" },
  //   { id: 3, checked: false, label: "dinner" },
  //   { id: 4, checked: false, label: "snack" },
  // ]);

  // const [allergies, setAllergies] = useState([
  //   { id: 5, checked: false, label: "nuts" },
  //   { id: 6, checked: false, label: "milk " },
  //   { id: 7, checked: false, label: "shelfish" },
  //   { id: 8, checked: false, label: "meat" },
  // ]);

  // // overview & filtering on Chefshadrating (collection Favorites)
  // const handleSelectRating = (event, value) =>
  //   !value ? null : setSelectedRating(value);

  // // overview & filtering on Label, dinnerMoment (collection recipes)
  // const handleChangeChecked = (id) => {
  //   const dinnerList = dinner;
  //   const changeCheckedDinner = dinnerList.map((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item
  //   );
  //   setDinner(changeCheckedDinner);
  // };
  // // console.log();

  // // overview & filtering on allergies (collection recipes)

  // const handleChangeCheckedAllergies = (id) => {
  //   const allergiesList = allergies;
  //   const handleChangeCheckedAllergies = allergiesList.map((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item
  //   );
  //   setAllergies(handleChangeCheckedAllergies);
  // };

  // // overview & filtering on price  (collection recipes)
  // const handleChangePrice = (event, value) => {
  //   setSelectedPrice(value);
  // };

  // // const applyFilters = () => {
  // //   const updatedList = recipeCollectionRef;
  // //   console.log(updatedList);
  // //   setFilterList(updatedList);

  // //   // Rating Filter
  // //   if (selectedRating) {
  // //     updatedList = updatedList.filter(
  // //       (item) => parseInt(item.rating) === parseInt(selectedRating)
  // //     );
  // //   }

  // //   //   DinnerMoment Filter
  // //   if (selectedRating) {
  // //     updatedList = updatedList.filter(
  // //       (item) => item.dinner === selectedRating
  // //     );
  // //   }

  // //   // Price Filter
  // //   const minPrice = selectedPrice[0];
  // //   const maxPrice = selectedPrice[100];

  // //   updatedList = updatedList.filter(
  // //     (item) => item.price >= minPrice && item.price <= maxPrice
  // //   );

  // //   setFilterList(updatedList);
  // //   !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  // // };

  // useEffect(() => {
  //   // applyFilters();
  // }, [selectedRating, dinner, allergies, selectedPrice]);

  return (
    <div className="container">
      <useCollection setFilters={setFilters} selectedFilters={filters} />
      <FilterPanel
      // selectRating={handleSelectRating}
      // selectedRating={selectedRating}
      // dinner={dinner}
      // setDinner={setDinner}
      // allergies={allergies}
      // setAllergies={setAllergies}
      // changeChecked={handleChangeChecked}
      // handleChangeCheckedAllergies={handleChangeCheckedAllergies}
      // changePrice={handleChangePrice}
      />

      {/* List & Empty View */}
      <div className="aside_list-wrap">
        {/* {resultsFound ? "test" : "null"} */}
        <FilterList FilterList={FilterList} />{" "}
      </div>
    </div>
  );
};

export default RecipeSelection;
