import React, { useState, useContext, useEffect, useRef } from "react";
import Menu1 from './menu'
import { Menu } from 'primereact/menu';
import Card from "./card";
import { Button } from "primereact/button";
import Context from "./context/Context"
import { InputNumber } from 'primereact/inputnumber';
import { Toast } from 'primereact/toast';
import yudatatable from './table';
import SearchLine from './searchLine';
<<<<<<< HEAD
import Home from "./Home";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
=======
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617

import Search from './search'
import { useCrudFunctions } from "../hooks/useCrudFunctions";

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
<link rel="stylesheet" href="login.css"></link>
const Definitions = () => {

  const context = useContext(Context);
  let counter = 1;
  const { putData, getData, deleteData, postData } = useCrudFunctions();
  const [privateInstitute, setPrivateInstitute] = useState();
  const [choose, setChose] = useState();
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [mapper, setMapper] = useState();
  const [institute, setInstitute] = useState();
  const [array, setArray] = useState();
<<<<<<< HEAD

=======
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
  const [data, setData] = useState();
  const toast = useRef(null);
  const menu2 = useRef(null);
  const [draw, setDraw] = useState();
  const [once, setOnce] = useState();
<<<<<<< HEAD
  const [confirm, setConfirm] = useState(null);
=======
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617

  const options = { selectableRows: "none", filterTypy: "dropdown" }
  let perobj;

  const names = ["קוד מוסד", "שכר לימוד", "מספר זהות מנהל", "כתובת", "כתובת המייל", "טלפון", "שם מוסד"];
  let definitionColumns = [{
    name: "id_institute",
    label: "קוד מוסד ",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "tuition",
    label: "שכר לימוד ",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "manager_id_person",
    label: "מספר זהות מנהל",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "address",
    label: "כתובת",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "Email",
    label: "כתובת המייל",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "phone_number",
    label: "טלפון",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "name",
    label: "שם מוסד",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "",
    label: "",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta) => {
<<<<<<< HEAD
        return <><i className="pi pi-trash" style={{ fontSize: '1' }} onClick={() => { deletefunc(data[tableMeta.rowIndex]) }} ></i>
=======
        return <><i className="pi pi-trash" style={{ fontSize: '2rem' }} onClick={() => { deletefunc(data[tableMeta.rowIndex]) }} ></i>
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
        </>
      },
    },
  },
  ]
  const updateFunc = async () => {
    if (institute) {
<<<<<<< HEAD
      if (choose == 3) perobj = await putData(`institute/${id}`, institute)
      else if (choose == 5) perobj = await postData(`institute`, institute)
=======
console.log("institute",institute,id);
      if (choose == 3) perobj = await putData(`institute/${id}`, institute)
      else if (choose == 5) perobj = await postData(`institute`, institute)
      console.log(perobj,"perobj");
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
      const err = perobj.message;
      toast.current.show({ severity: 'info', summary: 'הפרטים עודכנו בהצלחה', detail: err })
      setOnce(null); setMapper(null); setDraw(null); setData(null); setChose(null); setId(null)
    }
  }

<<<<<<< HEAD
  const confirm1 = (func, arr, type2, hd, msg) => {
    confirmDialog({
      message: msg,
      header: hd,
      // icon: 'pi pi-exclamation-triangle',
      accept: () => { func(arr) ;setMapper(null);setDraw(null); setChose(null); setId(null); setOnce(null)},
      reject: () => { reject(type2);setMapper(null) ;setDraw(null); setChose(null); setId(null); setOnce(null)}
    });
  };

  const reject = (type) => {
    toast.current.show({ severity: 'warn', summary: type, detail: 'אין שינוי ברשומות', life: 3000 });
  }
