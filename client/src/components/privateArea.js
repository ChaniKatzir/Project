import React, { useState, useContext, useEffect } from "react";
import Menue from './menu'
import Card from "./card";
import { Button } from 'primereact/button';
import { useCrudFunctions } from "../hooks/useCrudFunctions";
import { useGetData } from "../hooks/useGetData";
import Context from "./context/Context"
import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
<link rel="stylesheet" href="login.css"></link>

const Area = (props) => {
  const context = useContext(Context);
  const { putData, getData } = useCrudFunctions()
  const [person, setPerson] = useState(null);
  const [p, setP] = useState();
  const [s, setS] = useState();
  const [ins, setIns] = useState();
  const [times, setTimes] = useState(0);
  let values,keys,dataP,dataS;
  let x;
  var obj;

  const insts = async (x, id) => {
    if (person) {
      let z;
      if (context.status === 3) {

        z = await getData(`institute/${person["id_institute_student"]}`);
      }
      else {
        let y = person["id_institute_staff"];
        z = await getData(`institute/${y}`);
        console.log(z);
      }
      setIns(z)
    }
  }

  const st = async (x, body) => {
    const a = await putData(x, body);
    return a;
  }

  // const role = (id) => {
  //   if (id === 1) return ("מנהל ראשי")
  //   else if (id === 2) return ("צוות")
  //   return ("תלמיד")
  // }

  const findp = async (x, id) => {
    if (context.status === 3) {
      let p = await st("student", { "id_person": context.id });
      console.log();
      if (p) {
        setPerson(p[0])
      }
    }
    else {
      let p = await st("staff", { "id_person": context.id });
      if (p) {
        setPerson(p[0])
      }
    }
  }

  useEffect(() => { 
if(times==0)  {
  findp() 
}}, []);
 
useEffect(() => {
    if (person) {
      insts();
    }
  }, [person]);

useEffect(()=>{
  if (ins) {
    obj = {
      "שם פרטי:": person["person.first_name"],
      "שם משפחה:": person["person.last_name"],
      "כתובת:": person["person.address"],
      "טלפון:": person["person.phone_number"],
      "פלאפון:": person["person.password"],
      "מייל:": person["person.Email"],
      "פרטי בנק:": person["person.bank_account"],
      "סיסמה:": person["person.password"],
      "סטטוס:": person["person.status_person"]
    }
    console.log("immmmmmmmmm hearrrrrrr");
    setP(obj);
  }
},[ins])
  useEffect(() => {

    if (p) {
      console.log(p,"pppppgggggggggggggggg");

      if (context.status == 3) {
        let s = [
          { "שכר לימוד": person.tuition },
          { "שנתון:": person.yearbook },
          { "שם מוסד:": ins.name }
        ]
        console.log("ssssss", s);
        setS(s);
      }
      else {
        
        let s = [
          { "תפקיד:": "צוות" },
          { "שנות וותק:": person.seniority },
          { "שם מוסד:": ins.name }
        ]
        console.log("ssssss", s);
        setS(s);
      }
    }
  }, [p]);

  return (
    s ? <>{console.log(p,"paaaaaaaaaaaaa")};
   {/* { values=Object.values(p)
      keys=Object.keys(p)

      values.forEach((key, index) =>
      dataP.push(key + " :" + values[index]));
      values=Object.values(s)
      keys=Object.keys(s)
      values.forEach((key, index) =>
        dataS.push(key + " :" + values[index]));} */}
      {
        context.status == 3 ? <><Menue status={props.status} id={props.id} arr={["בית", "איזור אישי"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-book"]} navigate={["/Home", "/PrivateArea"]} />
          <Card p={p} s={s} title={"איזור אישי"} />
          <Button label="לקבלת דווח נוכחות" rounded /></>

          : context.status == 2 ? <><Menue status={props.status} id={props.id} arr={["בית", "תלמידים", "איזור אישי", "ניהול תוכן"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-pencil", "pi pi-fw pi-book", "pi pi-paperclip"]} navigate={["/Home", "/Student", "/PrivateArea", "/MaterialManagement"]} />
            <Card p={p[0]} s={s[0]} title={"איזור אישי"} />
            <Button label="לקבלת דווח נוכחות" rounded /></>

            : <><Menue status={props.status} id={props.id} arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן", "הגדרות מוסד"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-paperclip", "pi-cog"]} navigate={["/Home", "/AccountManagement", "/Student", "/Staff", "/MaterialManagement", "/definitions"]} />
              <Card p={p} s={s} title={"איזור אישי"} />
              <Button label="לקבלת דווח נוכחות" rounded /></>
     } </>
      : <div>no person</div>
  )
};
export default Area