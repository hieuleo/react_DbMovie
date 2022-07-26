import { Navigate , useOutlet} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';

export const ProtectedLayout = ({children}) => {
    const { user } = useAuth();
    const outlet = useOutlet();
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