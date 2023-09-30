import React, { createContext, useEffect, useState } from 'react'

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider=new GoogleAuthProvider();

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
    // const providerLogin = (provider)=>{
    //     return signInWithPopup(auth,provider)
    // }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            // get and set token
            if(currentUser){
                axios.post('https://my-resturant-app-server-side-olk8qg3zx-tanushri-das.vercel.app/jwt',{email:currentUser?.email})
                .then(data =>{
                    console.log(data.data.token)
                    localStorage.setItem('access-token',data.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
         
        })
        return ()=>{
            return unsubscribe();
    }
    },[])
    const authInfo = {
        createUser,login,user,updateUserProfile,logOut,loading,googleSignIn
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider