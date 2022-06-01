// import React from "react";

// const CheckBoxComponent = ({ setFilters, dinnerMoment, selectedFilters }) => {
//   const { checked, label, id } = dinnerMoment;

//   const onChange = (e) => {
//     /**
//      * {
//      * dinner: ["breakfast"] = selectedFilters, vanaf dat er een checkbox dinner en die bestaat, dan steekt hij die nieuwe waarde erbij in de array
//      * }
//      */
//     const selectedName = e.target.name;
//     if (e.target.checked) {
//       // if checkboxes are being checked
//       setFilters({
//         // we spreat selected filters to preserve already selected filters
//         ...selectedFilters,
//         [selectedName]: selectedFilters[selectedName]
//           ? // to check if the're is already a filter present in filterObject
//             // if so we add the newly selected value to the existing Array in selected Filters
//             selectedFilters[selectedName].concat(e.target.value)
//           : // if not we initialise a new array with the selected value
//             [e.target.value],
//       });
//     } else {
//       // if checkboxes are being deselected
//       // we calculate the new values of the selectedName by removing the selected value
//       const newValues = selectedFilters[selectedName].filter((value) => {
//         value !== e.target.value;
//       });
//       // we spread selectedFilters to preserve already selected filters
//       const newFilters = { ...selectedFilters, [selectedName]: newValues };
//       // if the new values are an empty array we need to remove the selectedName from the selectedname
//       // because firebase doesn't allow an empty array in it's compount queries
//       if (newFilters.length === 0) {
//         delete newFilters[selectedName];
//       }

//       setFilters(newFilters);
//     }
//   };

//   console.log(selectedFilters);

//   return (
//     <>
//       <ul className="filter-list">
//         <li className="filter-list__item">
//           <label className="filter-list-label"></label>
//           {/* //* hier nog allemaal checkboxen aanmaken... // */}
//           <input
//             className="wrap"
//             type="checkbox"
//             name="breakfast"
//             checked={selectedFilters.label?.includes("breakfast")}
//             onChange={onChange}
//           ></input>
//           <input
//             className="wrap"
//             type="checkbox"
//             name="breakfast"
//             checked={selectedFilters.label?.includes("dinner")}
//             onChange={onChange}
//           ></input>
//           <span>{label}</span>
//         </li>
//       </ul>
//     </>
//   );
// };

// export default CheckBoxComponent;
