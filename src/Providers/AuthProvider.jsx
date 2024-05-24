import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, GithubAuthProvider  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from '../Firebase/Firebase.config'
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logOut = ()=>{
        return signOut(auth)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
       
    };
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    };
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    };
    useEffect(() => {
        const unSubscirbe = onAuthStateChanged(auth, currentUser => {
            console.log(' on auth state chanage', currentUser);
            setUser(currentUser);
            
        });
        return () => {
            unSubscirbe()
        }
    }, []);

    const authInfo = {
        createUser,
        signIn,
        user, 
        setUser,
        logOut, 
        googleLogin,
        githubLogin
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;