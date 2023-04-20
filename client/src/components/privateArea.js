import React, { useState, createContext, useEffect } from "react";
import Menue from './menu'
import Card from "./card";
import { DataTable } from "./dataTable";
import { Button } from 'primereact/button';
import { useCrudFunctions } from "../hooks/useCrudFunctions";
import { useGetData } from "../hooks/useGetData";


import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
<link rel="stylesheet" href="login.css"></link>

const Area = (props) => {
  const { putData, getData } = useCrudFunctions()

  const id_for_now = 44;
  const status = 3;
  const [person, setPerson] = useState();
  const [p, setP] = useState();
  const [s, setS] = useState();
  let ins;

  const insts = async (x, id) => {
    console.log("personin", person);
    console.log("idins", id);
    const a = await getData(`${x}/${id}`);
    return a;
  }

  const st = async (x, body) => {
    const a = await putData(x, body);
    return a;
  }

  const role = (id) => {
    if (id === 1) return ("מנהל ראשי")
    else if (id === 2) return ("צוות")
    return ("תלמיד")
  }

  const findp = async (x, id) => {
    if (status === 3) {
      let p = await st("student", { "id_person": id_for_now });
      if (p) {
        console.log("p[pppp", p[0]);
        setPerson(p)
      }
      // ins = await insts("institute", person.id_institute_student);///move qqqqqqqq
    }
    else {
      let p = await st("staff", { "id_person": id_for_now });
      if (p) {
        setPerson(p[0])
      }
      // ins = await insts("institute", person.id_institute_staff);
    }
    if (ins) {
      { ins = ins.name; }
    }
    else {
      console.log("no institute");
    }
  }

  useEffect(() => { findp(); console.log("stsart"); }, []);

  useEffect(() => {
    if (person) {
      let per = {
        "מספר זהות:": person["person.id_person"],
        "שם פרטי:": person["person.first_name"],
        "שם משפחה:": person["person.last_name"],
        "כתובת:": person["person.address"],
        "טלפון:": person["person.phone_number"],
        "פלאפון:": person["person.password"],
        "מייל:": person["person.Email"],
        "פרטי בנק:": person["person.bank_account"],
        "סיסמה:": person["person.password"],
        "סטטוס:": person["person.status"]
      }
      setP(per);
      console.log("per", p);
      if (status == 3) {
        let s = {
          "שכר לימוד": person.tuition,
          "שנתון:": person.yearbook,
          // "שם מוסד:": ins.name
        }
        setS(s);
      }
      else {
        let s = {
          "תפקיד:": role(person.id_role),
          "שנות וותק:": person.seniority,
          // "שם מוסד:": ins.name
        }
        setS(s);
      }    
      console.log('person', person);

    } 
  }, [person]);


  return (person?<> {status == 3 ? <><Menue status={props.status} id={props.id} arr={["בית", "איזור אישי"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-book"]} navigate={["/Home", "/PrivateArea"]} />
    <Card p={p} s={s} title={"איזור אישי"} />
    <Button label="לקבלת דווח נוכחות" rounded /></>

    : status == 2 ? <><Menue status={props.status} id={props.id} arr={["בית", "תלמידים", "איזור אישי", "ניהול תוכן"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-pencil", "pi pi-fw pi-book", "pi pi-paperclip"]} navigate={["/Home", "/Student", "/PrivateArea", "/MaterialManagement"]} />
      <Card p={p} s={s} title={"איזור אישי"} />
      <Button label="לקבלת דווח נוכחות" rounded /></>

      : <><Menue status={props.status} id={props.id} arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-paperclip"]} navigate={["/Home", "/AccountManagement", "/Student", "/Staff", "/MaterialManagement"]} />
        <Card p={p} s={s} title={"איזור אישי"} />
        <Button label="לקבלת דווח נוכחות" rounded /></>}</>:<div>syjhkiuiuiou</div>)

};
export default Area