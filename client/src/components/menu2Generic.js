import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom'; 

export default function BasicDemo() {
    const navigate = useNavigate();
    const items = [
        {label: 'בית', icon: 'pi pi-fw pi-home', command: ()=> { navigate("/Home2") }},
        {label: 'תלמידים', icon: 'pi pi-fw pi-pencil', command: ()=> { navigate("/Home2/student") }},
        {label: 'איזור אישי', icon: 'pi pi-fw pi-book', command: ()=> { navigate("/Home2/PrivateArea")}},
        {label: 'ניהול תוכן', icon: 'pi pi-paperclip', command: ()=> { navigate("/Home2/MaterialManagement") }}
    ];

    return (
        <div className="card">
            <TabMenu model={items} />
        </div>
    )
}
