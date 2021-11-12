import firebaseInit from "../Pages/Authentication/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
firebaseInit();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoaded, setIsloaded] = useState(true);
    const auth = getAuth();
    // Registration With Name, Email & Password
    const signUpWithPassword = (userName, email, pass) => {
        setIsloaded(true);
        createUserWithEmailAndPassword(auth, email, pass)
            .then(userData => {
                alert('Registration Successful');
                setError('');
                updateProfile(auth.currentUser, {
                    displayName: userName
                })
                    .then(() => {
                        user.displayName = userName;
                    })
                    .catch(error => {

                    })
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => {
                setIsloaded(false);
            })
    }

    // Sign in with Password 
    const signInWithPassword = (email, pass, location, history) => {
        setIsloaded(true);
        const redirectUrl = location.state?.from || '/';
        signInWithEmailAndPassword(auth, email, pass)
            .then(userData => {
                setError('');
                alert('Login Successful');
                history.push(redirectUrl);
                console.log(userData);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsloaded(false);
            })
    }

    // Sign out 

    const logOut = () => {
        signOut(auth).then(() => {
            setError('');
        }).catch((error) => {
            setError(error.message);
        });
    }

    // Observer

    useEffect(() => {
        setIsloaded(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsloaded(false);
        });
        return () => unsubscribe;
    }, [])
    return {
        user,
        isLoaded,
        error,
        setError,
        signUpWithPassword,
        signInWithPassword,
        logOut
    }
}
export default useFirebase;