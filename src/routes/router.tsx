import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";

const routes = createBrowserRouter([
    {
        index: true,
        path: "/",
        element: <HomePage/>
    }
]);

export default routes;