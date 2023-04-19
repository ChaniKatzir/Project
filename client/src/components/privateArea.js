import React, { useState, createContext } from "react";
import Menue from './menu'
import Card from "./card";
import { Button } from 'primereact/button';
import { getData } from "../hooks/getData";
import { putData } from "../hooks/getData";


import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
<link rel="stylesheet" href="login.css"></link>

const Area = (props) => {
  const id_for_now = 44;
  const status = 3;
  const [check, setCheck] = useState('');
  let person ;
  let data ;
  let title;

  const insts = async (x, id) => {
    const a = await getData(`${x}/${id}`);
    console.log(`this is a ${x} ${id} ${status} `);
    return a;
  }

  const st = async (x, body) => {
    const a = await putData(x, body);
    console.log(`body${body}`);
    console.log(a);
    return a;
  }
  
  const role = (id) => {
    if (id === 1) return ("מנהל ראשי")
    else if (id === 2) return ("צוות")
    return ("תלמיד")
  }

  const findp = async (x, id) => {
    if (status === 3)
      person = await st("student", { "id_person": id_for_now });
    else
      person = await st("staff", { "id_person": id_for_now })
    let ins = await insts("institute", person[0].id_institute_student);
     ins=ins.name;
    title = "פרטים אישיים";
    data = <>
      <p> {`מספר זהות:${person.id_person}`}</p>
      <p>{`שם פרטי:${person.first_name}`} </p>
      <p> {`שם משפחה:${person.last_name}`}</p>
      <p> {`כתובת:${person.address}`}</p>
      <p> {`טלפון:${person.phone_number}`}</p>
      <p>{`פלאפון:${person.password}`}</p>
      <p>{`מייל:${person.Email}`}</p>
      <p>{`פרטי בנק:${person.bank_account}`}</p>
      {status === 3 ? <>
        <p>{`מחזור:${person.yearbook}`}</p>
        <p> { `שם מוסד:${ins.name}`}</p>
        <p>  {`שכר לימוד:${person.tuition}`} </p>
      </> : <>
        <p>  {`תפקיד:${role(person.id_role)}`}</p>
        <p> {`שנות וותק:${person.seniority}`}</p>
        <p>{`שם מוסד:${ins.name}`}</p></>
      }
    </>
    console.log("data",data);
    console.log(ins);

    setCheck(4)
    console.log("loglogg",check);
  }

  return (<>{!check?<>{ findp()}</>
    : <>{status == 3 ? <><Menue status={props.status} id={props.id} arr={["בית", "איזור אישי"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-book"]} navigate={["/Home", "/PrivateArea"]} />
    <Card data={data} title={title} />
    <Button label="לקבלת דווח נוכחות" rounded /></>
    : status == 2 ? <><Menue status={props.status} id={props.id} arr={["בית", "תלמידים", "איזור אישי", "ניהול תוכן"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-pencil", "pi pi-fw pi-book", "pi pi-paperclip"]} navigate={["/Home", "/Student", "/PrivateArea", "/MaterialManagement"]} />
      <Card data={data} title={title} />
      <Button label="לקבלת דווח נוכחות" rounded /></>
      : <><Menue status={props.status} id={props.id} arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-paperclip"]} navigate={["/Home", "/AccountManagement", "/Student", "/Staff", "/MaterialManagement"]} />
        <Card data={data} title={title} />
        <Button label="לקבלת דווח נוכחות" rounded /></>}</>}


  </>)
};
export default Area