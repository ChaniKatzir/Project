import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom'; 


export default function BasicDemo() {
    const navigate = useNavigate();

    const items = [
        {label: 'בית', icon: 'pi pi-fw pi-home', command: ()=> { navigate("/Home3") }},
        {label: 'אזור אישי', icon: 'pi pi-fw pi-book', command: ()=> { navigate("/Home3/PrivateArea")}},
    ];

    return (
        <div className="card">
            <TabMenu model={items} />
        </div>
    )
}