import React from "react";
import { TabMenu } from 'primereact/tabmenu';

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme

import { InputText } from "primereact/inputtext"

const Home3=()=>{

    const items = [
        {label: 'בית', icon: 'pi pi-fw pi-home'},
        {label: 'אזור אישי', icon: 'pi pi-fw pi-book'},

        
    ];
   
    return(<>

    <TabMenu model={items} />  
    
    <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText placeholder="Search" />
    </span>

            
    </>)
};
export default Home3