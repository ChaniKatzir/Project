import React, { useContext } from "react";
import Menu from './menu'
import Context from "./context/Context"
import Search from './search'

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
<link rel="stylesheet" href="login.css"></link>
const Definitions = () => {
    const context = useContext(Context);
    console.log(context);
    return (<>
        {context && (
         <>
         
                {/* <Menu arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן",,"הגדרות מוסד"]} 
                icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users","pi pi-cog"]}
                navigate={["/Home", "/AccountManagement", "/Student", "/Staff", "/MaterialManagement","/definitions"]} />
                <Search placeholder="חיפוש בחומר הלימוד" /> */}
        </>)
        }
    </>)

    
};
export default Definitions