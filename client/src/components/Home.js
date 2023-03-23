import React from "react";
import Menue from './menu'


import Search from './search'

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
<link rel="stylesheet" href="login.css"></link>
const Home1 = (props) => {
    if(props.status=='1')
    return (<>
        <Menue arr={["בית","ניהול חשבונות","תלמידים","צוות","ניהול תוכן"]} icon={["'pi pi-fw pi-home","pi pi-fw pi-calendar","pi pi-fw pi-pencil","pi pi-fw pi-users","pi pi-paperclip"]} />
        <Search placeholder="חיפוש בחומר הלימוד"/>
    </>)
     else if(props.status=='2')
     return(<>

        <Menue arr={["בית","תלמידים","איזור אישי","ניהול תוכן"]} icon={["'pi pi-fw pi-home","pi pi-fw pi-pencil","pi pi-fw pi-book","pi pi-paperclip"]}/>  
        <Search placeholder="חיפוש בחומר הלימוד"/>
        </>)
        else
        return(<>

        <Menue arr={["בית","איזור אישי"]} icon={["'pi pi-fw pi-book"]}/>  
            <Search placeholder="חיפוש בחומר הלימוד"/>
            </>)
};
export default Home1