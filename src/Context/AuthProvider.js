import React from 'react';
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from './../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



   const createUser = (email, password) => {
     return createUserWithEmailAndPassword(auth, email, password);
   }; 

  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUeser) => {
      console.log("user Observing");
      setUser(currentUeser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);


   const authInfo = {
     createUser,
   };
  
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;