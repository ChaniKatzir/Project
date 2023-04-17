import React from "react";
import Menu from './menu'



import Search from './search'

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
<link rel="stylesheet" href="login.css"></link>
const Home = (props) => {
    return(<> 
    {
        props.status==1?<> 
            <Menu status={props.status} id={props.id} arr={["בית","ניהול חשבונות","תלמידים","צוות","ניהול תוכן"]} icon={["pi pi-fw pi-home","pi pi-fw pi-calendar","pi pi-fw pi-pencil","pi pi-fw pi-users","pi pi-paperclip"]} navigate={["/Home","/AccountManagement","/Student","/Staff","/MaterialManagement"]} />
            <Search placeholder="חיפוש בחומר הלימוד"/>
        </>:
        props.status==2?<>
            {console.log("yes")}
            <Menu status={props.status} id={props.id} arr={["בית","תלמידים","איזור אישי","ניהול תוכן"]} icon={["pi pi-fw pi-home","pi pi-fw pi-pencil","pi pi-fw pi-book","pi pi-paperclip"]} navigate={["/Home","/Student","/PrivateArea","/MaterialManagement"]}/>  
            <Search placeholder="חיפוש בחומר הלימוד"/>
            </>:
            <>
            <Menu status={props.status} id={props.id} arr={["בית","איזור אישי"]} icon={["pi pi-fw pi-home","pi pi-fw pi-book"]} navigate={["/Home","/PrivateArea"]}/>  
            <Search placeholder="חיפוש בחומר הלימוד"/>
            </>
    }
    </>)
   
    // if(props.status==1)
    // return (<>
    //     <Menue arr={["בית","ניהול חשבונות","תלמידים","צוות","ניהול תוכן"]} icon={["'pi pi-fw pi-home","pi pi-fw pi-calendar","pi pi-fw pi-pencil","pi pi-fw pi-users","pi pi-paperclip"]} />
    //     <Search placeholder="חיפוש בחומר הלימוד"/>
    // </>)
    //  else if(props.status==2)
    //  return(<>

    //     <Menue arr={["בית","תלמידים","איזור אישי","ניהול תוכן"]} icon={["'pi pi-fw pi-home","pi pi-fw pi-pencil","pi pi-fw pi-book","pi pi-paperclip"]}/>  
    //     <Search placeholder="חיפוש בחומר הלימוד"/>
    //     </>)
    //     else
    //     return(<>

    //     <Menue arr={["בית","איזור אישי"]} icon={["'pi pi-fw pi-book"]}/>  
    //         <Search placeholder="חיפוש בחומר הלימוד"/>
    //         </>)
};
export default Home