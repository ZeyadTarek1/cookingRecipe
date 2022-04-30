import { useNavigate } from "react-router";
import { deleteData } from "../../api";
import { recipeModel } from "../../models";
import "./recipeCard.css";

type recipeCard = recipeModel & { getData: () => void };
const RecipeCard = ({
    _id,
    title,
    time,
    ingredients,
    instructions,
    image,
    description,
    getData,
}: recipeCard) => {
    let navigate = useNavigate();

    const deleteRecipe = async () => {
        const link = `http://localhost:5000/recipes/${_id}`;
        console.log(link);

        await deleteData(link);
        getData();
    };

    const navigateEditRecipe = () => {
        navigate(`/editRecipe/${_id}`);
    };

    const navigateViewRecipe = () => {
        navigate(`/view-recipe/${_id}`);
    };

    return (
        <div className="card">
            <img src={image} onClick={navigateViewRecipe} />
            <div className="cardBody">
                <h2>{title}</h2>
                <div className="info">
                    <p className="time">{time} minutes</p>
                </div>
                <div className="buttons">
                    <button className="editBtn" onClick={navigateEditRecipe}>
                        Edit
                    </button>
                    <button className="deleteBtn" onClick={deleteRecipe}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
