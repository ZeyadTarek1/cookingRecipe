import styled from "styled-components";
import GradientButton from "../../components/utils/button/GradientButton";
import FileInput from "../../components/utils/input/FileInput";
import TextAreaInput from "../../components/utils/input/TextAreaInput";
import TypeInput from "../../components/utils/input/TypeInput";
import cookingBackground from "../../img/cooking background-min.jpg";

const allRecipes: recipe[] = [];
type recipe = {
    title: string;
    time: string;
    ingredients: string;
    instructions: string;
    image: File;
};

function CreateRecipe() {
    const myRecipe: recipe = {
        title: "",
        time: "",
        ingredients: "",
        instructions: "",
        image: new File([""], "file"),
    };

    const getAllRecipes = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await fetch("http://localhost:5000/getRecipes");
            let json = await data.json();
            console.log(json);
            return data;
        } catch (e) {
            console.log(e);
            console.log("error", e);
            return e;
        }
    };

    const deleteRecipe = async (id: string) => {
        try {
            const data = await fetch(`localhost:5000/recipes/${id}`, {
                method: "DELETE",
            });
            console.log("deleted", data);
        } catch (e) {
            console.log("error", e);
        }
    };

    const updateRecipe = async (id: string) => {
        try {
            const data = await fetch(`localhost:5000/recipes/${id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    time: "0",
                    ingredients: "patching",
                    instructions: "t",
                }),
            });
        } catch (e) {
            console.log("error", e);
        }
    };

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("image", myRecipe.image);
            formData.append("data", JSON.stringify(myRecipe));
            fetch("http://localhost:5000/getrecipe", {
                method: "POST",
                body: formData,
            });
        } catch (e) {
            console.log("error", e);
        }

        console.log(myRecipe);
    };

    return (
        <CreateRecipeContainer>
            <CreateRecipeForm>
                <FormCard onSubmit={getAllRecipes}>
                    <FormCardHead>
                        <h4>Create a Recipe</h4>
                    </FormCardHead>
                    <FormCardBody>
                        <div>
                            <TypeInput
                                label="Title"
                                name="title"
                                inputFunction={(value) => {
                                    myRecipe.title = value;
                                }}
                                style={{
                                    textColor: "white",
                                    activeLineColor: "rgb(0, 188, 212)",
                                }}
                            />
                            <TypeInput
                                label="Time (min)"
                                name="time"
                                type="number"
                                inputFunction={(value) => {
                                    myRecipe.time = value;
                                }}
                                style={{
                                    textColor: "white",
                                    activeLineColor: "rgb(0, 188, 212)",
                                }}
                            />
                        </div>
                        <FileInput
                            label="Upload Image"
                            name="image"
                            inputFunction={(file) => {
                                myRecipe.image = file;
                            }}
                            style={{ color: "white" }}
                        />
                    </FormCardBody>
                    <div className="ingredients">
                        <TextAreaInput
                            label="Ingredients"
                            name="ingredients"
                            inputFunction={(value) => {
                                myRecipe.ingredients = value;
                            }}
                        />
                        <TextAreaInput
                            label="Instructions"
                            name="instructions"
                            inputFunction={(value) => {
                                myRecipe.instructions = value;
                            }}
                        />
                        <GradientButton />
                    </div>
                </FormCard>
            </CreateRecipeForm>
        </CreateRecipeContainer>
    );
}

export default CreateRecipe;

const CreateRecipeContainer = styled.div`
    background: url("${cookingBackground}");
    background-repeat: no-repeat;
    background-size: cover;

    .ingredients {
        padding: 1.5rem 50px 1.25rem;
    }
`;

const CreateRecipeForm = styled.div`
    padding: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormCard = styled.form`
    min-width: 750px;
    display: flex;
    flex-direction: column;
    background-color: #2f363e;
    border-radius: 12px;
`;

const FormCardHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #3e454d;
    padding: 1.5rem 1.875rem 1.25rem;
    color: white;
    border-radius: calc(0.75rem - 1px) calc(0.75rem - 1px) 0 0;
    h4 {
        font-size: 20px;
        font-weight: 500;
        text-transform: capitalize;
    }
`;

const FormCardBody = styled.div`
    padding: 1.5rem 50px 1.25rem;
    display: flex;
    justify-content: space-between;
`;
