import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';

export default function BasicDemo() {
    const items = [
        {label: 'בית', icon: 'pi pi-fw pi-home'},
        {label: 'תלמידים', icon: 'pi pi-fw pi-pencil'},
        {label: 'אזור אישי', icon: 'pi pi-fw pi-book'},
        {label: 'ניהול תוכן', icon: 'pi pi-paperclip'}
    ];

    return (
        <div className="card">
            <TabMenu model={items} />
        </div>
    )
}