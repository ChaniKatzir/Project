import React, { useRef,useState } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';
import Expendence from './expendence';
export default function BasicDemo() {
    const [chose, setChose] = useState();

    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'הכנסות',
            icon: 'pi pi-refresh',
            command: () => {
                setChose(1)
            }
        },
        {
            label: 'הוצאות',
            icon: 'pi pi-times',
            command: () => {
                setChose(2)

            }
        }
    ];
    const save = () => {
       
    };
    return (
        <div className="card flex justify-content-center">
           {chose==2?<Expendence></Expendence>:
            <><Toast ref={toast}></Toast>
            <SplitButton label="בחר" model={items} /></>
            }
        </div>
    )
}
        