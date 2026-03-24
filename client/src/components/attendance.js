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
<<<<<<< HEAD
import { Dialog } from 'primereact/dialog';
=======
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617

<link rel="stylesheet" href="login.css"></link>
const Attendace = (props) => {
  const [UseCalender, setUseCalender] = useState();
  const [names, setNames] = useState();
  const [data, setData] = useState();
  const [date, setDate] = useState();
  const [table, setTable] = useState();
<<<<<<< HEAD
  const [card, setCard] = useState();
=======
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
  const [title, setTitle] = useState();
  const [totalTimeHoures, setTotalTimeHoures] = useState();
  const [totalTimeMinutes, setTotalTimeMinutes] = useState();
  const [totalSalary, setTotalSalary] = useState();
  const [visible, setVisible] = useState(false);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
<<<<<<< HEAD
  const currentMonth = currentDate.getMonth(); // Note: Months are zero-indexed, so we add 1 to get the correct month
=======
  const currentMonth = currentDate.getMonth() + 1; // Note: Months are zero-indexed, so we add 1 to get the correct month
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
  const menu1 = useRef(null);
  const menu2 = useRef(null);
  const toast = useRef(null);
  const { putData, getData } = useCrudFunctions()
  const context = useContext(Context);
  const options = { selectableRows: "none", filterTypy: "dropdown" }
 
  const outSalary = [
    {
      label: 'למשכורת של החודש האחרון',
      command: () => { func(`attendance/sum/${props.Id}/${currentYear}/${currentMonth}`, 5, "דרישות שכר") }
    },
    {
      label: 'לדרישות שכר',
      command: () => { func(`determination/${props.Id}`, 4, "דרישות שכר") }
    }
  ]
<<<<<<< HEAD
  console.log("curm",currentMonth)
=======
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617

  const outAttendance = [
    {
      label: 'לסיכום נוכחות של החודש האחרון',
      command: () => { func(`attendance/sum/${props.Id}/${currentYear}/${currentMonth}`, 6, " סיכום נוכחות") }
    }, {
      label: 'לקבלת דווח נוכחות',
<<<<<<< HEAD
      command: () => { func(`attendance/${props.Id}`, 1, "נוכחות") }
=======
      command: () => { func(`attendance/last/${props.Id}`, 1, "נוכחות") }
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
    },
    {
      label: 'לקבלת הנוכחות האחרונה',
      command: () => { func(`attendance/last/${props.Id}`, 2, "נוכחות אחרונה") }
<<<<<<< HEAD
    }
  ]
  const func = async (url, tp, ttl) => {
    console.log(url, tp, ttl);
    let res = await getData(url);
    console.log(res);
=======
    },
    {
      label: 'בחר נוכחות על פי תאריך',
      command: () => { setUseCalender(1) }
    }
  ]
  const func = async (url, tp, ttl) => {
    let res = await getData(url);
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
    try {
      let x = res.response.status
      let err = res.message;
      toast.current.show({ severity: 'info', summary: 'לא נמצאו פריטים תואמים' })
    }
    catch {
<<<<<<< HEAD
      console.log("catch");

      if (res.length == 0) {
      console.log("0");

        toast.current.show({ severity: 'info', summary: 'לא נמצאו פריטים תואמים' })
      }
      if (tp == 4) {
      console.log("4");

=======
      if (res.length == 0) {
        toast.current.show({ severity: 'info', summary: 'לא נמצאו פריטים תואמים' })
      }
      if (tp == 4) {
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
        setNames(["קוד שכר", "סכום לשעה", "השתתפות בנסיעות", "פנסיה", "מספר זהות"])
      }
      else
        setNames(["קוד נוכחות", "מספר זהות", "תאריך", "שעת כניסה", "שעת יציאה"])
      if (tp != 5 && tp != 6) {
<<<<<<< HEAD
      console.log("56");

=======
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
        let arr = []
        if (tp == 1) {
          res.forEach(element => {
            arr.push(Object.values(element));
          });
          setTitle(ttl)
          setTable(arr)
        }
        else {
<<<<<<< HEAD
         if(tp==2||tp==4){
          arr = Object.values(res)
            setCard(arr);
         }
         else{
          arr = Object.values(res)
          setTitle(ttl)
          setTable(arr)}
=======
          arr = Object.values(res)
          setTitle(ttl)
          setTable(arr)
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
        }
      }
      //בשביל card
      // else {
      //   arr = Object.values(res)
      //   setTitle(ttl)
      //   setData(arr)
      // }

      else {
<<<<<<< HEAD
      console.log("else");

        let arr = []
        let sum = 0
        let sumHours=0;
        let sumMinutes=0;
=======
        let arr = []
        let sum = 0
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
        res.forEach(element => {
          let ent = element["entry_time"];
          let ext = element["exit_time"];
          const [hoursEnt, minutesEnt] = ent.split(':');
          const [hoursExt, minutesExt] = ext.split(':');
<<<<<<< HEAD
          const timeNumberEnt = parseInt(hoursEnt) + parseInt(minutesEnt) /100;
          const timeNumberExt = parseInt(hoursExt) + parseInt(minutesExt)/100 ;
          sumHours=sumHours+(parseInt(hoursExt)-parseInt(hoursEnt) )
          sumMinutes=sumMinutes+((parseInt(minutesExt) /100)-(parseInt(minutesEnt)/100))

          if(sumMinutes>=0.6)
          {
            let i=0;
            sumMinutes=sumMinutes-0.6;
            sumHours=sumHours+1;

          }
          sum = `${sumHours}:${sumMinutes.toFixed(2)}`
=======

          const timeNumberEnt = parseInt(hoursEnt) + parseInt(minutesEnt) / 60;
          const timeNumberExt = parseInt(hoursExt) + parseInt(minutesExt) / 60;
          sum = (timeNumberExt - timeNumberEnt) + sum
          console.log("sum",sum);
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
        })
        if (tp == 5) {
          let res = await getData(`determination/${props.Id}`);
          let cost = res["cost"];
<<<<<<< HEAD
          cost = parseInt(cost) * (sumHours+(sumMinutes/0.6)) + parseInt(res["travel_payment"]);
          setTotalSalary("₪"+" "+cost)
        }
        // console.log(`${parseInt(sum)}:${sum.toString().split('.')[1]}`);
        setTotalTimeHoures(parseInt(sum))
        setTotalTimeMinutes((sum.toString().split('.')[1]))
        
=======
          cost = parseInt(cost) * parseInt(sum) + parseInt(res["travel_payment"])
          setTotalSalary('ש"ח' + cost)
        }
        console.log(`${parseInt(sum)}:${sum.toString().split('.')[1]}`);
        setTotalTimeHoures(parseInt(sum))
        setTotalTimeMinutes((sum.toString().split('.')[1]).toFixed(2))
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
        setVisible(true) 
      }
    }
  }

