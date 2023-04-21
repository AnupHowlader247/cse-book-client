import {
    createBrowserRouter, Outlet
} from "react-router-dom";
import Home from "../Page/Home/Home";
import Login from '../Page/Login/Login';
import Register from "../Page/Register/Register";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import HomeContainer from "../components/HomeContainer/HomeContainer";
import PrivateRoute from "./PrivateRoute";
const Router = createBrowserRouter([
        {
            path: '/',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/home',
            element: <PrivateRoute> <Home></Home> </PrivateRoute>,
            errorElement: <ErrorPage></ErrorPage> ,
            children: [
                {
                    path: '/home',
                    element: <HomeContainer></HomeContainer>
                },
                {
                    path: '/home/profile',
                    element: <Register></Register>
                },
                {
                    path: '/home/notifications',
                    element: <Register></Register>
                },
                {
                    path: '/home/messages',
                    element: <Register></Register>
                },
            ]
        },
]);
export default Router;