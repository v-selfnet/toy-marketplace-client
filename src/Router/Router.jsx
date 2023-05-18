import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Toys from "../Pages/Toys/Toys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Regular from "../Pages/Home/Regular";
import Sports from "../Pages/Home/Sports";
import Police from "../Pages/Home/Police";
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    { path: '/regular', element: <Regular></Regular> },
                    { path: '/sports', element: <Sports></Sports> },
                    { path: '/police', element: <Police></Police> }
                ]
            },
            {
                path: '/toys',
                element: <Toys></Toys>
            },
            {
                path: '/mytoys',
                element: <MyToys></MyToys>
            },
            {
                path: '/addtoy',
                element: <AddToy></AddToy>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },




            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
]);
export default router;