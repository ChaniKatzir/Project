import React, { useEffect, useState, useContext, useRef } from "react";
import Context from "./context/Context";
import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import Menu from "./menu";
import { Button } from "primereact/button";
import { useCrudFunctions } from "../hooks/useCrudFunctions";
import SearchLine from "./searchLine";
import { Toast } from 'primereact/toast';
import yudatatable from './table';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import Attendace from "./attendance";
import Home from "./Home";

<link rel="stylesheet" href="login.css"></link>

const Staff = () => {
  const { putData, deleteData, postData } = useCrudFunctions();
  // const [data, setData] = useState()
  const [dataf, setDataf] = useState([1, 2])
  // const [tableName, setTableName] = useState();
  const [btn, setBtn] = useState(0);
  const [id, setId] = useState();
  const [person, setPerson] = useState();
  const [click, setClick] = useState();
  const [confirm, setConfirm] = useState(null);
  const [idPerson, setIdPerson] = useState(null);

  const toast = useRef(null);
  const context = useContext(Context);
  let perobj;
  const tableName="פרטי אנשי הצוות";
  const options = { selectableRows: "none", filterTypy: "dropdown" }
  let counter = 1;
  // const serch = [["מספר זהות", "שם פרטי", "שם משפחה", "מספר טלפון", "מספר פלאפון", "וותק", "תפקיד", "קוד מוסד"]
  //   , ["id_person", "first_name", "last_name", "phone_number", "celphone_number", "seniority", "id_role", "id_institute_staff"]
  //   , ["int", "string", "string", "int", "int", "int", "int", "int"]]
  const create = [["מספר זהות", "שם פרטי", "שם משפחה", "כתובת מגורים", "מספר טלפון", "מספר פלאפון", "כתובת מייל", "קוד מוסד", "קוד כניסה למערכת", "מספר בנק", "מספר סניף", "מספר חשבון", "וותק", "תפקיד"],
  ["id_person", "first_name", "last_name", "address", "phone_number", "celphone_number", "Email", "id_institute_staff", "password", "id_bank", "id_branch", "num", "seniority", "id_role"],
  ["int", "string", "string", "string", "int", "int", "string", "int", "int", "int", "int", "int", "int", "int"]]

  let staffColumns = [
    {
      name: "לחץ למחיקה",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return <><i className='pi pi-trash' onClick={() => confirm1( deletefunc,dataf[tableMeta.rowIndex], "בוטל", "מחיקת רשומה", '?לאחר הלחיצה על "אישור", לא יהיה ניתן לשחזר את הרשומה. האם למחוק', 'מחיקת רשומה',2)} />
           </>
        }}
    },
    {
      name: "לחץ לעריכה",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return <> <i className="pi pi-user-edit" onClick={() => {confirm1( putfunc,dataf[tableMeta.rowIndex], "בוטל", "עדכון רשומה", <><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />{
            create[0].map((name, index) => {console.log(dataf[tableMeta.rowIndex][3]);setIdPerson(dataf[tableMeta.rowIndex][3]); return (<SearchLine key={counter++} name={name} id={create[1][index]} placeHolder={dataf[tableMeta.rowIndex][index+3]} type={create[2][index]} setObjUser={setPerson} />)
        })}</>,3)}}/>
            </>
        }}
    },
    {
      name: "לחץ לפרוט",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return <> <i className="pi pi-user" onClick={()=>(setConfirm(dataf[tableMeta.rowIndex]))}/>
          </>
        }}
    },
    {
      name: "id_person",
      label: "מספר זהות",
      options: {
        filter: true,
        sort: true,
      }},
    {
      name: "first_name",
      label: "שם פרטי",
      options: {
        filter: true,
        sort: true,
      }},
    {
      name: "last_name",
      label: "שם משפחה",
      options: {
        filter: true,
        sort: true,
      }},
    {
      name: "address",
      label: "כתובת מגורים",
      options: {
        filter: true,
        sort: true,
      }},
    {
      name: "phone_number",
      label: "מספר טלפון",
      options: {
        filter: true,
        sort: true,
      }},
    {
      name: "celphone_number",
      label: "מספר פלאפון",
      options: {
        filter: true,
        sort: true,
      }},
    {
      name: "Email",
      label: "כתובת מייל",
      options: {
        filter: true,
        sort: true,
      }},
    {
      name: "id_institute_student",
      label: "קוד מוסד",
      options: {
        filter: true,
        sort: true,
      }},
    {
      name: "password",
      label: "סיסמה ",
      options: {
        filter: true,
        sort: false,
      }},
    {
      name: "id_bank",
      label: "מספר בנק",
      options: {
        filter: true,
        sort: true,
      }},
    {
      name: "id_branch",
      label: "מספר סניף",
      options: {
        filter: true,
        sort: false,
      }},
    {
      name: "num",
      label: "מספר חשבון",
      options: {
        filter: true,
        sort: false,
      }},
    {
      name: "id_role",
      label: "קוד תפקיד ",
      options: {
        filter: true,
        sort: true,
      }},
    {
      name: "seniority",
      label: "וותק",
      options: {
        filter: true,
        sort: true,
      }},
    ]

  const reject = (type) => {
    toast.current.show({ severity: 'warn', summary: type, detail: 'אין שינוי ברשומות', life: 3000 });
  }

  const confirm1 = (func, arr, type2, hd, msg, num) => {
    setBtn(null);
    confirmDialog({
      message: msg,
      header: hd,
      // icon: 'pi pi-exclamation-triangle',
      accept: () => {setClick(num);func(arr)},
      reject: () => {reject(type2)}
    });
  };

  const postfunc = async () => {
    if (person&&click==1) {
      let err;
      perobj = await postData(`staff`, person)
      try {
        err = perobj.response.data.message;
        toast.current.show({ severity: 'warn', summary: `Error`, detail: err, life: 3000 });
      }
      catch {
        toast.current.show({ severity: 'success', summary: 'הפרטים עודכנו בהצלחה', detail: err, life: 3000 })
      }
      setBtn(null); setId(null);setPerson(null); setClick(null); perobj=null;
    }
    first()
  }

  const putfunc = async () => {
    console.log("person", person,click);
    if (person&&click==3) {
      let err;
      console.log("perobj",perobj);
      perobj = await putData(`staff/${idPerson}`, person)
      try {
        err = perobj.response.data.message;
        toast.current.show({ severity: 'warn', summary: `Error`, detail: err, life: 3000 });
      }
      catch {
        toast.current.show({ severity: 'success', summary: 'הפרטים עודכנו בהצלחה', detail: err, life: 3000 })
      }
      setBtn(null); setId(null);setPerson(null); setClick(null); perobj=null;
    }
    first()
  }

  const deletefunc = async (arr) => {
    perobj = await deleteData(`staff/${arr[3]}`)
    toast.current.show({ severity: 'success', summary: `!רשומה נמחקה בהצלחה`, detail: "הפרטים נקלטו במערכת", life: 3000 });
    setBtn(null); setId(null); perobj=null;
    first()
  }

  const first = async () => {
    if (dataf) {
      let dat = [];
      let x = await putData('staff')
      for (let index = 0; index < x.length; index++) {
        let values = Object.values(x[index]);
        let arr = []
        for (let i = 0; i <3; i++) {
          arr.push(0);
        }
        Object.keys(x[index]).forEach((element, i) => {
          if (i > 3 && element !== 'staff.id_staff' && element !== 'id_person_staff' && element !== 'person.status' && element !== "person.bank_account" && element !== "person.bank.id_b")
            (        
               arr.push(values[i])
            )
        })
        for (let j = 0; j < 3; j++) {
          if(j!=0)
          arr.push(values[j]);
        }
        dat.push(arr)
      }
      setDataf(dat)
    }
  }

  useEffect(() => {
    first()
  }, []);

  useEffect(() => {
    if (click==1&&person)
      postfunc()
  }, [click]);

  useEffect(() => {
    if (click==3&&person)
      putfunc()
  }, [click]);

  return (<>
    <Toast ref={toast} />
    <ConfirmDialog />
    {context.status === 1 ? <>
      <Menu arr={["אזור אישי", "תלמידים", "צוות", "ניהול חשבונות", "הגדרות מוסד"]} icon={["pi pi-fw pi-book", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-fw pi-calendar", "pi pi-cog"]} navigate={["/privateArea", "/student", "/staff", "/account", "/definitions"]} /></> : <>
      <Menu arr={["אזור אישי", "תלמידים"]} icon={["pi pi-fw pi-book", "pi pi-fw pi-pencil"]} navigate={["/privateArea", "/student"]} />
    </>}
    {confirm?<>
    <Attendace  Id={confirm[3]} Status={confirm[15]}></Attendace></>
    :
    <>
    <div className='card_sides'>
    <Button label="הוספת רשומה חדשה" onClick={() => { setBtn(1) }}></Button>
    </div>
    {btn === 1 ? <>{ confirm1(postfunc, null, "הוספה בוטלה", 'הוספת רשומה', <><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />{
        create[0].map((name, index) => {return (<SearchLine key={counter++} name={name} id={create[1][index]} type={create[2][index]} setObjUser={setPerson} />)
    })}</>,1)}</> : <></>}
    {dataf ? <>{yudatatable(dataf, staffColumns, options, tableName)}</>:<></>}
    </> }
  </>)
}
export default Staff;