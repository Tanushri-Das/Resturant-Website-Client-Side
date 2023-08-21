import React, { createContext, useEffect, useState } from 'react'

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
    const providerLogin = (provider)=>{
        return signInWithPopup(auth,provider)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
    }
    },[])
    const authInfo = {
        createUser,login,user,updateUserProfile,logOut,loading,providerLogin
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider