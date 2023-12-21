import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null)

const AuthProvider = ( {children}) => {
    const auth = getAuth(app)
    const [loading , setLoading] = useState(true)
    const [ user, setUser]= useState(null)
    const googleProvider = new GoogleAuthProvider();

    const register = ( email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const login  = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

   useEffect( ()=> {
    const unSubscriber =  onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
        unSubscriber()
    }
   } , [auth])
   
    const authInfo = {
        register,
        login,
        user,
        logOut,
        loading,
        googleLogin
        
    }
   
   
    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;