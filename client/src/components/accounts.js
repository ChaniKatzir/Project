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
<<<<<<< HEAD
=======
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
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
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
<<<<<<< HEAD

  const createEx = [[ "סכום","שם הגובה", "מספר קבלה", "תאריך", "מוסד"],
  ["sum","collector", "recept_number", "date", "id_institute_expends"],
  [ "int", "string","int", "date", "int"]]
  
  const createIn = [[ "סכום", "תאריך ", "מקור ההכנסה", "מוסד",],
  [ "sum", "date", "origion", "id_institute_income"],
  [ "string", "date", "string", "int"]]
=======
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
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617

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
<<<<<<< HEAD
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
=======
    try {
      let x = res.response.status
      let err = res.message;
      toast.current.show({ severity: 'info', summary: 'טעות בהזנת הנתונים', detail: err })
      setOnce(null);setMapper(null); setDraw(null); setData(null); setChose(null); setMonth(null);setYear(null); setId(null)
    }
    catch {
      if (res.length == 0) {
        toast.current.show({ severity: 'info', summary: 'לא נמצאו פריטים תואמים' })
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
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
<<<<<<< HEAD
=======
      setOnce(null);setMapper(null); setDraw(null); setData(null); setChose(null); setMonth(null);setYear(null); setId(null)
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
    }
  }

  const deletefunc = async (arr) => {
    if (chose[0] == 0)
      perobj = await deleteData(`expends/${arr[0]}`)
    else if (chose[0] == 1) perobj = await deleteData(`income/${arr[0]}`)
    const err = perobj.message;
    toast.current.show({ severity: 'info', detail: err })
<<<<<<< HEAD
  }

  useEffect(() => {
    if (click==1&&account)
      postfunc()
  }, [click]);
=======
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
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617

  return (<>
    {<>
      <Toast ref={toast} />
      <ConfirmDialog />
      <Menu1 className="card" arr={["אזור אישי",  "תלמידים", "צוות","ניהול חשבונות", "הגדרות מוסד"]} icon={["pi pi-fw pi-book", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-fw pi-calendar", "pi pi-cog"]} navigate={["/privateArea", "/Student", "/Staff", "/account", "/definitions"]} />
      <div className='card_sides'>
<<<<<<< HEAD
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

=======
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
>>>>>>> 5b1542055acfc409507b2bfc24c9c49d669b1617
