import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Components/Firebase/Firebase.init";


export const AuthContext = createContext()


const AuthProvaider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [looder, setLooder] = useState(true)

    const googleProvaider = new GoogleAuthProvider()
    const handaleGoogle = () => {
        return signInWithPopup(auth, googleProvaider)
    }
    const gitHubProbaider = new GithubAuthProvider()
    const handaleGithub = () => {
        return signInWithPopup(auth, gitHubProbaider)
    }
    const handaleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handalLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handalLogout = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
    }

    const manageUsr = (name, photo) => {
        if (auth.currentUser) {
            return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            }).then(() => {
                auth.currentUser.reload()
                    .then(() => {
                        setUser({ ...auth.currentUser });
                    })
            })
        }
    }

   


    const authInfo = {
        handaleGoogle,
        handaleGithub,
        handaleRegister,
        handalLogin,
        handalLogout,
        user,
        looder,
        manageUsr,
        setUser,



    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            if (currentUser) {
                setUser(currentUser)
            }
            else {
                setUser(null)
            }
            setLooder(false)
            return () => {
                unsubcribe()
            }
        })
    })
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvaider;