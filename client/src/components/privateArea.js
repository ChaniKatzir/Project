import React, { useState, useContext, useEffect } from "react";
import Menue from './menu'
import Card from "./card";
import AttendacePrivate from "./attendacePrivate";

import { useCrudFunctions } from "../hooks/useCrudFunctions";
import { useGetData } from "../hooks/useGetData";
import Context from "./context/Context"
import { useNavigate } from "react-router-dom";
import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
<link rel="stylesheet" href="login.css"></link>

const PrivateArea = (props) => {
  const context = useContext(Context);
  const { putData, getData } = useCrudFunctions()
  const [person, setPerson] = useState(null);
  const [p, setP] = useState();
  const [s, setS] = useState();
  const [ins, setIns] = useState();
const navigate=useNavigate();
  var obj;

  const insts = async (x, id) => {
    if (person) {
      let z;
      if (context.status === 3) {
        z = await getData(`institute/institute/${person["id_institute_student"]}`);
      }
      else {
        z = await getData(`institute/institute/${person["id_institute_staff"]}`);
      }
      setIns(z)
    }
  }

  const st = async (x, body) => {
    const a = await putData(x, body);
    return a;
  }
  const findp = async () => { 
    let p;
    if (context.status === 3) {
       p = await st("student", { "id_person": context.id });
      if (p) {

        setPerson(p[0])
      }
    }
    else {
       p = await st("staff", { "id_person": context.id });
      if (p) {
        setPerson(p[0])
      }
    }
  }

  useEffect(() => { 
  findp() 
}, []);
 
useEffect(() => {
    if (person) {
      insts();
    }
  }, [person]);

useEffect(()=>{
  if (ins) {
    obj = {
     "שם פרטי": person["person.first_name"],
      "שם משפחה": person["person.last_name"],
      "כתובת": person["person.address"],
      "טלפון": person["person.phone_number"],
      "פלאפון": person["person.password"],
      "מייל": person["person.Email"],
      "סיסמה": person["person.password"],
      "סטטוס": person["person.status_person"],
}
    setP(obj);
  }
},[ins])
  useEffect(() => {

    if (p) {
      if (context.status == 3) {
        let s = {
          "שכר לימוד": person.tuition ,
           "שנתון:": person.yearbook ,
           "שם מוסד:": ins.name 
        }
        setS(s);
      }
      else {

        let s = {
           "תפקיד": "צוות" ,
           "שנות וותק": person.seniority ,
           "שם מוסד": ins.name 
        }
        setS(s);
      }
    }
  }, [p]);

  return (
    s ?  
    <>
{navigate("/Home")}
        <AttendacePrivate  p={p} s={s} title={"איזור אישי"}></AttendacePrivate>
     </>    
      : <></>
  )
};
export default PrivateArea