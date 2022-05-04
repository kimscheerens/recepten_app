// everything for Styling components
import "./App.css";
import "../src/styling/main.css";
import "../src/components/Header/header.css";
import "../src/components/Recipe/recipe.css";
import "../src/components/Recipe/RecipeAside.css";
import "../src/components/ShoppingList/Shopping.css";
import "../src/components/User/user.css";

import React from "react";

// import all components
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Shop from "./components/ShoppingList/Shop";
import Contact from "./components/Contact";
import RecipeList from "./components/Recipe/RecipeList";
import RecipeDetail from "./components/Recipe/RecipeDetail";
import WeekMenu from "./components/Recipe/WeekMenu";
import Home from "./components/Header/Home";
import CreateUser from "./components/User/CreateUser";
import Login from "./components/User/Login";

//import of packages
import { Router } from "@gatsbyjs/reach-router";
import { RecipeProvider } from "./context/RecipeContext";
import Favorites from "./components/Recipe/Favorites";

function App() {
  return (
    <div className="App">
      <Header />
      <RecipeProvider>
        <Router className="container">
          <Home exact path="/" />
          <RecipeList path="/RecipeDetail" />
          <RecipeDetail path="/RecipeList" />
          <Favorites path="/favorites" />
          <WeekMenu path="/RecipeList/WeekMenu" />
          <Shop path="/shop" />
          <CreateUser path="/CreateUser" />
          <Login path="/Login" />
          <Contact path="/contact" />
        </Router>
      </RecipeProvider>
      <Footer />
    </div>
  );
}

export default App;
