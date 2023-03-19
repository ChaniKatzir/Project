import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom'; 

export default function BasicDemo() {
    const navigate = useNavigate();
    const items = [
        {label: 'בית', icon: 'pi pi-fw pi-home', command: ()=> { navigate("/Home1") } },
        {label: 'ניהול חשבונות', icon: 'pi pi-fw pi-calendar' ,  },
        {label: 'תלמידים', icon: 'pi pi-fw pi-pencil', command: ()=> { navigate("/Home1/student") } },
        {label: 'צוות', icon: 'pi pi-fw pi-users', command: ()=> { navigate("/Home1/staff") }},
        {label: 'ניהול תוכן', icon: 'pi pi-paperclip'}
    ];

    return (
        <div className="card">
            <TabMenu model={items} />
        </div>
    )
}