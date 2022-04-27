import "./App.css";
import RecipeCard from "./components/card/RecipeCard";
import Footer from "./components/footer/Footer";
import HeroBanner from "./components/heroBanner/HeroBanner";
import NavbarBootstrap from "./components/navbar/NavbarBootstrap";
import GetRoutes from "./routes/routes.config";

function App() {
    return (
        <div className="App">
            <NavbarBootstrap />

            <GetRoutes />
            <Footer />
        </div>
    );
}

export default App;
