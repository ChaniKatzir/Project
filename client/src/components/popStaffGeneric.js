import React, { useEffect, useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import Search from './search'
import ButtonG from './buttonGeneric'
import useGet from "../hooks/useGet";

export default function BasicDemo(props) {
    const [visible, setVisible] = useState(false);
    const{ data, loading, error, refetch}=useGet('student');
    useEffect(()=>{console.log('data',data);},[data])
    const arr = ['vdhbgfhj', 'vhjbgfhj'];
    return (
        <div className="card flex justify-content-center">
            <Button label={props.label} icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="הכנס פרטי עובד" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                {arr.map((title) => <Search placeholder={title} />)}
                {/* <Search placeholder="שם פרטי" />
                <Search placeholder="שם משפחה" />
                <Search placeholder="תפקיד" />
                <Search placeholder="שנות ותק" />
                <Search placeholder="מספר טלפון" />
                <Search placeholder="מספר פלאפון" />
                <Search placeholder="קוד מוסד" />
                <Search placeholder="קוד עובד" /> */}
                <ButtonG label="חפש" />
            </Dialog>
        </div>
    )
}