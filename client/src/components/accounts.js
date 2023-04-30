import React, { useContext } from "react";
import Menu from './menu'
import Context from "./context/Context"
import Search from './search'

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import Table from "./table";
import BasicDemo from "./basicdemo";

<link rel="stylesheet" href="login.css"></link>
const Account = () => {
  const context = useContext(Context);

  
    return (<>
        
       {context && ( <>
        <Menu arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן","הגדרות מוסד"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-paperclip","pi pi-cog"]} navigate={["/Home", "/account", "/Student", "/Staff", "/MaterialManagement","/definitions"]} />
        <BasicDemo></BasicDemo></>)
      }
      </>
        )

    

    
};
export default Account