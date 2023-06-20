import React, { useState, useContext, useEffect, useRef } from "react";
import { useCrudFunctions } from "../hooks/useCrudFunctions";
import Context from "./context/Context"
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Calendar } from 'primereact/calendar';
import { Card } from 'primereact/card';
import CardA from './card';
import yudatatable from './table';
import { Toast } from 'primereact/toast';
import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import Table from "./table";
import BasicDemo from "./basicdemo";

<link rel="stylesheet" href="login.css"></link>
const Attendace = (props) => {
  const [UseCalender, setUseCalender] = useState();
  const [names, setNames] = useState();
  const [data, setData] = useState();
  const [date, setDate] = useState();
  const [table, setTable] = useState();
  const [title, setTitle] = useState();
  const [TimeOfAttendance, setTimeOfAttendance] = useState();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Note: Months are zero-indexed, so we add 1 to get the correct month
  const menu1 = useRef(null);
  const toast = useRef(null);
  const { putData, getData } = useCrudFunctions()
  const context = useContext(Context);
  const options = { selectableRows: "none", filterTypy: "dropdown" }
const Id=2
const Status=2
  const out = [{
    label: 'לקבלת דווח נוכחות',
    command: () => { func(`attendance/${Id}`, 1, "נוכחות") }
  },
  {
    label: 'לקבלת הנוכחות האחרונה',
    command: () => { func(`attendance/last/${Id}`, 2, "נוכחות אחרונה") }
  },
  {
    label: 'בחר נוכחות על פי תאריך',
    command: () => { setUseCalender(1) }
  }]
  const func = async (url, tp, ttl) => {
    let res = await getData(url);
    console.log("ressss",res);
    try {
      let x = res.response.status
      let err = res.message;
      toast.current.show({ severity: 'info', summary: 'לא נמצאו פריטים תואמים' })
    }
    catch {
      if (res.length == 0) {
        toast.current.show({ severity: 'info', summary: 'לא נמצאו פריטים תואמים' })
      }
      if (tp == 4 ) {
        setNames(["קוד שכר", "סכום לשעה", "השתתפות בנסיעות", "פנסיה", "מספר זהות"])
      }
      else
        setNames(["קוד נוכחות", "מספר זהות", "תאריך", "שעת כניסה", "שעת יציאה"])
     if(tp!=5  && tp!=6){
        let arr = []
      if (tp == 1) {
        res.forEach(element => {
          arr.push(Object.values(element));
        });
        setTitle(ttl)
        setTable(arr)

      }
      else {
        arr = Object.values(res)
        setTitle(ttl)
        console.log("arr",arr);
        setData(arr)
      }}
      else{
      let arr=[]
        let sum=0
          res.forEach(element => {
            let ent=element["entry_time"];
            let ext=element["exit_time"];
            const [hoursEnt,minutesEnt] = ent.split(':');
            const [hoursExt,minutesExt] = ext.split(':');
           
            const timeNumberEnt = parseInt(hoursEnt) + parseInt(minutesEnt) / 60;
            const timeNumberExt = parseInt(hoursExt) +parseInt( minutesExt) / 60;
            sum =(timeNumberExt-timeNumberEnt)+sum

          })
          console.log(sum,"sum");
          setTimeOfAttendance(sum)
          if(tp==5){
           let res = await getData(`determination/${Id}`);
           let cost= res["cost"];
           cost=parseInt(cost)*parseInt(sum)+parseInt(res["travel_payment"])
           console.log(cost,"cost");
          }
              }
    }
  }
  const allAttendance=async(url)=>{
    let arr = await getData(url);
    const sum=0;
    arr.forEach(element => {
      const time= element["exit_time"]-element["entry_time"]
      sum+=time;
    });
    //לעשות גם עדכון מחיקה והוספה של נוכחות
  }
  const allDetermination=async()=>{
    //לעשות גם עדכון מחיקה והוספה של דרישות שכר
  }

  return (
    <>
      <Toast ref={toast} />
      {table ? <> {yudatatable(table, names, options, title)}
        <Button label="חזרה" rounded onClick={() => (setTable(null), setTitle(null), setNames(null))} />
      </> :
        data ? <>
         <CardA list={names} attend={data} title={title} />
          <Button label="חזרה" rounded onClick={() => (setData(null), setTitle(null), setUseCalender(null), setDate(null), setNames(null))} /></> :
          <>
            {Status == 1 || Status == 2 ? <Button label="לדרישות שכר" rounded onClick={() => { func(`determination/${Id}`, 4, "דרישות שכר") }} /> : <></>}
            {Status == 1 || Status == 2 ? <Button label="למשכורת של החודש האחרון" rounded onClick={() => { func(`attendance/${Id}`, 5, "דרישות שכר") }} /> : <></>}  
            {<Button label="לסיכום נוכחות של החודש האחרון" rounded onClick={() => { func(`attendance/sum/${Id}/${currentYear}/${currentMonth}`, 6, " סיכום נוכחות") }} /> }

            {<><Menu model={out} popup ref={menu1} />
              <Button label="נוכחות" icon="pi pi-bars" onClick={(e) => menu1.current.toggle(e)} />  </>}
            {UseCalender ? <Calendar value={date} onChange={(e) => { setDate(`${e.target.value.getFullYear()}/${e.target.value.toLocaleString("en-US", { month: "2-digit" })}/${e.target.value.toLocaleString("en-US", { day: "2-digit" })}`) }} showButtonBar placeholder="בחר תאריך" /> : <></>}
            {date ? <Button label="אישור" rounded onClick={() => { func(`attendance/calender/${Id}/${date}`, 3, `נוכחות ליום ${date}`) }} /> : <></>}
            {/* <CardA p={props.p} s={S} title={props.title}></CardA> */}
          </>}
    </>)




};
export default Attendace;