<<<<<<< HEAD
  
=======

>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
  //   let arr = await getData(url);
  //   const sum = 0;
  //   arr.forEach(element => {
  //     const time = element["exit_time"] - element["entry_time"]
  //     sum += time;
  //   });
  // }

<<<<<<< HEAD
  
=======
  const allAttendance = async (url) => {
    //לעשות גם עדכון מחיקה  של נוכחות

  }
  const allDetermination = async () => {
    //לעשות גם עדכון  של דרישות שכר

  }
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617

  return (
    <>
      <Toast ref={toast} />
      {table ? <> {yudatatable(table, names, options, title)}
       <Button label="חזרה" rounded onClick={() => (setTable(null), setTitle(null), setNames(null),setUseCalender(null),setDate(null))} />
      </> :
<<<<<<< HEAD
      card?<>
      <CardA  list={names} attend={card} title={title}>   </CardA>
      <Button label="חזרה" rounded onClick={() => (setCard(null), setTitle(null), setNames(null),setUseCalender(null),setDate(null))} />
      </>:
      totalSalary&&visible==true?<>
      <Dialog visible={visible} onHide={() => (setVisible(false),setTotalSalary(null),setTotalTimeHoures(null),setTotalTimeMinutes(null))} 
                header=":סך המשכורות לחודש זה הוא" 
                > 
               {totalSalary}  </Dialog>
      </>:
      totalTimeHoures&&visible?<>
          <Dialog visible={visible} onHide={() => (setVisible(false),setTotalSalary(null),setTotalTimeHoures(null),setTotalTimeMinutes(null))} 
                header=":סך השעות הוא"   > 
              {totalTimeMinutes?<>{`${totalTimeHoures} :${totalTimeMinutes}`}</>:<>{`${totalTimeHoures} `}</>}  </Dialog>
=======
      totalSalary&&visible==true?<>
      <ConfirmDialog visible={visible} onHide={() => (setVisible(false),setTotalSalary(null),setTotalTimeHoures(null),setTotalTimeMinutes(null))} message={totalSalary}
                header=":סך המשכורות לחודש זה הוא"  />
      </>:
      totalTimeHoures&&totalTimeMinutes&&visible?<>
          <ConfirmDialog visible={visible} onHide={() => (setVisible(false),setTotalSalary(null),setTotalTimeHoures(null),setTotalTimeMinutes(null))} message={`${totalTimeHoures} :${totalTimeMinutes}`}
                header=":סך השעות הוא"  />
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
      </>:
        <>
          <br></br>
          <br></br>
          <br></br>

          <br></br>
          <br></br>
          <br></br>


          {<><Menu model={outAttendance} popup ref={menu1} />
<<<<<<< HEAD
            <Button label="נוכחות" icon="pi pi-bars" onClick={(e) => menu1.current.toggle(e)} id="right" style={{marginRight: '50px' } }/>
=======
            <Button label="נוכחות" icon="pi pi-bars" onClick={(e) => menu1.current.toggle(e)} id="right"/>
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
            {props.Status == 1 || props.Status == 2 ? <><Menu model={outSalary} popup ref={menu2} />
              <Button label="נתוני שכר" icon="pi pi-bars" onClick={(e) => menu2.current.toggle(e)} id="left"/> </> : <></>}
          </>}
          {UseCalender ? <Calendar value={date} onChange={(e) => { setDate(`${e.target.value.getFullYear()}/${e.target.value.toLocaleString("en-US", { month: "2-digit" })}/${e.target.value.toLocaleString("en-US", { day: "2-digit" })}`) }} showButtonBar placeholder="בחר תאריך" /> : <></>}
          {date ? <Button label="אישור" rounded onClick={() => { func(`attendance/calender/${props.Id}/${date}`, 3, `נוכחות ליום ${date}`) }} /> : <></>}
          {/* <CardA p={props.p} s={S} title={props.title}></CardA> */}
        </>}
    </>)




};
<<<<<<< HEAD
export default Attendace;




=======
export default Attendace;
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
