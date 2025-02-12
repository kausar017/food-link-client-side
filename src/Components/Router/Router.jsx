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
import PrivetRout from "../../page/PrivetRout/PrivetRout";
import Detals from "../../page/Detals/Detals";
import MyFoodUpdate from "../../page/ManageMyFoods/MyFoodUpdate";
import AboutUs from "../../page/AboutUs/AboutUs";
import Contact from "../../page/Contact/Contact";

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
                element: <PrivetRout>
                    <AddFood></AddFood>
                </PrivetRout>
            },
            {
                path: '/managmyfood',
                element: <PrivetRout>
                    <ManageMyFoods></ManageMyFoods>
                </PrivetRout>
            },
            {
                path: '/foodrequest',
                element: <PrivetRout>
                    <MyFoodRequest></MyFoodRequest>
                </PrivetRout>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            
            {
                path: '/detals/:id',
                element:
                    <Detals></Detals>

            },
            {
                path: '/foodUpdate/:id',
                element: <PrivetRout>
                    <MyFoodUpdate></MyFoodUpdate>
                </PrivetRout>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/singup',
        element: <Signup></Signup>
    },
]);

export default Router;