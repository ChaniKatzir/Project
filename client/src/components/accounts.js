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
  const [data, setData] = useState();
  const [person, setPerson] = useState();
  const [mapper, setMapper] = useState();
  const [array, setArray] = useState();
  const [once, setOnce] = useState();

  let incomeColumns = [{
    name: "id_current_expenditure",
    label: "מספר הוצאה",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "sum",
    label: "סכום",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "collector",
    label: "שם הגובה",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "recept_number",
    label: "מספר קבלה",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "date",
    label: "תאריך",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "id_institute_expends",
    label: "קוד מוסד",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "",
    label: "",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta) => {
        return <><i className="pi pi-trash" style={{ fontSize: '2rem' }} onClick={() => { deleteFunc(data[tableMeta.rowIndex]) }} ></i>
        </>
      },
    },
  },
  ]
  let expendsdColumns = [{
    name: "id_income",
    label: "מספר הכנסה",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "id_institute_income",
    label: "קוד מוסד",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "date",
    label: "תאריך",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "origion",
    label: "מקור ההכנסה",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "sum",
    label: "סכום",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "id_institute_expends",
    label: "קוד מוסד",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "",
    label: "",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta) => {
        return <><i className="pi pi-trash" style={{ fontSize: '2rem' }} onClick={() => { deleteFunc(data[tableMeta.rowIndex]) }} ></i>
        </>
      },
    },
  },
  ]
  let perobj;
  const options = { selectableRows: "none", filterTypy: "dropdown" }
  const out = [{
    label: 'פירוט כל ההוצאות',
    icon: 'pi pi-qrcode',
    command: () => { setChose([0, 1]) }
  },
  
  {
    label: 'חיפוש לפי קוד הוצאה',
      icon: 'pi pi-search',
    command: () => { setChose([0, 2]) }
  },
  {
    label: 'חיפוש לפי קוד מוסד',
      icon: 'pi pi-search',

    command: () => { setChose([0, 3]) }
  },
  {
    label: 'חיפוש לפי תאריך ההוצאה',

    command: () => { setChose([0, 4]) }
  },
  {
    label: 'עדכון הוצאה קיימת',
      icon: 'pi pi-replay',
    command: () => { setChose([0, 5]) }
  },
  {
    label: 'הכנסת הוצאה חדשה',
      icon: 'pi pi-sign-in',
    command: () => { setChose([0, 6]) }
  }
  ];
  const inc = [{
    label: 'פירוט כל ההכנסות',
      icon: 'pi pi-qrcode',

    command: () => { setChose([1, 1]) }
  },
  {
    label: 'חיפוש לפי קוד הכנסה',
      icon: 'pi pi-search',

    command: () => { setChose([1, 2]) }
  },
  {
    label: 'חיפוש לפי קוד מוסד',
      icon: 'pi pi-search',

    command: () => { setChose([1, 3]) }
  },
  {
    label: 'חיפוש לפי תאריך ההפקדה',
    command: () => { setChose([1, 4]) }
  },
  {
    label: 'עדכון הכנסה קיימת',
      icon: 'pi pi-replay',

    command: () => { setChose([1, 5]) }
  },
  {
    label: 'הכנסת הכנסה חדשה',
      icon: 'pi pi-sign-in',

    command: () => {setChose([1, 6])} 
    
    
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
      setOnce(null);setMapper(null); setDraw(null); setData(null); setChose(null); setMonth(null);setYear(null); setId(null)
    }
    catch {
      if (res.length == 0) {
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
      setOnce(null);setMapper(null); setDraw(null); setData(null); setChose(null); setMonth(null);setYear(null); setId(null)
    }
  }

  const deleteFunc = async (arr) => {
    if (chose[0] == 0)
      perobj = await deleteData(`expends/${arr[0]}`)
    else if (chose[0] == 1) perobj = await deleteData(`income/${arr[0]}`)
    const err = perobj.message;
    toast.current.show({ severity: 'info', detail: err })
    setOnce(null);setMapper(null); setDraw(null); setData(null); setChose(null); setMonth(null);setYear(null); setId(null)
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
          if (data) {           
            setMapper(1)}
      }
      if (chose[1] == 6) {
        setMapper(1)
      }
    
        }
    else if (chose && chose[0] == 1) {
      setArray([["מספר הכנסה", "סכום", "תאריך", "מקור ",  "קוד מוסד"],
      ["id_income", "sum", "date", "origion", "id_institute_income"],
      ["int", "int", "string", "string", "int"], [6]])
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
      if (chose[1] == 6){
        setMapper(1)
      } 
    }
  }, [draw]);

  return (<>
    {<>
      <Toast ref={toast} />
      <Menu1 className="card" arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן", "הגדרות מוסד"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-paperclip", "pi pi-cog"]} navigate={["/Home", "/account", "/Student", "/Staff", "/MaterialManagement", "/definitions"]} />
      <div className='card_sides'>
            <Menu model={out} popup ref={menu1} />
            <Button label="הוצאות" icon="pi pi-bars" onClick={(e) => menu1.current.toggle(e)} id="right" />
            <Menu model={inc} popup ref={menu2} />
            <Button label="הכנסות" icon="pi pi-bars" onClick={(e) => menu2.current.toggle(e)} id="left" />
          </div>
      {data ? <>
        {chose[0] ?
          <>{yudatatable(data, expendsdColumns, options, tableName)}</>
          :
          <>{yudatatable(data, incomeColumns, options, tableName)}</>
        }
        <Button label="חזרה" onClick={() => (setOnce(null),setMapper(null), setDraw(null), setData(null), setChose(null), setMonth(null), setYear(null), setId(null))}></Button>
      </> :
        mapper ? <div class="card">
          {
          
          array[0].map((column, index) => {
            if (index != 0) return (
              <SearchLine key={counter++} name={column} id={array[1][index]} type={array[2][index]} setObjUser={setPerson} />)
          })
          }

          <Button label="אישור" id="right" onClick={() => (updateFunc(),setOnce(null),setMapper(null), setDraw(null), setData(null), setChose(null), setMonth(null), setYear(null), setId(null))} />
        <Button label="חזרה" onClick={() => (setOnce(null),setMapper(null), setDraw(null), setData(null), setChose(null), setMonth(null), setYear(null), setId(null))}></Button>

          {/* <Button label="חזרה" id="left" onClick={() => (counter = 1, setMapper(null), setDraw(null), setData(null), setChose(null), setMonth(null), setYear(null), setId(null))}></Button> */}
        </div> :
          <>
            {chose && once==null?
              <div className='card'> {chose[1] == 1 ? <></> :
                chose[1] == 2 ? <InputNumber placeholder="הכנס קוד " value={id} onChange={(e) => setId(e.value)} useGrouping={false} min={1} /> :
                  chose[1] == 3 ? <InputNumber placeholder="הכנס קוד מוסד" value={id} onChange={(e) => setId(e.value)} useGrouping={false} /> :
                    chose[1] == 4 ? <><InputNumber placeholder="הכנס קוד מוסד " value={id} onChange={(e) => setId(e.value)} useGrouping={false} />
                      <InputNumber placeholder="הכנס  חודש " value={month} onChange={(e) => setMonth(e.value)} useGrouping={false} />
                      <InputNumber placeholder="הכנס שנה  " value={year} onChange={(e) => setYear(e.value)} useGrouping={false} /></> :
                      chose[1] == 5 ? <> <InputNumber placeholder=" הכנס קוד " value={id} onChange={(e) => setId(e.value)} useGrouping={false} /> </> :
                        chose[1] == 6 ? <>{}
                        </> : <></>}
              {chose[1]!=1&&chose[1]!=6? <Button label="אישור" onClick={() => (setDraw(1))} />:<>{setOnce(1)}{setDraw(1)}</>}
              </div> :
              <div></div>}
          </>
      }</>}</>)
};
export default Account