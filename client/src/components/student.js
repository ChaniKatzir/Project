import { useEffect, useState, useContext } from "react";
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


<link rel="stylesheet" href="login.css"></link>

const Student = () => {
  const { putData } = useCrudFunctions();
  const [students, setStudents] = useState('');
  let [columns, setColumns] = useState();
  const [data, setData] = useState()
  const [tableName, setTableName] = useState();
  const [btn, setBtn] = useState(0);
  const [id, setId] = useState();

  let counter = 1;
  const context = useContext(Context);
  const serch = [["מספר זהות", "שם פרטי", "שם משפחה", "מספר טלפון", "מספר פלאפון", "שנתון", "קוד מוסד"],
                ["id_person", "first_name", "last_name", "phone_number", "celphone_number", "yearbook", "id_institute_student"],
                ["int", "string", "string", "int", "int", "int", "int"]];
  const create =[["מספר זהות","שם פרטי","שם משפחה","כתובת מגורים","מספר טלפון","מספר פלאפון","כתובת מייל","פרטי חשבון בנק","קוד אימות","שנתון","קוד מוסד","שכר לימוד"],
                ["id_person","first_name","last_name","address","phone_number","celphone_number","Email","bank_account","password","yearbook","id_institute_student","tuition"],
                ["int","string","string","string","int","int","string","int","int","int","int","int"]]
  const func = async () => {
    if (data != null) {
      console.log("-----data", data);
      const a = await putData('student', data);
      setStudents(a);
    }
  }

  useEffect(() => {
    if (students) {
      let keys = Object.keys(students)
      setColumns(keys);
    }
  }, [students]);

  const first = async () => {
    let value;
    let dat = [];
    let x = await putData('student')
    for (let index = 0; index < x.length; index++) {
      value = await Object.values(x[index])
      dat.push(value);
    }
    setData(dat)
  }

  useEffect(() => {
    first()
  }, []);

  return (<>
    {
      <>
        {students ? <><Table column={columns} /></> : <></>}
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
        <div class="card">
          <Button label="חיפוש" onClick={() => { setBtn(1) }}></Button>
          <Button label="עידכון פרטי תלמיד" onClick={() => { setBtn(2) }}></Button>
          <Button label="הוספה" onClick={() => { setBtn(3) }}></Button>
          <Button label="מחיקה" onClick={() => { setBtn(4) }}></Button>
          <CardA className="card" p={data} title={tableName}></CardA>
          {btn == 1 ? <>{
            serch[0].map((name, index) => {
              return (
                <SearchLine key={counter++} name={name} id={serch[2][index]} type={serch[3][index]} setdata={setData} />)
            })}<Button label="חפש" onClick={() => { func() }} /></>
            : btn == 2 ? <><InputNumber placeholder="הכנס קוד " value={id} onChange={(e) => setId(e.value)} />
              <Button label="חפש" onClick={() => { func() }} /></>
              : btn == 3 ? <>{
                create[0].map((name, index) => {
                  return (<SearchLine key={counter++} name={name} id={create[1][index]} type={create[2][index]} setdata={setData} />
                  )
                })}
                <Button label="אישור" onClick={() => { func() }} /></>
                : <><InputNumber placeholder="הכנס קוד " value={id} onChange={(e) => setId(e.value)} />
                  <Button label="מחק" onClick={() => { func() }} />
                </>
          }
      </div>
    </>
    }
  </>)
}
export default Student;