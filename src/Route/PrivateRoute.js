import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserInfo } from "../UserContext/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserInfo);
  const location = useLocation();
  
  return (
    <div>
      {user ? (
        children
      ) : (
        <Navigate to="/" state={{ from: location }} replace></Navigate>
      )}
    </div>
  );
};

export default PrivateRoute;