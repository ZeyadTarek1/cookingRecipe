import React from "react";
import "./App.css";
import RecipeCard from "./components/card/RecipeCard";
import Footer from "./components/footer/Footer";
import HeroBanner from "./components/heroBanner/HeroBanner";
import NavbarBootstrap from "./components/navbar/NavbarBootstrap";

function App() {
    return (
        <div className="App">
            <NavbarBootstrap />
            <HeroBanner />
            <div className="test">
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>
            <Footer />
        </div>
    );
}

export default App;
