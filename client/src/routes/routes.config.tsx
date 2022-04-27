import { useRoutes } from "react-router";
import CreateRecipe from "../pages/create-recipe/CreateRecipe";
import Home from "../pages/home/Home";

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
    ]);
    return routes;
};
export default GetRoutes;
