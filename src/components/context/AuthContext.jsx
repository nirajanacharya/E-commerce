
import { createContext } from 'react';
import { useState, useEffect } from 'react';
import authSvc from '../../pages/auth/auth.service'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();

    const checkLoggedInUser = async () => {
        try {
            const response = await authSvc.getLoggedInUser();
            setUser(response);
        } catch (error) {
            console.error("Error fetching logged-in user:", error);
        }
    };

    useEffect(() => {
        checkLoggedInUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
