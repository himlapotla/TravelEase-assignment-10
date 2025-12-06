import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile }
    from "firebase/auth";
import app from '../FireBase/firebase.config';

export const AllContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [mail, setMail] = useState(null)
    // const [color, setColor] = useState("light-mode")
    const [color, setColor] = useState(localStorage.getItem("bodyColor") || "light-mode")


    // ................................................................

    const changeColor = () => {
        if (color === "light-mode") {
            setColor("dark-mode")
        }
        else {
            setColor("light-mode")
        }
    }


    // useEffect(()=> {
    //     document.querySelector("body").className = color
    // }, [color])

    useEffect(() => {
        document.querySelector("body").className = color;
        localStorage.setItem("bodyColor", color); // save theme
    }, [color]);


    // ................................................................

    const createUser = (email, Password) => {
        return createUserWithEmailAndPassword(auth, email, Password)
    }

    const logIn = (email, Password) => {
        return signInWithEmailAndPassword(auth, email, Password)
    }

    const googleRegister = () => {
        return signInWithPopup(auth, provider)
    }

    const logOutt = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscrib()
        }
    }, [])


    const info = {
        loading,
        user,
        mail,
        createUser,
        googleRegister,
        setMail,
        setUser,
        logOutt,
        logIn,
        setLoading,
        changeColor,
        color,
    }

    return (
        <AllContext value={info}>
            {children}
        </AllContext>
    )
}

export default AuthProvider

