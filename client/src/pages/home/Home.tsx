import "./home.css";
import RecipeCard from "../../components/card/RecipeCard";
import HeroBanner from "../../components/heroBanner/HeroBanner";

const allRecipes: recipe[] = [];
type recipe = {
    title: string;
    time: string;
    ingredients: string;
    instructions: string;
    image: File;
};

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
