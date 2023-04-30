import { useState, useEffect } from "react";
import UserContext from './Context';

const UserProvider = ({ children,statusP}) => {
    const [status, setStatus] = useState();
    useEffect(() => {
        if(statusP){
        console.log(statusP)

            setStatus(statusP);
        }
    }, [statusP]);

    return (
        <UserContext.Provider value={status} >
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;