=======
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
  const deletefunc = async (id) => {
    perobj = await deleteData(`institute/${id}`)
    toast.current.show({ severity: 'info', summary: 'המחיקה בוצעה בהצלחה' })
    setData(null); setId(null)
  }

  const funcGet = async (id) => {
<<<<<<< HEAD
    console.log("ghbjnk", id);

=======
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
    let res;
    let datas = [];
    if (id == null)
      res = await getData(`institute/`)
<<<<<<< HEAD
    else res = await getData(`institute/institute/${id}`)
=======
    else res = await getData(`institute/${id}`)
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
    try {
      let x = res.response.status
      let err = res.message;
      toast.current.show({ severity: 'info', summary: 'טעות בהזנת הנתונים', detail: err })
    }
    catch {
      if (res.length == 0) {
        toast.current.show({ severity: 'info', summary: 'לא נמצאו פריטים תואמים' })
      }
<<<<<<< HEAD
      if (choose == 3) { setData(null); setMapper(1); datas = null; }
      else {
        if (choose == 1) {
          for (let index = 0; index < res.length; index++) {
            let value = Object.values(res[index])
            datas.push(value)
          }
          setData(datas)
        }
        else {
          datas = Object.values(res)
          let arr = []
          arr.push(datas)
          setData(arr)
        }
=======
      if (choose == 3){datas=null; setMapper(1)}
      setData(datas);
      if (choose == 1) {
        for (let index = 0; index < res.length; index++) {
          let value = Object.values(res[index])
          datas.push(value)
        }
        setData(datas)
      }
      else {
        datas = Object.values(res)
        let arr = []
        arr.push(datas)
        setData(arr)
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
      }
    }

  }
  const myInst = async (id) => {
    let myInstitute = await getData(id);
    if (myInstitute) {
      let values = Object.values(myInstitute);
      setPrivateInstitute(values);
    }
  }
  useEffect(() => {
    myInst(`institute/${context.id}`);

  }, []);
  useEffect(() => {
    if (choose) {
      setArray([["קוד מוסד", "שכר לימוד", "מספר זהות מנהל", "כתובת", "כתובת המייל", "טלפון", "שם מוסד"],
      ["id_institute", "tuition", "manager_id_person", "address", "Email", "phone_number", "name"],
      ["int", "int", "string", "string", "string", "int", "string"], [7]])
      if (choose == 1) {
        setTitle(`פרטי כל המוסדות`)
        funcGet(null)
      }
      if (choose == 2) {
        setTitle(`פרטי מוסד מספר ${id}`)
        funcGet(id)
      }
      if (choose == 3) {
        funcGet(id)
<<<<<<< HEAD
        if (data) {
          console.log("data", data);
          setMapper(1)
        }
=======
        if (data){
          console.log("data",data);
          setMapper(1)}
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
      }
      if (choose == 4) {
        deletefunc(id)
      }
      if (choose == 5) {
        setMapper(1)
      }
    }
  }, [draw]);
  const institutes = [
    {
      label: 'כל המוסדות',
      icon: 'pi pi-qrcode',
      command: () => { setChose(1) }
    },
    {
      label: 'חיפוש על ידי קוד מוסד',
      icon: 'pi pi-search',
      command: () => { setChose(2) }
    }
<<<<<<< HEAD

    ,
    {
      label: 'מחיקת מוסד',
      icon: 'pi pi-trash',
      command: () => { setChose(4) }
    }
    ,
    {
      label: ' הכנסת מוסד חדש',
      icon: 'pi pi-sign-in',
      command: () => { setChose(5) }
    }
  ];

  return (<>
        <Toast ref={toast} />
        <ConfirmDialog />
        <Menu1 arr={["אזור אישי", "תלמידים", "צוות", "ניהול חשבונות", "הגדרות מוסד"]} icon={["pi pi-fw pi-book", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-fw pi-calendar", "pi pi-cog"]} navigate={["/privateArea", "/student", "/staff", "/account", "/definitions"]} />
        {data ? <>{yudatatable(data, definitionColumns, options, title)} <Button label="חזרה" onClick={() => (setDraw(null), setData(null), setChose(null), setId(null), setOnce(null))}></Button> </>
         :<>
            <div className="card flex justify-content-center"><Menu model={institutes} popup ref={menu2} /><Button label="הוספת מוסד" onClick={() => (setChose(5),setDraw(1),setOnce(1))} id="left" /><Button label="פרטי כל המוסדות" onClick={() => (setChose(1),setDraw(1),setOnce(1))} id="left" /></div>
              {mapper ? <>
                {confirm1(updateFunc, null, "הוספה בוטלה", 'הוספת רשומה',<><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />{
                  array[0].map((name, index) => {
                    return( <SearchLine key={counter++} name={name} id={array[1][index]} type={array[2][index]} setObjUser={setInstitute} />)
                  })}</>)}
                </> :
                <>  {privateInstitute ? <><Card names={names} defin={privateInstitute} title={"פרטי המוסד"}></Card></> : <></>}
                </>
              }
        </>
      }    
=======
    ,
    {
      label: 'עדכון פרטי מוסד',
      icon: 'pi pi-replay',
      command: () => { setChose(3) }
    }
    ,
    {
      label: 'מחיקת מוסד',
      icon: 'pi pi-trash',
      command: () => { setChose(4) }
    }
    ,
    {
      label: ' הכנסת מוסד חדש',
      icon: 'pi pi-sign-in',
      command: () => { setChose(5) }
    }
  ];

  return (<>
    {
      <>
        <Toast ref={toast} />

        {<Menu1 arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן", "הגדרות מוסד", "הודעות "]}
          icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-paperclip", "pi pi-cog"]}
          navigate={["/home", "/account", "/student", "/staff", "/materialManagement", "/definitions", "/messege"]} />
        }

        {data ? <>
          {yudatatable(data, definitionColumns, options, title)}
          <Button label="חזרה" onClick={() => (setDraw(null), setData(null), setChose(null), setId(null), setOnce(null))}></Button>
        </>
          :
          <>
            <div className="card flex justify-content-center">
              {<><Menu model={institutes} popup ref={menu2} />
                <Button label="למוסדות נוספים" icon="pi pi-bars" onClick={(e) => menu2.current.toggle(e)} id="left" /></>
              }
            </div>
            {(choose && once == null ?
              <div className='card'> {
                choose == 2 ? <InputNumber placeholder="הכנס קוד מוסד" value={id} onChange={(e) => setId(e.value)} /> :
                  choose == 3 ? <InputNumber placeholder="הכנס קוד מוסד" value={id} onChange={(e) => setId(e.value)} /> :
                    choose == 4 ? <InputNumber placeholder="הכנס קוד מוסד" value={id} onChange={(e) => setId(e.value)} /> :
                      <></>}
                {choose != 1 && choose != 5 ? <Button label=" אישור" onClick={() => (setDraw(1))} /> : <>{setOnce(1)}{setDraw(1)}</>}
              </div>
              :
              mapper ? <div class="card">
                
                {array[0].map((column, index) => {
                  if (index != 0) return (
                    <SearchLine key={counter++} name={column} id={array[1][index]} type={array[2][index]} setObjUser={setInstitute} />)
                })
                }
                <Button label="אישור" id="right" onClick={() => (updateFunc())} />
                <Button label="חזרה" onClick={() => (setOnce(null), setMapper(null), setDraw(null), setData(null), setChose(null), setId(null))} />
              </div> :
                <>  {privateInstitute ? <><Card names={names} defin={privateInstitute} title={"פרטי המוסד"}></Card></> : <></>}

                </>)}

          </>
        }
      </>
    }
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
  </>)


};
export default Definitions