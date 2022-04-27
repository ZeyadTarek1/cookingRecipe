import "./home.css";
import RecipeCard from "../../components/card/RecipeCard";
import HeroBanner from "../../components/heroBanner/HeroBanner";

function Home() {
    return (
        <div className="App">
            <HeroBanner />
            <div className="cardHolder">
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
        </div>
    );
}

export default Home;
