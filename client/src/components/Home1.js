import React from "react";
import { TabMenu } from 'primereact/tabmenu';

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme

const Home1=()=>{

    const items = [
        {label: 'בית', icon: 'pi pi-fw pi-home'},
        {label: 'ניהול חשבונות', icon: 'pi pi-fw pi-calendar'},
        {label: 'תלמידים', icon: 'pi pi-fw pi-pencil'},
        {label: 'צוות', icon: 'pi pi-fw pi-users'},
        {label: 'ניהול תוכן', icon: 'pi pi-paperclip'}
    ];
   
    return(<>

    <TabMenu model={items} />  

    </>)
};
export default Home1