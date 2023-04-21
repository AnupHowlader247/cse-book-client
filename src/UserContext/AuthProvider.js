import React, { createContext, useState } from "react";

export const UserInfo = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const authInfo = {
        user,
        setUser,
    };
    return <UserInfo.Provider value={authInfo}>{children}</UserInfo.Provider>;
};

export default AuthProvider;