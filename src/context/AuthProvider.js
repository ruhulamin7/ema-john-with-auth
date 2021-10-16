import React, { createContext } from 'react';
import useFirebase from '../hooks/usefirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const { children } = props
    const AllContexts = useFirebase()
    return (
        <AuthContext.Provider value={AllContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;