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
{/* <link rel="stylesheet" href="login.css"></link> */}

const Account = () => {
  const context = useContext(Context);
  const { putData, getData, deleteData, postData } = useCrudFunctions()
  const navigate = useNavigate();
  const toast = useRef(null);
  const menu1 = useRef(null);
  const menu2 = useRef(null);
  // let length;
  let counter = 1;
  const [choseI, setChoseI] = useState();
  const [choseE, setChoseE] = useState();
  const [tableName, setTableName] = useState();
  const [id, setId] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [data, setData] = useState();
  const [draw, setDraw] = useState();
  // const [coulums, setCoulums] = useState();
  // const [english, setEnglish] = useState();
  // const [type, setType] = useState();
  const [objUser, setObjUser] = useState({})
  const [person, setPerson] = useState('');
  const [mapper, setMapper] = useState();
  const [array, setArray] = useState();

  let perobj;
  const options = { selectableRows: "none", filterTypy: "dropdown" }
  const out = [{
    label: 'פירוט כל ההוצאות',
    command: () => { setChoseE(1) }
  },
  {
    label: 'חיפוש לפי קוד הוצאה',
    command: () => { setChoseE(2) }
  },
  {
    label: 'חיפוש לפי קוד מוסד',
    command: () => { setChoseE(3) }
  },
  {
    label: 'חיפוש לפי תאריך ההוצאה',
    command: () => { setChoseE(4) }
  },
  {
    label: 'עדכון הוצאה קיימת',
    command: () => { setChoseE(5) }
  },
  {
    label: 'הכנסת הוצאה חדשה',
    command: () => { setChoseE(6) }
  },
  {
    label: 'מחיקת הוצאה',
    command: () => { setChoseE(7) }
  }
  ];
  const inc = [{
    label: 'פירוט כל ההכנסות',
    command: () => { setChoseI(1) }
  },
  {
    label: 'חיפוש לפי קוד הכנסה',
    command: () => { setChoseI(2) }
  },
  {
    label: 'חיפוש לפי קוד מוסד',
    command: () => { setChoseI(3) }
  },
  {
    label: 'חיפוש לפי תאריך ההפקדה',
    command: () => { setChoseI(4) }
  },
  {
    label: 'עדכון הכנסה קיימת',
    command: () => { setChoseI(5) }
  },
  {
    label: 'הכנסת הכנסה חדשה',
    command: () => { setChoseI(6) }
  },
  {
    label: 'מחיקת הכנסה',
    command: () => { setChoseI(7) }
  }
  ];

  const funcGet = async (id) => {
    let res;
    let dat = [];
    let value;
    if (choseE) {
      if (id == null) res = await getData(`expends`)
      else res = await getData(`expends/${id}`)
      console.log("res",res);
    }
    else if (choseI) {
      if (id == null) res = await getData(`income`)
      else res = await getData(`income/${id}`)
    }
    if (res.response.status!= 200) {
      let err = res.message;
      toast.current.show({ severity: 'info', summary: 'טעות בהזנת הנתונים', detail: err })
    }
    if(choseE||choseI==5)dat=null
    if (choseE == 2 || choseI == 2) {
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

  const updateFunc = async () => {
    if (person) {
      if (choseE == 5) perobj = await putData(`expends/${id}`, person)
      else if (choseE == 6) perobj = await postData(`expends`, person)
      else if (choseI == 5) perobj = await putData(`income/${id}`, person)
      else if (choseI == 6) perobj = await postData(`income`, person)
      const err = perobj.message;
      toast.current.show({ severity: 'info', summary: 'הפרטים עודכנו בהצלחה', detail: err })
      setMapper(null); setData(null); setChoseE(null); setChoseI(null); setDraw(null)
    }
  }

  const deleteFunc = async () => {
    console.log("deleteeeeeee");
    if (choseE) perobj = await deleteData(`expends/${id}`, person)
    else if (choseI) perobj = await deleteData(`income/${id}`, person)
    const err = perobj.message;
      toast.current.show({ severity: 'info', detail: err })
      setMapper(null); setData(null); setChoseE(null); setChoseI(null); setDraw(null)
  }

  useEffect(() => {
    if (choseE) {
      setArray([["מספר הוצאה", "סכום", "הגובה", "קוד קבלה", "תאריך", "קוד מוסד"],
      ["id_current_expenditure", "sum", "collector", "recept_number", "date", "id_institute_expends"],
      ["int", "int", "string", "int", "string", "int"],[6]])
      // setCoulums(["מספר הוצאה", "סכום", "הגובה", "קוד קבלה", "תאריך", "קוד מוסד"])
      // setEnglish(["id_current_expenditure", "sum", "collector", "recept_number", "date", "id_institute_expends",])
      // setType(["int", "int", "string", "int", "string", "int"])
      if (choseE == 1) {
        setTableName(`פרוט כל ההוצאות`)
        funcGet(null)}
      if (choseE == 2) {
        setTableName(`פרוט הוצאה מספר ${id}`)
        funcGet(id)}
      if (choseE == 3) {
        setTableName(`פרוט הוצאות של מוסד ${id}`)
        funcGet(`institute/${id}`)}
      if (choseE == 4) {
        setTableName(`פרוט הוצאות של מוסד ${id}בשנה ${year}בחודש ${month}`)
        funcGet(`month/${id}/${month}/${year}`)}
        if(choseE==5){
          funcGet(`income/${id}`)
        if(data)setMapper(1)}
      if(choseE==6)setMapper(1)
      if(choseE==7)deleteFunc();
    }
    else if (choseI) {
      setArray([["מספר ההכנסה", "סכום", "מקור ההכנסה", "תאריך", "קוד מוסד"],
      ["מספר ההכנסה", "סכום", "מקור ההכנסה", "תאריך", "קוד מוסד"],
      ["id_institute_income", "origion", "date", "sum", "id_income"],[5]])
      // setCoulums(["מספר ההכנסה", "סכום", "מקור ההכנסה", "תאריך", "קוד מוסד"])
      // setEnglish(["id_institute_income", "origion", "date", "sum", "id_income"])
      // setType(["int", "string", "string", "int", "int"])
      if (choseI == 1) {
        setTableName(`פרוט כל ההכנסות`)
        funcGet(null)}
      if (choseI == 2) {
        setTableName(`פרוט הכנסה מספר ${id}`)
        funcGet(id)}
      if (choseI == 3) {
        setTableName(`פרוט הכנסות של מוסד ${id}`)
        funcGet(`institute/${id}`)}
      if (choseI == 4) {
        setTableName(`פרוט הכנסות של מוסד ${id}בשנה ${year}בחודש ${month}`)
        funcGet(`month/${id}/${month}/${year}`)}
      if(choseI==5||choseI==6)setMapper(1)
      if(choseI==7)deleteFunc();
    }
  }, [draw]);

  return (<>
    {<>
      <Toast ref={toast} />
      <Menu1 className="card" arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן", "הגדרות מוסד"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-paperclip", "pi pi-cog"]} navigate={["/Home", "/account", "/Student", "/Staff", "/MaterialManagement", "/definitions"]} />
      {data ? <>
        <CardA className="card" p={data} title={tableName} length={array[3]}></CardA>
        {/* {yudatatable(data,coulums,options,tableName)} */}
        <Button label="חזרה" onClick={() => (setMapper(null), setDraw(null), setData(null), setChoseE(null), setChoseI(null), setMonth(null), setYear(null), setId(null))}></Button>
      </> :
       mapper ? <>
       {array[0].map((column, index) => {
        if (index != 0) return (
            <SearchLine key={counter++} name={column} id={array[1][index]} type={array[2][index]} setObjUser={setPerson} />)
      })}
        <Button label="אישור" id="right" onClick={() => (updateFunc())} />
        <Button label="חזרה" id="left" onClick={() => (counter=1,setMapper(null), setDraw(null), setData(null), setChoseE(null), setChoseI(null), setMonth(null), setYear(null), setId(null))}></Button>
      </> :
        <><div className='card_sides'>
          <Menu model={out} popup ref={menu1} />
          <Button label="הוצאות" icon="pi pi-bars" onClick={(e) => menu1.current.toggle(e)} id="right" />
          <Menu model={inc} popup ref={menu2} />
          <Button label="הכנסות" icon="pi pi-bars" onClick={(e) => menu2.current.toggle(e)} id="left" />
        </div>
          {choseE || choseI ?
            <div className='card'> {choseE == 1 || choseI == 1 ?<></>:
              choseE == 2 || choseI == 2 ? <InputNumber placeholder="הכנס קוד " value={id} onChange={(e) => setId(e.value)} /> :
                choseE == 3 || choseI == 3 ? <InputNumber placeholder="הכנס קוד מוסד" value={id} onChange={(e) => setId(e.value)} /> :
                  choseE == 4 || choseI == 4 ? <><InputNumber placeholder="הכנס קוד מוסד " value={id} onChange={(e) => setId(e.value)} />
                    <InputNumber placeholder="הכנס  חודש " value={month} onChange={(e) => setMonth(e.value)} />
                    <InputNumber placeholder="הכנס שנה  " value={year} onChange={(e) => setYear(e.value)} /></> :
                    choseE == 5 || choseI == 5 ? <> <InputNumber placeholder=" הכנס קוד " value={id} onChange={(e) => setId(e.value)} /> </> :
                      choseE == 6 || choseI == 6 ? <></> :
                        choseE == 7 || choseI == 7 ? <InputNumber placeholder="הכנס קוד" value={id} onChange={(e) => setId(e.value)} /> : <></>}
              <Button label="אישור" onClick={() => (setDraw(1))}  />
            </div> :
            <div></div>}
        </>
      }</>}</>)
};
export default Account