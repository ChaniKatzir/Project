import React, { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { useCrudFunctions } from "../hooks/useCrudFunctions";
import Context from "./context/Context"
import Menu1 from './menu'
import yudatatable from './table';
import SearchLine from './searchLine';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';


const Account = () => {
  const { putData, getData, deleteData, postData } = useCrudFunctions();
  const toast = useRef(null);
  let counter = 1;
  let perobj;
  const [chose, setChose] = useState();
  const [id, setId] = useState();
  const [account, setAccount] = useState();
  const [dataIn, setDataIn] = useState()
  const [dataEx, setDataEx] = useState()
  const [click, setClick] = useState(0);
  const [btn, setBtn] = useState(0);
  const [idd, setIdd] = useState(null);
  const options = { selectableRows: "none", filterTypy: "dropdown" }

  const createEx = [[ "סכום","שם הגובה", "מספר קבלה", "תאריך", "מוסד"],
  ["sum","collector", "recept_number", "date", "id_institute_expends"],
  [ "int", "string","int", "date", "int"]]
  
  const createIn = [[ "סכום", "תאריך ", "מקור ההכנסה", "מוסד",],
  [ "sum", "date", "origion", "id_institute_income"],
  [ "string", "date", "string", "int"]]

  let expendsdColumns = [
    {
    name: "לחץ למחיקה",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta) => {
        return <><i className='pi pi-trash' onClick={() => confirm1( deletefunc,dataEx[tableMeta.rowIndex], "בוטל", "מחיקת רשומה", '?לאחר הלחיצה על "אישור", לא יהיה ניתן לשחזר את הרשומה. האם למחוק', 'מחיקת רשומה',2)} />
         </>
      }}
    },
    {
      name: "לחץ לעריכה",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return <> <i className="pi pi-user-edit" onClick={() => {confirm1( getfunc,dataEx[tableMeta.rowIndex], "בוטל", "עדכון רשומה", <><br /><br /><br /><br /><br />{
            createEx[0].map((name, index) => {console.log(dataEx[tableMeta.rowIndex][3]);setIdd(dataEx[tableMeta.rowIndex][3]); return (<SearchLine key={counter++} name={name} id={createEx[1][index]} placeHolder={dataEx[tableMeta.rowIndex][index]} type={createEx[2][index]} setObjUser={setAccount} />)
        })}</>,3)}}/>
            </>
        }}
    },
    {
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
    }
  ]

  let incomeColumns = [
    {
    name: "לחץ למחיקה",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta) => {
        return <><i className='pi pi-trash' onClick={() => confirm1( deletefunc,dataIn[tableMeta.rowIndex], "בוטל", "מחיקת רשומה", '?לאחר הלחיצה על "אישור", לא יהיה ניתן לשחזר את הרשומה. האם למחוק', 'מחיקת רשומה',2)} />
         </>
      }}
    },
    {
      name: "לחץ לעריכה",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return <> <i className="pi pi-user-edit" onClick={() => {confirm1( getfunc,dataIn[tableMeta.rowIndex], "בוטל", "עדכון רשומה", <><br />{
            createIn[0].map((name, index) => {console.log(dataIn[tableMeta.rowIndex][3]);setIdd(dataIn[tableMeta.rowIndex][3]); return (<SearchLine key={counter++} name={name} id={createIn[1][index]} placeHolder={dataIn[tableMeta.rowIndex][index]} type={createIn[2][index]} setObjUser={setAccount} />)
        })}</>,3)}}/>
            </>
        }}
    },
      {
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
    }
  ]

  const reject = (type) => {
    toast.current.show({ severity: 'warn', summary: type, detail: 'אין שינוי ברשומות', life: 3000 });
  }

  const confirm1 = (func, arr, type2, hd, msg,num) => {
    confirmDialog({
      message: msg,
      header: hd,
      // icon: 'pi pi-exclamation-triangle',
      accept: () => {setClick(num);func(arr)},
      reject: () => {reject(type2)}
    });
  };

  const getfunc = async (type) => {
    let res;
    if (type == 1) {
      res = await getData(`expends`)
      setDataEx(res);
    }
    else if (type == 2) {
      res = await getData(`income`)
      setDataIn(res);
    }
    setClick(0);
  }

  const postfunc = async (type) => {
    if(account&&click==1)
    {
      let err;
      if(type===1)
        perobj = await postData(`expends`, account)
      else
        perobj = await postData(`income`, account)
      try {
        err = perobj.response.data.message;
        toast.current.show({ severity: 'warn', summary: `Error`, detail: err, life: 3000 });
      }
      catch {
        toast.current.show({ severity: 'success', summary: 'הפרטים עודכנו בהצלחה', detail: err, life: 3000 })
      }
      setBtn(null); setId(null);setAccount(null); setClick(null); perobj=null;
    }
  }

  const putfunc = async () => {
    if (account) {
      if (chose[0] == 0) {
        if (chose[1] == 5) perobj = await putData(`expends/${id}`, account)
        else if (chose[1] == 6) perobj = await postData(`expends`, account)
      }
      else {
        if (chose[1] == 5) perobj = await putData(`income/${id}`, account)
        else if (chose[1] == 6) perobj = await postData(`income`, account)
      }
      const err = perobj.message;
      toast.current.show({ severity: 'info', summary: 'הפרטים עודכנו בהצלחה', detail: err })
    }
  }

  const deletefunc = async (arr) => {
    if (chose[0] == 0)
      perobj = await deleteData(`expends/${arr[0]}`)
    else if (chose[0] == 1) perobj = await deleteData(`income/${arr[0]}`)
    const err = perobj.message;
    toast.current.show({ severity: 'info', detail: err })
  }

  useEffect(() => {
    if (click==1&&account)
      postfunc()
  }, [click]);

  return (<>
    {<>
      <Toast ref={toast} />
      <ConfirmDialog />
      <Menu1 className="card" arr={["אזור אישי",  "תלמידים", "צוות","ניהול חשבונות", "הגדרות מוסד"]} icon={["pi pi-fw pi-book", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-fw pi-calendar", "pi pi-cog"]} navigate={["/privateArea", "/Student", "/Staff", "/account", "/definitions"]} />
      <div className='card_sides'>
          <Button label="הוצאות" icon="pi pi-bars" onClick={()=>(setDataIn(0),getfunc(1))} id="right" />
          <Button label="הוספת הוצאה" icon="pi pi-bars" onClick={()=>(setBtn(1))} id="right" />
          <Button label="הוספת הכנסה" icon="pi pi-bars" onClick={()=>(setBtn(2))} id="left" />
          <Button label="הכנסות" icon="pi pi-bars" onClick={()=>(setDataEx(0),getfunc(2))} id="left" />
      </div>
      {dataIn ? <>{yudatatable(dataIn, incomeColumns, options, "פרוט הכנסות")}</>:
        dataEx ? <>{yudatatable(dataEx, expendsdColumns, options, "פרוט הוצאות")}</>:<></>}
      {btn===1?<>{ (confirm1(postfunc, 1, "הוספה בוטלה", 'הוספת רשומה', <><br/><br/><br/><br/>{
        createEx[0].map((name, index) => {return (<SearchLine key={counter++} name={name} id={createEx[1][index]} type={createEx[2][index]} setObjUser={setAccount} />)
      })}</>,1),setBtn(0))}</>:
      btn===2?<>{ (confirm1(postfunc, 2, "הוספה בוטלה", 'הוספת רשומה', <><br/><br/>{
        createIn[0].map((name, index) => {return (<SearchLine key={counter++} name={name} id={createIn[1][index]} type={createIn[2][index]} setObjUser={setAccount} />)
      })}</>,1),setBtn(0))}</>:<></>}
    </>}</>)
}
export default Account

