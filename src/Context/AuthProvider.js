import React from 'react';
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,

} from "firebase/auth";
import app from './../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();



   const createUser = (email, password) => {
     return createUserWithEmailAndPassword(auth, email, password);
   }; 

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }; 

   const loginWithGoogle = () => {
     return signInWithPopup(auth, googleProvider);
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
     logIn,
     loginWithGoogle,
   };
  
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;