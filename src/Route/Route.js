import {
    createBrowserRouter, Outlet
} from "react-router-dom";
import Home from "../Page/Home/Home";
import Login from '../Page/Login/Login';
import Register from "../Page/Register/Register";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
const Router = createBrowserRouter([
        {
            path: '/',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: '/home',
            element: <Home></Home>,
            errorElement: <ErrorPage></ErrorPage> ,
            children: [
                {
                    path: '/home',
                    element:  <Home></Home>,
                }
            ]
        },
]);
export default Router;