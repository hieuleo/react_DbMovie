import React, { createContext, useContext, useMemo } from 'react';
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
    const login = async (infoUser) => {
        let token = getToken(infoUser);
        if (token) {
            setUser(token);
            navigate("./Upcoming", { replace : true }); // dieu huong login
        }else{
            alert(" Incorrect useName or passWord !!!")
        }
    }

    // handle logout request
    const logout = () => {
        setUser(null);
        navigate("./login", { replace : true }); // dieu huong login
    }

    const value = useMemo(() => ({
        user,
        login,
        logout
    }),[user]);

    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
}

// tao useAuth dung de su dung AuthProvider:
export const useAuth = () => {
   return useContext(AuthContext)
}