import React from "react";
import Favorites from "../Recipe/Favorites";
import RecipeList from "../Recipe/RecipeList";

const Home = () => {
 
  return (
    <>
      <main className="hero">
        <h1 className="hero__title">Food App</h1>
        {/* <form className="hero__searchform" role="search" method="get">
          <label className="sr-only">Search</label>  
        </form>   */}
         <div className="app__recipes"></div>
      </main>
      <RecipeList/>
      <Favorites/>
     
    </>
  );
};

export default Home;
