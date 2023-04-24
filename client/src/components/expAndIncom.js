import React from 'react';
import { Button } from 'primereact/button';

export default function RaisedTextDemo(props) {
  return (
    <div className="card flex flex-wrap justify-content-center gap-3">
      {/* {props.lable.map(,) */}
      <Button label=" הכל" text raised />
      <Button label="הוצאה לפי קוד מוסד" severity="secondary" text raised />
      <Button label="על ידי תאריך" severity="success" text raised />
      <Button label="עדכון" severity="info" text raised />
      <Button label="הוצאה חדשה" severity="warning" text raised />
      <Button label="מחיקה" severity="help" text raised />
    </div>
  );}