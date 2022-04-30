import RecipeCard from "../../components/card/RecipeCard";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import { getData } from "../../api";
import { recipeModel } from "../../models";
import { useEffect, useState } from "react";

import { HomeContainer, CardHome } from "./home.styles";

function Home() {
    const [allRecipes, setAllrecipes] = useState<recipeModel[]>();

    const getdatafunction = async () => {
        setAllrecipes(
            await getData(
                "https://cooking-recipe-mern.herokuapp.com/getRecipes"
            )
        );
    };

    useEffect(() => {
        getdatafunction();
    }, []);

    return (
        <HomeContainer>
            <HeroBanner />
            <CardHome>
                {allRecipes?.map((data) => (
                    <RecipeCard
                        key={data._id}
                        {...data}
                        getData={getdatafunction}
                    />
                ))}
            </CardHome>
        </HomeContainer>
    );
}
export default Home;
