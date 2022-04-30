import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getData } from "../../api";
import DetailedCard from "../../components/detailed-card/detailedCard";
import { Background } from "./viewRecipe.styles";
import { recipeModel } from "../../models";

const ViewRecipe = () => {
    const [detailedRecipe, setDetailedRecipe] = useState<recipeModel>();

    let params = useParams();

    const getRecipe = async () => {
        setDetailedRecipe(
            await getData(`http://localhost:5000/recipe/${params.id}`)
        );
    };

    useEffect(() => {
        getRecipe();
    }, []);

    return (
        <Background>
            {detailedRecipe && <DetailedCard {...detailedRecipe} />}
        </Background>
    );
};

export default ViewRecipe;