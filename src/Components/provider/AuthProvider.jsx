import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
// create context api
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const singInWithGoogle = () => { 
        return signInWithPopup(auth, googleProvider)
    }
    

    const createUser = (email,password) =>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //create observer/...
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user',currentUser)
            setUser(currentUser)
            setLoading(false)
        })

        // clean up ............
        return ()=>{
            unSubscribe()
        }
    },[])
    

    // sing in user.............
    
    const singInUser = (email,password) =>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // sign out user......
    const singOutUser = () =>{
        return signOut (auth)
    }

    const authInfo ={
        user,
        loading,
        createUser,
        singInUser,
        singOutUser,
        singInWithGoogle

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;