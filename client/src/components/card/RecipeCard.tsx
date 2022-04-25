import imgR from "../../img/recipe.jpg";
import "./RecipeCard.css";
const RecipeCard = () => {
    return (
        <div className="card">
            <img src={imgR} />
            <div className="cardBody">
                <h2>Chicken Pasta</h2>
                <div className="info">
                    <p className="difficulty">Hard</p>
                    <p className="time">30min</p>
                </div>
                <div className="buttons">
                    <button className="editBtn">Edit</button>
                    <button className="deleteBtn">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
