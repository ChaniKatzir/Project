import React, { useContext } from "react";
import Menu from './menu'
import Context from "./context/Context"
import Search from './search'

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
<link rel="stylesheet" href="login.css"></link>
const Home = () => {
    const context = useContext(Context);
    return (<>
        {context && (
        context.status == 1 ? <>,
                <Menu arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן","הגדרות מוסד"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-paperclip","pi pi-cog"]} navigate={["/home", "/account", "/student", "/staff", "/materialManagement","/definitions"]} />
                <Search placeholder="חיפוש בחומר הלימוד" />
        </> :
        context.status == 2 ? <>
            <Menu arr={["בית", "תלמידים", "איזור אישי", "ניהול תוכן"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-pencil", "pi pi-fw pi-book", "pi pi-paperclip"]} navigate={["/home", "/student", "/privateArea", "/materialManagement"]} />
            <Search placeholder="חיפוש בחומר הלימוד" />
        </> :
        <>
            <Menu arr={["בית", "איזור אישי"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-book"]} navigate={["/home", "/privateArea"]} />
            <Search placeholder="חיפוש בחומר הלימוד" />
        </>)
        }
    </>)

    
};
export default Home