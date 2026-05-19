import { Navigate , useOutlet} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';

export const ProtectedLayout = ({children}) => {
    const { user, checkingAuth } = useAuth();
    const outlet = useOutlet();
    if (checkingAuth) {
        return null;
    }

    if ( user === null ) {
        return <Navigate to={"/react_DbMovie/login"}/>
    }

    return(
        <>
            <>
                {children}
            </>
            {outlet}    
        </>
    )
}
