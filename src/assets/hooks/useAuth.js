import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import getToken from '../services/loginApi';
import { useLocation } from '../hooks/useLocation';

const AuthContext = createContext();

// tao AuthProvider la storage cua Context
export const AuthProvider = ({children}) => { 
    // khoi tao 1 storage
    const [user, setUser] = useLocation('user_Login', null);
    const navigate = useNavigate();
    
    // handle login request
    const login = useCallback(async (infoUser) => {
        try {
            const authData = await getToken(infoUser);
            setUser(authData);
            navigate("/react_DbMovie/Upcoming", { replace : true }); // dieu huong login
        } catch (error) {
            const message = error.response?.data?.message || 'Incorrect username or password.';
            alert(message);
        }
    }, [navigate, setUser]);

    // handle logout request
    const logout = useCallback(() => {
        setUser(null);
        navigate("/react_DbMovie/login", { replace : true }); // dieu huong login
    }, [navigate, setUser]);

    const value = useMemo(() => ({
        user,
        login,
        logout
    }),[user, login, logout]);

    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
}

// tao useAuth dung de su dung AuthProvider:
export const useAuth = () => {
   return useContext(AuthContext)
}
