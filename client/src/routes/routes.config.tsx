import { useRoutes } from "react-router";
import About from "../pages/about/About";
import CreateRecipe from "../pages/create-recipe/CreateRecipe";
import EditRecipe from "../pages/edit-recipe/editRecipe";
import Home from "../pages/home/Home";
import ViewRecipe from "../pages/view-recipe/viewRecipe";

const GetRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/create-recipe",
            element: <CreateRecipe />,
        },
        {
            path: "/view-recipe/:id",
            element: <ViewRecipe />,
        },
        {
            path: "/edit-recipe/:id",
            element: <EditRecipe />,
        },
        {
            path: "/about",
            element: <About />,
        },
    ]);
    return routes;
};
export default GetRoutes;
