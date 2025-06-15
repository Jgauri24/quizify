import React, { createContext, useEffect,useContext, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export const AuthProvider = ({ children }) => {
    const [currentUser,setCurrentUser]=useState(null);
    const [loading,setLoading]=useState(true)

function signup(email,password){
    return createUserWithEmailAndPassword(auth,
        email,password
    )
}
function login(email,password){
    return signInWithEmailAndPassword(auth,email,password)
}
function logout(){
    return signOut(auth)
}
useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(user)=>{
        setCurrentUser(user);
        setLoading(false)
    });
    return unsubscribe;
},[])

const value={
    currentUser,
    signup,
        login,
        logout

}
return (
    <AuthContext.Provider value={value}>
    {!loading && children}
    </AuthContext.Provider>
)
}