import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';

export default function BasicDemo() {
    const items = [
        {label: 'בית', icon: 'pi pi-fw pi-home'},
        {label: 'אזור אישי', icon: 'pi pi-fw pi-book'},
    ];

    return (
        <div className="card">
            <TabMenu model={items} />
        </div>
    )
}