import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import HomeContainer from "../components/HomeContainer/HomeContainer";
import PrivateRoute from "./PrivateRoute";
import Messages from "../Page/Messages/Messages";
import IndividualChat from "../Page/IndividualChat/IndividualChat";
import SearchResult from "../Page/SearchResult/SearchResult";
import OwnPost from "../Page/OwnPost/OwnPost";
import Type from "../Page/Type/Type";
import Batch from "../Page/Batch/Batch";
import BatchPost from "../Page/BatchPost/BatchPost";
import TypePost from "../Page/TypePost/TypePost";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        {" "}
        <Home></Home>{" "}
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <HomeContainer></HomeContainer>,
      },
      {
        path: "/home/profile",
        element: <OwnPost></OwnPost>,
      },
      {
        path: "/home/batch",
        element: <Batch></Batch>,
      },
      {
        path: "/home/batchPost",
        element: <BatchPost></BatchPost>,
      },
      {
        path: "/home/type",
        element: <Type></Type>,
      },
      {
        path: "/home/typePost",
        element: <TypePost></TypePost>,
      },
      {
        path: "/home/messages",
        element: <Messages></Messages>,
      },
      {
        path: "/home/individual",
        element: <IndividualChat></IndividualChat>,
      },
      {
        path: "/home/searchResult",
        element: <SearchResult></SearchResult>,
      },
    ],
  },
]);
export default Router;
