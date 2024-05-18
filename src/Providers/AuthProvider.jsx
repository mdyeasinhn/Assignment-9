import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from '../Firebase/Firebase.config'
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.error(error)
            })
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            console.log(res.user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    const authInfo = {
        createUser,
        signIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;