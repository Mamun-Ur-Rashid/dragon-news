import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.confic'



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    // const user = {}
    const authInfo = {}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;