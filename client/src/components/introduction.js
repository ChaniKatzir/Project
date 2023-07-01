import React, { useContext, useEffect, useState } from "react";
import Menu from './menu'
import Context from "./context/Context"
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import Attendace from './attendance';

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
<link rel="stylesheet" href="login.css"></link>
const Introduction = () => {
    const context = useContext(Context);
    const [id,setId]=useState();
    const [status,setStatus]=useState();
    const [send,setSend]=useState();

    return (<>
     
        {context && (

        context.status == 1 ? <>
                <Menu arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן","הגדרות מוסד"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-paperclip","pi pi-cog"]} navigate={["/home", "/account", "/student", "/staff", "/materialManagement","/definitions"]} />
        </> :
        context.status == 2 ? <>
            <Menu arr={["בית", "תלמידים", "איזור אישי", "ניהול תוכן"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-pencil", "pi pi-fw pi-book", "pi pi-paperclip"]} navigate={["/home", "/student", "/privateArea", "/materialManagement"]} />
        </> :
        <>
            <Menu arr={["בית", "איזור אישי"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-book"]} navigate={["/home", "/privateArea"]} />
        </>
        
        )
        
        }
        {send?<>
        <Attendace Id={id} Status={status}></Attendace>
        </>:<>
        <InputNumber  placeholder="הכנס מספר זהות" value={id} onChange={(e) => setId(e.value)}useGrouping={false} /> 
        <InputNumber  placeholder="הכנס סטטוס  " value={status} onChange={(e) => setStatus(e.value)}useGrouping={false} /> 

         { id && status?
            <Button label="חפש" onClick={() => { setSend(true)  }} />
        :<></>}</>
      }


    </>)

    
};
export default Introduction