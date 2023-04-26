import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import React, { createContext, useEffect, useState } from "react";
  import app from "../firebase/firebase.config";
  export const UserInfo = createContext();
  
  const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState({});
  
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
    
    const LogIn = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUser(user);
          
        })
    };
    const logout = () => {
      return signOut(auth);
    };
  
   
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
           setUser(user);
        } else {
           setUser();
        }
      });
    }, [user]);
    const authInfo = {
      user,
      setUser,
      createUser,
      LogIn,
      logout,
    };
    return <UserInfo.Provider value={authInfo}>{children}</UserInfo.Provider>;
  };
  
  export default AuthProvider;