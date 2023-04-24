import { useState, useEffect } from "react";
import UserContext from './Context';

const UserProvider = ({ children,statusP}) => {

    // const [id, setId] = useState({});
    const [status, setStatus] = useState();

    // useEffect(() => {
    //     if(idP){
    //         setId(idP);
    //     }
    // }, [idP]);
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