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
            <Dialog header="הכנס פרטי תלמיד" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
               <Search placeholder="שם פרטי"/> 
               <Search placeholder="שם משפחה"/> 
               <Search placeholder="שנתון"/> 
               <Search placeholder="קוד מוסד"/> 
               <Search placeholder="מספר טלפון"/> 
               <Search placeholder="מספר פלאפון"/> 
               <Search placeholder="קוד תלמיד"/> 
               <ButtonG label="חפש"/>
            </Dialog>
        </div>
    )
}