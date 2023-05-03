import React, { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import { Toast } from 'primereact/toast';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';

import { useCrudFunctions } from "../hooks/useCrudFunctions";
import Context from "./context/Context"
import CardA from './card';
import Menu1 from './menu'
import yudatatable from './table';
import SearchLine from './searchLine';
{/* <link rel="stylesheet" href="login.css"></link> */ }

const Account = () => {
  const context = useContext(Context);
  const { putData, getData, deleteData, postData } = useCrudFunctions()
  const navigate = useNavigate();
  const toast = useRef(null);
  const menu1 = useRef(null);
  const menu2 = useRef(null);
  let counter = 1;
  const [chose, setChose] = useState();
  const [tableName, setTableName] = useState();
  const [id, setId] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [draw, setDraw] = useState();
  const [objUser, setObjUser] = useState({})
  const [data, setData] = useState();
  const [person, setPerson] = useState();
  const [mapper, setMapper] = useState();
  const [array, setArray] = useState();

  let perobj;
  const options = { selectableRows: "none", filterTypy: "dropdown" }
  const out = [{
    label: 'פירוט כל ההוצאות',
    command: () => { setChose([0, 1]) }
  },
  {
    label: 'חיפוש לפי קוד הוצאה',
    command: () => { setChose([0, 2]) }
  },
  {
    label: 'חיפוש לפי קוד מוסד',
    command: () => { setChose([0, 3]) }
  },
  {
    label: 'חיפוש לפי תאריך ההוצאה',
    command: () => { setChose([0, 4]) }
  },
  {
    label: 'עדכון הוצאה קיימת',
    command: () => { setChose([0, 5]) }
  },
  {
    label: 'הכנסת הוצאה חדשה',
    command: () => {setChose([0, 6]) }
  },
  {
    label: 'מחיקת הוצאה',
    command: () => { setChose([0, 7]) }
  }
  ];
  const inc = [{
    label: 'פירוט כל ההכנסות',
    command: () => { setChose([1, 1]) }
  },
  {
    label: 'חיפוש לפי קוד הכנסה',
    command: () => { setChose([1, 2]) }
  },
  {
    label: 'חיפוש לפי קוד מוסד',
    command: () => { setChose([1, 3]) }
  },
  {
    label: 'חיפוש לפי תאריך ההפקדה',
    command: () => { setChose([1, 4]) }
  },
  {
    label: 'עדכון הכנסה קיימת',
    command: () => { setChose([1, 5]) }
  },
  {
    label: 'הכנסת הכנסה חדשה',
    command: () => { setChose([1, 6]) }
  },
  {
    label: 'מחיקת הכנסה',
    command: () => { setChose([1, 7]) }
  }
  ];

  const funcGet = async (id) => {
    let res;
    let dat = [];
    let value;
    if (chose[0] == 0) {
      if (id == null) res = await getData(`expends`)
      else res = await getData(`expends/${id}`)
    }
    else if (chose[0] == 1) {
      if (id == null) res = await getData(`income`)
      else res = await getData(`income/${id}`)
    }
    try {
      let x = res.response.status
      let err = res.message;
      toast.current.show({ severity: 'info', summary: 'טעות בהזנת הנתונים', detail: err })
      setChose(null);setDraw(null);setId(null);
    }
    catch {
      if(res.length==0){
      setTableName(null);setData(null);setChose(null);setDraw(null);setId(null);
      toast.current.show({ severity: 'info', summary: 'לא נמצאו פריטים תואמים' })
    }
      if (chose[1] == 5) dat = null; setMapper(1);
      if (chose[1] == 2) {
        value = Object.values(res)
        dat.push(value)
      }
      else {
        for (let index = 0; index < res.length; index++) {
          value = Object.values(res[index])
          dat.push(value)
        }
      }
      setData(dat);
    }
  }

  const updateFunc = async () => {
    if (person) {
      if (chose[0] == 0) {
        if (chose[1] == 5) perobj = await putData(`expends/${id}`, person)
        else if (chose[1] == 6) perobj = await postData(`expends`, person)
      }
      else {
        if (chose[1] == 5) perobj = await putData(`income/${id}`, person)
        else if (chose[1] == 6) perobj = await postData(`income`, person)
      }
      const err = perobj.message;
      toast.current.show({ severity: 'info', summary: 'הפרטים עודכנו בהצלחה', detail: err })
      setMapper(null); setData(null); setChose(null); setDraw(null)
    }
  }

  const deleteFunc = async () => {
    if (chose[0] == 0) perobj = await deleteData(`expends/${id}`, data)
    else if (chose[0] == 1) perobj = await deleteData(`income/${id}`, data)
    const err = perobj.message;
    toast.current.show({ severity: 'info', detail: err })
    setMapper(null); setData(null); setChose(null); setDraw(null)
  }

  useEffect(() => {
    if (chose && chose[0] == 0) {
      setArray([["מספר הוצאה", "סכום", "הגובה", "קוד קבלה", "תאריך", "קוד מוסד"],
      ["id_current_expenditure", "sum", "collector", "recept_number", "date", "id_institute_expends"],
      ["int", "int", "string", "int", "string", "int"], [6]])
      if (chose[1] == 1) {
        setTableName(`פרוט כל ההוצאות`)
        funcGet(null)
      }
      if (chose[1] == 2) {
        setTableName(`פרוט הוצאה מספר ${id}`)
        funcGet(id)
      }
      if (chose[1] == 3) {
        setTableName(`פרוט הוצאות של מוסד ${id}`)
        funcGet(`institute/${id}`)
      }
      if (chose[1] == 4) {
        setTableName(`פרוט הוצאות של מוסד ${id}בשנה ${year}בחודש ${month}`)
        funcGet(`month/${id}/${month}/${year}`)
      }
      if (chose[1] == 5) {
        funcGet(id)
        if (data) setMapper(1)
      }
      if (chose[1] == 6) setMapper(1)
      if (chose[1] == 7) deleteFunc();
    }
    else if (chose && chose[0] == 1) {
      setArray([["מספר ההכנסה", "סכום", "מקור ההכנסה", "תאריך", "קוד מוסד"],
      ["id_income","id_institute_income","origion",  "date", "sum"],
      ["int", "int", "string", "string", "int"], [5]])
      if (chose[1] == 1) {
        setTableName(`פרוט כל ההכנסות`)
        funcGet(null)
      }
      if (chose[1] == 2) {
        setTableName(`פרוט הכנסה מספר ${id}`)
        funcGet(id)
      }
      if (chose[1] == 3) {
        setTableName(`פרוט הכנסות של מוסד ${id}`)
        funcGet(`institute/${id}`)
      }
      if (chose[1] == 4) {
        setTableName(`פרוט הכנסות של מוסד ${id}בשנה ${year}בחודש ${month}`)
        funcGet(`month/${id}/${month}/${year}`)
      }
      if (chose[1] == 5) {
        funcGet(id)
        if (data) setMapper(1)
      }
      if (chose[1] == 6) setMapper(1)
      if (chose[1] == 7) deleteFunc();
    }
  }, [draw]);

  return (<>
    {<>
      <Toast ref={toast} />
      <Menu1 className="card" arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן", "הגדרות מוסד"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-paperclip", "pi pi-cog"]} navigate={["/Home", "/account", "/Student", "/Staff", "/MaterialManagement", "/definitions"]} />
      
      {data ? <>
        <CardA className="card" p={data} title={tableName} length={array[3]}></CardA>
        {/* {yudatatable(data,array[0],options,tableName)} */}
        <Button label="חזרה" onClick={() => (setMapper(null), setDraw(null), setData(null), setChose(null), setMonth(null), setYear(null), setId(null))}></Button>
      </> :
        mapper ? <>
          {array[0].map((column, index) => {
            if (index != 0) return (
              <SearchLine key={counter++} name={column} id={array[1][index]} type={array[2][index]} setObjUser={setPerson} />)
          })}
          <Button label="אישור" id="right" onClick={() => (updateFunc())} />
          <Button label="חזרה" id="left" onClick={() => (counter = 1, setMapper(null), setDraw(null), setData(null), setChose(null), setMonth(null), setYear(null), setId(null))}></Button>
        </> :
          <><div className='card_sides'>
            <Menu model={out} popup ref={menu1} />
            <Button label="הוצאות" icon="pi pi-bars" onClick={(e) => menu1.current.toggle(e)} id="right" />
            <Menu model={inc} popup ref={menu2} />
            <Button label="הכנסות" icon="pi pi-bars" onClick={(e) => menu2.current.toggle(e)} id="left" />
          </div>
            {chose ?
              <div className='card'> {chose[1] == 1 ? <></> :
                chose[1] == 2 ? <InputNumber placeholder="הכנס קוד " value={id} onChange={(e) => setId(e.value)} /> :
                  chose[1] == 3 ? <InputNumber placeholder="הכנס קוד מוסד" value={id} onChange={(e) => setId(e.value)} /> :
                    chose[1] == 4 ? <><InputNumber placeholder="הכנס קוד מוסד " value={id} onChange={(e) => setId(e.value)} />
                      <InputNumber placeholder="הכנס  חודש " value={month} onChange={(e) => setMonth(e.value)} />
                      <InputNumber placeholder="הכנס שנה  " value={year} onChange={(e) => setYear(e.value)} /></> :
                      chose[1] == 5 ? <> <InputNumber placeholder=" הכנס קוד " value={id} onChange={(e) => setId(e.value)} /> </> :
                        chose[1] == 6 ? <></> :
                          chose[1] == 7 ? <InputNumber placeholder="הכנס קוד" value={id} onChange={(e) => setId(e.value)} /> : <></>}
                <Button label="אישור" onClick={() => (setDraw(1))} />
              </div> :
              <div></div>}
          </>
      }</>}</>)
};
export default Account