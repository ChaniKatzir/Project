import React, { useContext } from "react";
import Menu from './menu'
import Context from "./context/Context"
import PrivateArea from "./privateArea";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

<link rel="stylesheet" href="login.css"></link>
const Home = () => {
    const context = useContext(Context);
    return (<>
        {context && (
        context?.status == 1 ? <>
            <Menu  arr={["איזור אישי", "תלמידים", "צוות", "ניהול חשבונות", "הגדרות מוסד"]} 
            icon={["pi pi-fw pi-book", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-fw pi-calendar", "pi pi-cog"]}
            navigate={["/privateArea", "/student", "/staff", "/account", "/definitions"]} /><PrivateArea/>
        </> : context.status == 2 ? <>
            <Menu arr={["איזור אישי", "תלמידים"]} 
            icon={["pi pi-fw pi-book", "pi pi-fw pi-pencil"]} 
            navigate={["/privateArea", "/student"]} /><PrivateArea/>
        </> : <>
            <Menu arr={["איזור אישי"]} 
            icon={["pi pi-fw pi-book"]}
            navigate={["/privateArea"]} 
            /><PrivateArea/>
        </>
        )
        }
        
    </>)

    
};
export default Home