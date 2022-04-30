// Models
import { recipeModel } from "../../models";
// Components
import GradientButton from "../utils/button/GradientButton";
import FileInput from "../utils/input/FileInput";
import TextAreaInput from "../utils/input/TextAreaInput";
import TypeInput from "../utils/input/TypeInput";
// Styles
import {
    ModifyRecipeContainer,
    ModifyRecipeForm,
    FormCard,
    FormCardBody,
    FormCardHead,
} from "./ModifyRecipe.styles";

type recipe = Omit<recipeModel, "image"> & {
    image: File;
};

type ModifyRecipeProps = {
    formTile: string;
    backgroundImgUrl: string;
    recipeData?: recipeModel;
    submitFunction: (
        e: React.FormEvent<HTMLFormElement>,
        recipeData: recipe
    ) => void;
};

const ModifyRecipe = ({
    formTile = "",
    backgroundImgUrl = "",
    recipeData,
    submitFunction,
}: ModifyRecipeProps) => {
    const myRecipe: recipe = {
        title: "",
        time: "",
        ingredients: "",
        instructions: "",
        description: "",
        image: new File([""], "file"),
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        submitFunction(e, myRecipe);
    };

    return (
        <ModifyRecipeContainer backgroundImage={backgroundImgUrl}>
            <ModifyRecipeForm>
                <FormCard onSubmit={submitHandler}>
                    <FormCardHead>
                        <h4>{formTile}</h4>
                    </FormCardHead>
                    <FormCardBody>
                        <div>
                            <TypeInput
                                label="Title"
                                name="title"
                                value={recipeData?.title}
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
                                value={recipeData?.time}
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
                            initalImage={recipeData?.image}
                            inputFunction={(file) => {
                                myRecipe.image = file;
                            }}
                            style={{ color: "white" }}
                        />
                    </FormCardBody>
                    <div className="ingredients">
                        <TextAreaInput
                            label="Description"
                            name="description"
                            value={recipeData?.description}
                            inputFunction={(value) => {
                                myRecipe.description = value;
                            }}
                        />
                        <TextAreaInput
                            label="Ingredients"
                            name="ingredients"
                            value={recipeData?.ingredients}
                            inputFunction={(value) => {
                                myRecipe.ingredients = value;
                            }}
                        />
                        <TextAreaInput
                            label="Instructions"
                            name="instructions"
                            value={recipeData?.instructions}
                            inputFunction={(value) => {
                                myRecipe.instructions = value;
                            }}
                        />
                        <GradientButton />
                    </div>
                </FormCard>
            </ModifyRecipeForm>
        </ModifyRecipeContainer>
    );
};

export default ModifyRecipe;
