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
import Blog from "../Pages/Blog/Blog";
import RegularDetail from "../Pages/Home/RegularDetail";
import SportsDetail from "../Pages/Home/SportsDetail";
import PoliceDetail from "../Pages/Home/PoliceDetail";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/toys',
                element: <Toys></Toys>,
                children: [
                    {
                        path: '/toys/regular',
                        element: <Regular></Regular>,
                        // loader: () => fetch('http://localhost:3000/regular')
                        loader: () => fetch('https://toy-marketplace-server-virid.vercel.app/regular')
                    },
                    {
                        path: '/toys/regular/:id',
                        element: <PrivateRoute><RegularDetail></RegularDetail></PrivateRoute>,
                        loader: ({ params }) => fetch(`https://toy-marketplace-server-virid.vercel.app/regular/${params.id}`)
                    },
                    {
                        path: '/toys/sports',
                        element: <Sports></Sports>,
                        loader: () => fetch('https://toy-marketplace-server-virid.vercel.app/sports')
                    },
                    {
                        path: '/toys/sports/:id',
                        element: <PrivateRoute><SportsDetail></SportsDetail></PrivateRoute>,
                        loader: ({ params }) => fetch(`https://toy-marketplace-server-virid.vercel.app/sports/${params.id}`)
                    },
                    {
                        path: '/toys/police',
                        element: <Police></Police>,
                        loader: () => fetch('https://toy-marketplace-server-virid.vercel.app/police')
                    },
                    {
                        path: '/toys/police/:id',
                        element: <PrivateRoute><PoliceDetail></PoliceDetail></PrivateRoute>,
                        loader: ({ params }) => fetch(`https://toy-marketplace-server-virid.vercel.app/${params.id}`)
                    },
                ]
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
                path: '/blog',
                element: <Blog></Blog>
            },
            
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);
export default router;