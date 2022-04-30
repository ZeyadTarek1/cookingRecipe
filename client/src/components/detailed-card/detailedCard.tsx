import { title } from "process";
import { useState } from "react";
import { recipeModel } from "../../models";
import { RecipeCard, RecipeCardBody } from "./detailedCard.styles";

const DetailedCard = ({
    title,
    time,
    ingredients,
    instructions,
    description,
    image,
}: recipeModel) => {
    return (
        <RecipeCard>
            <img src={image} alt="recipe" />
            <RecipeCardBody>
                <h1>
                    {title} <span>[{time} min]</span>
                </h1>
                <p>{description}</p>
                <h3>Ingredients</h3>
                {ingredients.split("\n").map((ingredient, index) => (
                    <p key={index}>- {ingredient}</p>
                ))}
                <h3>Instructions</h3>
                {instructions.split("\n").map((instruction, index) => (
                    <p key={index}>
                        {index + 1}. {instruction}
                    </p>
                ))}
            </RecipeCardBody>
        </RecipeCard>
    );
};

export default DetailedCard;
