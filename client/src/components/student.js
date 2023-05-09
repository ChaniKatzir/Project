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
import CardA from './card';
import { InputNumber } from 'primereact/inputnumber';
import { Toast } from 'primereact/toast';
import yudatatable from './table';


<link rel="stylesheet" href="login.css"></link>

const Student = () => {
  const { putData, deleteData, postData } = useCrudFunctions();
  const [data, setData] = useState()
  const [dataf, setDataf] = useState([1,2])
  const [tableName, setTableName] = useState();
  const [btn, setBtn] = useState(0);
  const [id, setId] = useState();
  const [person, setPerson] = useState();
  const toast = useRef(null);
  let perobj;
  const options = { selectableRows: "none", filterTypy: "dropdown" }


  let counter = 1;
  const context = useContext(Context);
  const serch = [["מספר זהות", "שם פרטי", "שם משפחה", "מספר טלפון", "מספר פלאפון", "שנתון", "קוד מוסד"],
  ["id_person", "first_name", "last_name", "phone_number", "celphone_number", "yearbook", "id_institute_student"],
  ["int", "string", "string", "int", "int", "int", "int"]];
  const create = [["מספר זהות", "שם פרטי", "שם משפחה", "כתובת מגורים", "מספר טלפון", "מספר פלאפון", "כתובת מייל", "קוד מוסד", "שכר לימוד", "מספר בנק", "מספר סניף", "מספר חשבון", "קוד אימות", "שנתון"],
  ["id_person", "first_name", "last_name", "address", "phone_number", "celphone_number", "Email", "id_institute_student", "tuition", "id_bank", "id_branch", "num", "password", "yearbook"],
  ["int", "string", "string", "string", "int", "int", "string", "int", "int", "int", "int", "int", "int", "int"]]
  let studentsColumns = [{
    name: "id_person",
    label:"מספר זהות",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "first_name",
    label:  "שם פרטי",
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
    label:  "כתובת מייל",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "id_institute_student",
    label:  "קוד מוסד",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "tuition",
    label:  "שכר לימוד",
    options: {
      filter: true,
      sort: true,
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
    name: "password",
    label:  "קוד אימות",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "yearbook",
    label: "שנתון",
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
        return context.status==1?<><i className="pi pi-trash" style={{ fontSize: '1.5rem' }} onClick={() => {console.log("dataf",dataf); deletefunc(dataf[tableMeta.rowIndex]) }} ></i>
        </>:<></>
      },
    },
  },
  ]
 
  const getfunc = async () => {
    let res;
    let dat = [];
    let value;
    if (id == null) 
    res = await putData(`student`, person)
    else//serch
      res = await putData(`student`, {"id_person_student":id})
    try {
      let x = res.response.status
      let err = res.message;
      toast.current.show({ severity: 'info', summary: 'טעות בהזנת הנתונים', detail: err })
      setId(null); setData(null);
    }
    catch {
      if (res.length == 0) {
        setTableName(null); setData(null);setId(null)
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
      if(btn==5)
      perobj = await putData(`student`, person)
      else
      perobj = await postData(`student`, person)
      try{
        err=perobj.response.data.message;
        toast.current.show({ severity: 'info', summary: 'ERROR', detail: err })
      }
      catch{toast.current.show({ severity: 'info', summary: 'הפרטים עודכנו בהצלחה', detail: err })
    }
      setData(null);setBtn(null);setId(null)
    }

  }
  
  const deletefunc = async (arr) => {
    perobj = await deleteData(`student/${arr[0]}`)
    const err = perobj.message;
    toast.current.show({ severity: 'info', detail: err })
    setData(null);setBtn(null);setId(null)
  }

  const first = async () => {
    if(dataf)
    {
    let value;
    let dat = [];
    let x = await putData('student')
    for (let index = 0; index < x.length; index++) {
      let values=Object.values(x[index]);
      let arr=[]
     Object.keys(x[index]).forEach((element,i) => {
          if(i>3&&element!=='id_student'&&element!=='id_person_student'&&element!=='person.status'&&element!=="person.bank_account"&&element!=="person.bank.id")
        (
          arr.push(values[i]));
          
        })
        for (let j = 0; j < 3; j++) {
          arr.push (values[j]);
          
        }
        dat.push(arr)
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
          <Button label="חזרה" onClick={() => (setData(null), setBtn(null), setId(null), setPerson(null),setDataf(null))}></Button>
        </> :
          <>
            
            <Button label="חיפוש" onClick={() => { setBtn(1);setDataf(null) }}></Button>
            <Button label="עידכון פרטי תלמיד" onClick={() => { setBtn(2);setDataf(null) }}></Button>
            <Button label="הוספה" onClick={() => { setBtn(3) ;setDataf(null)}}></Button>
            {btn == 1 ? <div class="card">{
              serch[0].map((name, index) => {
                return (
                  <SearchLine key={counter++} name={name} id={serch[1][index]} type={serch[2][index]} setObjUser={setPerson} />)
              })}<Button label="חפש" onClick={() => { setData(null); getfunc() }} /></div>
              : btn == 2 ? <div class="card"><InputNumber placeholder="הכנס קוד " value={id} onChange={(e) => setId(e.value)} />
                <Button label="חפש" onClick={() => { getfunc() }} /></div>
                : btn == 3 ||btn== 5 ? <div class="card">
                  {create[0].map((name, index) => {
                    if ((btn == 5 && index != 0) || btn == 3)
                      return (<SearchLine key={counter++} name={name} id={create[1][index]} type={create[2][index]} setObjUser={setPerson} />
                      )
                  })}
                    <Button label="אישור" onClick={() => { setDataf(null);postfunc() }} /> 
                    </div> : <></>
            }
          </>}
          {dataf?
          // <CardA className="card" p={dataf} title={tableName}></CardA>
          <>{yudatatable(dataf,studentsColumns,options,tableName)}</>
          :<></>}

      </>
    }
  </>)
}
export default Student;