import Input from "../../components/utils/input/Input";
import "./createRecipe.css";

function CreateRecipe() {
    return (
        <div className="createRecipe">
            <form className="inputForms">
                <div className="input">
                    <label htmlFor="name">Recipe Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="input">
                    <Input
                        label="Recipe"
                        name="recipe"
                        type="text"
                        inputFunction={() => {}}
                    />
                </div>

                <div className="input">
                    <label htmlFor="time">time (minutes)</label>
                    <input type="number" name="time" id="time" />
                </div>

                <div className="input">
                    <label htmlFor="Difficulty">Difficulty</label>
                    <input type="text" name="Difficulty" id="Difficulty" />
                </div>

                <div className="input">
                    <label htmlFor="Description">Description</label>
                    <input type="text" name="Description" id="Description" />
                </div>

                <div className="input">
                    <label htmlFor="Images">Images</label>
                    <input
                        type="file"
                        name="Images"
                        id="Images"
                        accept="image/*"
                    />
                </div>

                <div className="input">
                    <label htmlFor="Instructions">Instructions</label>
                    <input type="text" name="Instructions" id="Instructions" />
                </div>
            </form>
        </div>
    );
}

export default CreateRecipe;
