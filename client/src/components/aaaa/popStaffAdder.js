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
            <Dialog header="הכנס פרטי עובד חדש" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
               <Search placeholder="שם פרטי"/> 
               <Search placeholder="שם משפחה"/>
               <Search placeholder="כתובת"/> 
               <Search placeholder="מספר טלפון"/> 
               <Search placeholder="מספר פלאפון"/>
               <Search placeholder="כתובת מייל"/>
               <Search placeholder="פרטי חשבון"/>
               <Search placeholder="תפקיד"/> 
               <Search placeholder="ותק"/> 
               <Search placeholder="קוד מוסד"/> 
               <ButtonG label="עדכון"/>
               <ButtonG label="רישום"/>
            </Dialog>
        </div>
    )
}