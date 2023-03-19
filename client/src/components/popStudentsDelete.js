import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import Search from './search'
import ButtonG from './buttonGeneric'

export default function BasicDemo(props) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Button label={props.label} icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="הכנס קוד תלמיד " visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
               <Search placeholder="קוד תלמיד"/> 
               <ButtonG label="מחיקה"/>
            </Dialog>
        </div>
    )
}