import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function BasicDemo() {
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        }
    ];
    const save = () => {
       
    };
    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />
        </div>
    )
}
        