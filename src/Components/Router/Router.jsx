import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Error from "../../page/ErrorPage/Error";
import AvailableFoods from "../../page/AvailableFoods/AvailableFoods";
import HomePage from "../../page/HomePage/HomePage";
import AddFood from "../../page/AddFood/AddFood";
import ManageMyFoods from "../../page/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../../page/MyFoodRequest/MyFoodRequest";
import Login from "../../page/Login/Login";
import Signup from "../../page/Signup/Signup";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/available',
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path: '/addfood',
                element: <AddFood></AddFood>
            },
            {
                path: '/managmyfood',
                element: <ManageMyFoods></ManageMyFoods>
            },
            {
                path: '/foodrequest',
                element: <MyFoodRequest></MyFoodRequest>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <Signup></Signup>
            }
        ]
    },
]);

export default Router;