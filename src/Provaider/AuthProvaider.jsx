import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Components/Firebase/Firebase.init";
import axios from "axios";


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
    // useEffect(() => {
    //     const unsubcribe = onAuthStateChanged(auth, async (currentUser) => {
    //         // console.log(currentUser);
    //         if (currentUser?.email) {
    //             setUser(currentUser)
    //             // genaret token
    //             const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email: currentUser?.email }, { withCredentials: true })
    //             // console.log(data)


    //         }
    //         else {
    //             setUser(null)
    //             const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, { withCredentials: true })
    //             // console.log(data)
    //         }
    //         setLooder(false)
    //         return () => {
    //             unsubcribe()
    //         }
    //     })
    // })
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, async (currentUser) => {
            try {
                if (currentUser?.email) {
                    setUser(currentUser);

                    // Generate token
                    const { data } = await axios.post(
                        `${import.meta.env.VITE_API_URL}/jwt`,
                        { email: currentUser?.email },
                        { withCredentials: true }
                    );
                    console.log('Token generated:', data);
                } else {
                    setUser(null);

                    // Logout request
                    const { data } = await axios.get(
                        `${import.meta.env.VITE_API_URL}/logout`,
                        { withCredentials: true }
                    );
                    console.log('Logged out:', data);
                }
            } catch (error) {
                console.error('Error in onAuthStateChanged:', error);
            } finally {
                setLooder(false);
            }
        });

        // Properly unsubscribe on cleanup
        return () => unsubcribe();
    }, []);



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvaider;