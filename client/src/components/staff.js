import React, { useEffect, useState, useContext, useRef } from "react";
import Context from "./context/Context"
import Menu from "./menu";
import { Button } from "primereact/button";
import { useCrudFunctions } from "../hooks/useCrudFunctions";
import SearchLine from "./searchLine";
import { Toast } from 'primereact/toast';
import CardA from './card';
import { InputNumber } from 'primereact/inputnumber';
import yudatatable from './table';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useNavigate } from 'react-router-dom';


<link rel="stylesheet" href="login.css"></link>

const Staff = () => {
  const { putData, deleteData, postData } = useCrudFunctions();
  // const [data, setData] = useState()
  const [dataf, setDataf] = useState([1, 2])
  const [tableName, setTableName] = useState();
  const [btn, setBtn] = useState(0);
  const [id, setId] = useState();
  const [person, setPerson] = useState();
  const navigate = useNavigate();

  const toast = useRef(null);
  let perobj;
  const options = { selectableRows: "none", filterTypy: "dropdown" }
  let counter = 1;
  const context = useContext(Context);

  // const serch = [["מספר זהות", "שם פרטי", "שם משפחה", "מספר טלפון", "מספר פלאפון", "וותק", "תפקיד", "קוד מוסד"]
  //   , ["id_person", "first_name", "last_name", "phone_number", "celphone_number", "seniority", "id_role", "id_institute_staff"]
  //   , ["int", "string", "string", "int", "int", "int", "int", "int"]]
  const create = [["מספר זהות", "שם פרטי", "שם משפחה", "כתובת מגורים", "מספר טלפון", "מספר פלאפון", "כתובת מייל", "קוד מוסד", "קוד כניסה למערכת", "מספר בנק", "מספר סניף", "מספר חשבון", "וותק", "תפקיד"],
  ["id_person", "first_name", "last_name", "address", "phone_number", "celphone_number", "Email", "id_institute_staff", "password", "id_bank", "id_branch", "num", "seniority", "id_role"],
  ["int", "string", "string", "string", "int", "int", "string", "int", "int", "int", "int", "int", "int", "int"]]


  let staffColumns = [
    {
      name: "id_person",
      label: "מספר זהות",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "first_name",
      label: "שם פרטי",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "last_name",
      label: "שם משפחה",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "address",
      label: "כתובת מגורים",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "phone_number",
      label: "מספר טלפון",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "celphone_number",
      label: "מספר פלאפון",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Email",
      label: "כתובת מייל",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "id_institute_student",
      label: "קוד מוסד",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "password",
      label: "סיסמה ",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "id_bank",
      label: "מספר בנק",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "id_branch",
      label: "מספר סניף",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "num",
      label: "מספר חשבון",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "id_role",
      label: "קוד תפקיד ",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "seniority",
      label: "וותק",
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
          return <><i className='pi pi-trash' onClick={() => confirm1(deletefunc, dataf[tableMeta.rowIndex], "נמחקה", "מחיקה בוטלה", '?לאחר הלחיצה על "אישור", לא יהיה ניתן לשחזר את הרשומה. האם למחוק', 'מחיקת רשומה')} />
            <i className="pi pi-pencil" onClick={() => { postfunc(dataf[tableMeta.rowIndex]) }} ></i>
          </>
        },
      },
    },]

  const accept = (arr, func) => {
    func(arr)
    // toast.current.show({ severity: 'success', summary: `!רשומה ${type} בהצלחה`, detail: "הפרטים נקלטו במערכת", life: 3000 });
  }

  const reject = (type) => {
    toast.current.show({ severity: 'warn', summary: type, detail: 'אין שינוי ברשומות', life: 3000 });
  }

  const confirm1 = (func, arr, type2, hd, msg) => {
    setBtn(null);
    confirmDialog({
      message: msg,
      header: hd,
      // icon: 'pi pi-exclamation-triangle',
      accept: () => {console.log("person",person); accept(arr, func)},
      accept: () => {console.log("person",person); accept(arr, func)},
      reject: () => reject(type2)
    });
  };

  const getfunc = async () => {
    let res;
    let dat = [];
    let value;
    if (id === null)
      res = await putData(`staff`, person)
    else
      res = await putData(`staff`, { "id_person_staff": id })
    try {
      let err = res.message;
      toast.current.show({ severity: 'info', summary: 'טעות בהזנת הנתונים', detail: err })
      setId(null); //setData(null);
    }
    catch {
      if (res.length === 0) {
        setTableName(null); setId(null);// setData(null);
        toast.current.show({ severity: 'info', summary: 'לא נמצאו פריטים תואמים' })
      }
      if (btn === 2) { dat = null; setBtn(5); }
      else {
        for (let index = 0; index < res.length; index++) {
          value = Object.values(res[index])
          dat.push(value)
        }
      }
      // setData(dat);
    }
  }

  const postfunc = async () => {
    console.log("postfunc", person);
    if (person) {
      let err;
      perobj = await postData(`staff`, person)
      try {
        console.log("try",perobj);
        err = perobj.response.data.message;
        toast.current.show({ severity: 'warn', summary: `Error`, detail: err, life: 3000 });
      }
      catch {
        console.log("catch",perobj);
        toast.current.show({ severity: 'success', summary: 'הפרטים עודכנו בהצלחה', detail: err, life: 3000 })
      }
      setBtn(null); setId(null);setPerson(null)
      console.log(person);
    }
    first()
  }

  // const postfunc = async () => {
  //   if (person) {
  //     let err;
  //     if (btn === 5)
  //       perobj = await putData(`staff`, person)
  //     else
  //       perobj = await postData(`staff`, person)
  //     try {
  //       err = perobj.response.data.message;
  //       toast.current.show({ severity: 'info', summary: 'ERROR', detail: err })
  //     }
  //     catch {
  //       toast.current.show({ severity: 'info', summary: 'הפרטים עודכנו בהצלחה', detail: err })
  //     }
  //     setData(null); setBtn(null); setId(null)
  //   }
  // }
  const deletefunc = async (arr) => {
    perobj = await deleteData(`staff/${arr[0]}`)
    toast.current.show({ severity: 'success', summary: `!רשומה נמחקה בהצלחה`, detail: "הפרטים נקלטו במערכת", life: 3000 });
    setBtn(null); setId(null); //setData(null);
  }

  const first = async () => {
    if (dataf) {
      let dat = [];
      let x = await putData('staff')
      for (let index = 0; index < x.length; index++) {
        let values = Object.values(x[index]);
        let arr = []
        Object.keys(x[index]).forEach((element, i) => {
          if (i > 3 && element !== 'id_staff' && element !== 'id_person_staff' && element !== 'person.status' && element !== "person.bank_account" && element !== "person.bank.id")
            (
              arr.push(values[i]))
        })
        for (let j = 0; j < 3; j++) {
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


  return (<>
    <Toast ref={toast} />
    <ConfirmDialog />
    {context.status === 1 ? <>
      <Menu arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן", "הגדרות מוסד"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-paperclip", "pi pi-cog"]} navigate={["/home", "/account", "/student", "/staff", "/materialManagement", "/definitions"]} /></> : <>
      <Menu arr={["בית", "תלמידים", "איזור אישי", "ניהול תוכן"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-pencil", "pi pi-fw pi-book", "pi pi-paperclip"]} navigate={["/home", "/student", "/privateArea", "/materialManagement"]} />
    </>}
    <Button label="הוספת רשומה חדשה" onClick={() => { setBtn(1) }}></Button>
    <Button label=" פרטי עובד" onClick={() => { navigate('/introduction') }}></Button>

    {btn === 1 ? <>{ confirm1(postfunc, null, "הוספה בוטלה", 'הוספת רשומה', <><br /><br /><br /><br /><br /><br /><br /><br /><br />{
        create[0].map((name, index) => {return (<SearchLine key={counter++} name={name} id={create[1][index]} type={create[2][index]} setObjUser={setPerson} />)
    })}</>)}</> : <></>}
    {dataf ? <>{yudatatable(dataf, staffColumns, options, tableName)}</>:<></>}
  </>)

  // return (<>
  //   {<>
  //     <Toast ref={toast} />
  //     <ConfirmDialog />
  //     {context.status === 1 ? <>
  //       <Menu
  //         arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן", "הגדרות מוסד"]}
  //         icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-paperclip", "pi pi-cog"]}
  //         navigate={["/home", "/account", "/student", "/staff", "/materialManagement", "/definitions"]} />
  //     </> :<>
  //         <Menu
  //           arr={["בית", "תלמידים", "איזור אישי", "ניהול תוכן"]}
  //           icon={["pi pi-fw pi-home", "pi pi-fw pi-pencil", "pi pi-fw pi-book", "pi pi-paperclip"]}
  //           navigate={["/home", "/student", "/privateArea", "/materialManagement"]} />
  //       </>}
  //     {data ? <>
  //       <CardA className="card" p={data} title={tableName}></CardA>
  //       <Button label="חזרה" onClick={(setData(null), setBtn(null), setId(null), setPerson(null), setDataf(null))}></Button>
  //     </> : <>
  //         <Button label="חיפוש" onClick={() => { setBtn(1); setDataf(null) }}></Button> 
  //         <Button label="עידכון פרטי עובד" onClick={() => { setBtn(2); setDataf(null) }}></Button>
  //         <Button label="הוספת רשומה חדשה" onClick={() => { setBtn(3); setDataf(null) }}></Button>
  //         {btn === 1 ? <div class="card">{
  //           serch[0].map((name, index) => {
  //             return (
  //               <SearchLine key={counter++} name={name} id={serch[1][index]} type={serch[2][index]} setObjUser={setPerson} />)
  //           })}<Button label="חפש" onClick={() => { setData(null); getfunc() }} /></div>
  //          : btn === 2 ? <div class="card"><InputNumber placeholder="הכנס קוד " value={id} onChange={(e) => setId(e.value)} />
  //            <Button label="חפש" onClick={() => { getfunc() }} /></div>
  //           : btn === 3 ? <>{confirm1( postfunc,null, "נוספה", "הוספה בוטלה",
  //           <><br/><br/><br/><br/><br/><br/><br/><br/><br/>{create[0].map((name, index) => {
  //             if ((btn === 5 && index !== 0) || btn === 3)
  //               return (<SearchLine key={counter++} name={name} id={create[1][index]} type={create[2][index]} setObjUser={setPerson} />
  //               )
  //           })}</>
  //             , 'הוספת רשומה')}</>
  //              : btn === 3 || btn === 5 ? <div class="card">
  //              {create[0].map((name, index) => {
  //              if ((btn === 5 && index !== 0) || btn === 3)
  //              return (<SearchLine key={counter++} name={name} id={create[1][index]} type={create[2][index]} setObjUser={setPerson} />
  //              )})}
  //              <Button label="אישור" onClick={() => { setDataf(null); postfunc() }} />
  //              </div> 
  //             : <></>
  //         }
  //       </>}
  //     {dataf ?
  //       // <CardA className="card" p={dataf} title={tableName}></CardA>
  //       <>{yudatatable(dataf, staffColumns, options, tableName)}</>
  //       : <></>}
  //   </>
  //   }
  // </>)
}
export default Staff;