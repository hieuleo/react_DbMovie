import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getToken, { getCurrentUser } from '../services/loginApi';
import { useLocation } from '../hooks/useLocation';

const AuthContext = createContext();

// tao AuthProvider la storage cua Context
export const AuthProvider = ({children}) => { 
    // khoi tao 1 storage
    const [user, setUser] = useLocation('user_Login', null);
    const [checkingAuth, setCheckingAuth] = useState(Boolean(user?.token));
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const verifyStoredToken = async () => {
            if (!user?.token) {
                setCheckingAuth(false);
                return;
            }

            try {
                const currentUser = await getCurrentUser(user.token);

                if (isMounted) {
                    setUser({
                        token: user.token,
                        user: currentUser,
                    });
                }
            } catch (error) {
                if (isMounted) {
                    setUser(null);
                }
            } finally {
                if (isMounted) {
                    setCheckingAuth(false);
                }
            }
        };

        verifyStoredToken();

        return () => {
            isMounted = false;
        };
    }, [setUser, user?.token]);
    
    // handle login request
    const login = useCallback(async (infoUser) => {
        try {
            const authData = await getToken(infoUser);
            setUser(authData);
            navigate("/react_DbMovie/Upcoming", { replace : true }); // dieu huong login
        } catch (error) {
            const message = error.response?.data?.message || 'Cannot connect to the authentication server.';
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
        checkingAuth,
        login,
        logout
    }),[user, checkingAuth, login, logout]);

    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
}

// tao useAuth dung de su dung AuthProvider:
export const useAuth = () => {
   return useContext(AuthContext)
}
