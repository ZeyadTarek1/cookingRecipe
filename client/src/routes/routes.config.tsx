import { useRoutes } from "react-router";
import CreateRecipe from "../pages/create-recipe/CreateRecipe";
import Home from "../pages/home/Home";
import ViewRecipe from "../pages/view-recipe/viewRecipe";

const GetRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/create-receipe",
            element: <CreateRecipe />,
        },
        {
            path: "/view-recipe",
            element: <ViewRecipe />,
        },
    ]);
    return routes;
};
export default GetRoutes;
