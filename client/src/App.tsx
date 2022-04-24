import React from "react";
import "./App.css";
import HeroBanner from "./components/heroBanner/HeroBanner";
import NavbarBootstrap from "./components/navbar/NavbarBootstrap";

function App() {
    return (
        <div className="App">
            <NavbarBootstrap />
            <HeroBanner />
        </div>
    );
}

export default App;
