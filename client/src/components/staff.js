import { useEffect, useState, useContext, useRef } from "react";
import Context from "./context/Context"
import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import Menu from "./menu";
// import SearchLine from "./searchLine"
import { Button } from "primereact/button";
import { useCrudFunctions } from "../hooks/useCrudFunctions";
import Table from "./table";
import SearchLine from "./searchLine";
import { Toast } from 'primereact/toast';
import CardA from './card';
import { InputNumber } from 'primereact/inputnumber';
import yudatatable from './table';

<link rel="stylesheet" href="login.css"></link>

const Staff = () => {
  const { putData, deleteData, postData } = useCrudFunctions();
  const [data, setData] = useState()
  const [dataf, setDataf] = useState([1, 2])
  const [tableName, setTableName] = useState();
  const [btn, setBtn] = useState(0);
  const [id, setId] = useState();
  const [person, setPerson] = useState();
  const toast = useRef(null);
  let perobj;
  const options = { selectableRows: "none", filterTypy: "dropdown" }
  let counter = 1;

  const context = useContext(Context);
  const serch = [["מספר זהות", "שם פרטי", "שם משפחה", "מספר טלפון", "מספר פלאפון", "וותק", "תפקיד", "קוד מוסד"]
    , ["id_person", "first_name", "last_name", "phone_number", "celphone_number", "seniority", "id_role", "id_institute_staff"]
    , ["int", "string", "string", "int", "int", "int", "int", "int"]]
  const create = [["מספר זהות", "שם פרטי", "שם משפחה", "כתובת מגורים", "מספר טלפון", "מספר פלאפון", "כתובת מייל", "מספר בנק", "מספר סניף", "מספר חשבון", "קוד כניסה למערכת", "תפקיד", "וותק", "קוד מוסד"],
  ["id_person", "first_name", "last_name", "address", "phone_number", "celphone_number", "Email", "id_bank", "id_branch", "num", "password", "id_role", "seniority", "id_institute_staff"],
  ["int", "string", "string", "string", "int", "int", "string", "int", "int", "int", "int", "int", "int", "int"]]

  const getfunc = async () => {
    let res;
    let dat = [];
    let value;
    console.log("data", person);
    if (id == null)
      res = await putData(`staff`, person)
    else//serch
      res = await putData(`staff`, { "id_person_staff": id })
    try {
      let x = res.response.status
      let err = res.message;
      toast.current.show({ severity: 'info', summary: 'טעות בהזנת הנתונים', detail: err })
      setId(null); setData(null);
    }
    catch {
      if (res.length == 0) {
        setTableName(null); setData(null); setId(null)
        toast.current.show({ severity: 'info', summary: 'לא נמצאו פריטים תואמים' })
      }
      if (btn == 2) { dat = null; setBtn(5); }
      else {
        for (let index = 0; index < res.length; index++) {
          value = Object.values(res[index])
          dat.push(value)
        }
      }
      setData(dat);
    }
  }

  const postfunc = async () => {
    if (person) {
      let err;
      if (btn == 5)
        perobj = await putData(`staff`, person)
      else
        perobj = await postData(`staff`, person)
      try {
        err = perobj.response.data.message;
        toast.current.show({ severity: 'info', summary: 'ERROR', detail: err })
      }
      catch {
        toast.current.show({ severity: 'info', summary: 'הפרטים עודכנו בהצלחה', detail: err })
      }
      setData(null); setBtn(null); setId(null)
    }
  }
  const deletefunc = async () => {
    perobj = await deleteData(`staff/${id}`)
    const err = perobj.message;
    toast.current.show({ severity: 'info', detail: err })
    setData(null); setBtn(null); setId(null)
  }

  const first = async () => {
    if (dataf) {
      let value;
      let dat = [];
      let x = await putData('staff')
      console.log("x",x);
      for (let index = 0; index < x.length; index++) {
        value = await Object.values(x[index])
        dat.push(value);
      }
      setDataf(dat)
    }
    else setDataf(null)
  }

  useEffect(() => {
    first()
  }, []);
  return (<>
    {<>
      <Toast ref={toast} />
      {context.status == 1 ? <>
        <Menu
          arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן", "הגדרות מוסד"]}
          icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-paperclip", "pi pi-cog"]}
          navigate={["/home", "/account", "/student", "/staff", "/materialManagement", "/definitions"]} />
      </> :
        <>
          <Menu
            arr={["בית", "תלמידים", "איזור אישי", "ניהול תוכן"]}
            icon={["pi pi-fw pi-home", "pi pi-fw pi-pencil", "pi pi-fw pi-book", "pi pi-paperclip"]}
            navigate={["/home", "/student", "/privateArea", "/materialManagement"]} />
        </>}
      {data ? <>
        <CardA className="card" p={data} title={tableName}></CardA>
        <Button label="חזרה" onClick={() => (setData(null), setBtn(null), setId(null), setPerson(null), setDataf(null))}></Button>
      </> :
        <>

          <Button label="חיפוש" onClick={() => { setBtn(1); setDataf(null) }}></Button>
          <Button label="עידכון פרטי עובד" onClick={() => { setBtn(2); setDataf(null) }}></Button>
          <Button label="הוספה" onClick={() => { setBtn(3); setDataf(null) }}></Button>
          <Button label="מחיקה" onClick={() => { setBtn(4); setDataf(null) }}></Button>
          {btn == 1 ? <div class="card">{
            serch[0].map((name, index) => {
              return (
                <SearchLine key={counter++} name={name} id={serch[1][index]} type={serch[2][index]} setObjUser={setPerson} />)
            })}<Button label="חפש" onClick={() => { setData(null); getfunc() }} /></div>
            : btn == 2 ? <div class="card"><InputNumber placeholder="הכנס קוד " value={id} onChange={(e) => setId(e.value)} />
              <Button label="חפש" onClick={() => { getfunc() }} /></div>
              : btn == 4 ? <div class="card"><InputNumber placeholder="הכנס קוד " value={id} onChange={(e) => setId(e.value)} />
                <Button label="מחק" onClick={() => { deletefunc() }} /></div>
                : btn == 3 || btn == 5 ? <div class="card">
                  {create[0].map((name, index) => {
                    if ((btn == 5 && index != 0) || btn == 3)
                      return (<SearchLine key={counter++} name={name} id={create[1][index]} type={create[2][index]} setObjUser={setPerson} />
                      )
                  })}
                  <Button label="אישור" onClick={() => { setDataf(null); postfunc() }} />
                </div> : <></>
          }
        </>}
      {console.log(dataf)}
      {dataf ?
        // <CardA className="card" p={dataf} title={tableName}></CardA>
        <>{yudatatable(dataf,create[0],options,tableName)}</>

         : <></>}

    </>
    }
  </>)
}
export default Staff;