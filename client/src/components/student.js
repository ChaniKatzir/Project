import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import Menu from "./menu";
<link rel="stylesheet" href="login.css"></link>
 
 const Student = (props) => {
    return(<> 
    {
        props.status==1?<> 
            <Menu status={props.status} id={props.id}
             arr={["בית","ניהול חשבונות","תלמידים","צוות","ניהול תוכן"]} 
             icon={["pi pi-fw pi-home","pi pi-fw pi-calendar","pi pi-fw pi-pencil","pi pi-fw pi-users","pi pi-paperclip"]} 
             navigate={["/Home","/AccountManagement","/Student","/Staff","/MaterialManagement"]} />
            
        </>:
        <>
            {console.log("yes")}
            <Menu status={props.status} id={props.id} 
            arr={["בית","תלמידים","איזור אישי","ניהול תוכן"]} 
            icon={["pi pi-fw pi-home","pi pi-fw pi-pencil","pi pi-fw pi-book","pi pi-paperclip"]} 
            navigate={["/Home","/Student","/PrivateArea","/MaterialManagement"]}/>  
            </>
    }
    </>)}
    export default Student;