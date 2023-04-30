import React, { useState, useContext, useEffect } from 'react';
import Menu from './menu'
import { Button } from 'primereact/button';
import Context from "./context/Context"
import { useCrudFunctions } from "../hooks/useCrudFunctions";
import { InputNumber } from 'primereact/inputnumber';
import CardA from './card';

import Search from './search'
import { SplitButton } from 'primereact/splitbutton';
import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme


<link rel="stylesheet" href="login.css"></link>
const Account = () => {
  const context = useContext(Context);
  const { putData, getData, deleteData, postData } = useCrudFunctions()

  const [choseI, setChoseI] = useState();
  const [choseE, setChoseE] = useState();
  const [title, setTitle] = useState();

  const [id, setId] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  const [data, setData] = useState();
  const [draw, setDraw] = useState();//כדי לעקוף את onchange


  const out = [
    {
      label: 'פירוט כל ההוצאות',
      command: () => {
        setChoseE(1)
      }
    },
    {
      label: 'חיפוש לפי קוד הוצאה',
      command: () => {
        setChoseE(2)
      }
    },
    {
      label: 'חיפוש לפי קוד מוסד',
      command: () => {
        setChoseE(3)
      }
    },
    {
      label: 'חיפוש לפי תאריך ההוצאה',
      command: () => {
        setChoseE(4)
      }
    },
    {
      label: 'עדכון הוצאה קיימת',
      command: () => {
        setChoseE(5)
      }
    },
    {
      label: 'הכנסת הוצאה חדשה',
      command: () => {
        setChoseE(6)
      }
    },
    {
      label: 'מחיקת הוצאה',
      command: () => {
        setChoseE(7)
      }
    }
  ];
  const inc = [
    {
      label: 'הכנסות',
      icon: 'pi pi-refresh',
      command: () => {
        setChoseI(1)
      }
    },
    {
      label: 'הוצאות',
      icon: 'pi pi-times',
      command: () => {
        setChoseI(2)

      }
    }
  ];

  const funcGetI = async (id) => {
    let res = await getData(`expends/${id}`)
    console.log("res", res);
    let data = []
    let value;
    let name = ["מספר הוצאה", "סכום", "הגובה", "קוד קבלה", "תאריך"]
    console.log("choseE", choseE);
    if (choseE == 2) {
      value = Object.values(res)
      console.log("value", value);
      name.forEach((key, index) =>
        data.push(key + " :" + value[index]));
    }
    else {
      for (let index = 0; index < res.length; index++) {
        value = Object.values(res[index])
        name.forEach((key, i) => {
          data.push(key + " :" + value[i])
        });
      }
    } console.log("data", data);
    setData(data);
  }

  // const funcGetE = async (id) => {
  //   let res = await getData(`income/${id}`)
  //   let data = []
  //   let ay
  //   let ax = ["מספר הוצאה", "סכום", "הגובה", "קוד קבלה", "תאריך"]
  //   if (choseI == 1) {
  //     ay = Object.values(res)
  //     ax.forEach((key, index) =>
  //       data.push(key + " :" + ay[index]));
  //   }
  //   else {
  //     for (let index = 0; index < arr.length; index++) {
  //       ay = Object.values(res[index])
  //       console.log(ay);
  //       ax.forEach((key, i) => {
  //         data.push(key + " :" + ay[i])
  //       });
  //     }
  //   }
  //   setData(data);
  // }

  const funcDelete = async (id) => {
    let response = await deleteData(`expends/${id}`)
  }

  useEffect(() => {
    if (choseE) {
      if (choseE == 1) {
        setTitle(`פרוט כל ההוצאות`)
        funcGetI()
      }
      if (choseE == 2) {
        setTitle(`פרוט הוצאה מספר ${id}`)
        console.log(id);
        funcGetI(id)
      }
      if (choseE == 3) {
        setTitle(`פרוט הוצאות של מוסד ${id}`)
        funcGetI(`institute/${id}`)
      }
      if (choseE == 4) {
        setTitle(`פרוט הוצאות של מוסד ${id}בשנה ${year}בחודש ${month}`)
        funcGetI(`month/${id}/${month}/${year}`)

      }

    }

  }, [draw]);

  return (<>

    {<>
      <Menu arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן", "הגדרות מוסד"]} icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-paperclip", "pi pi-cog"]} navigate={["/Home", "/account", "/Student", "/Staff", "/MaterialManagement", "/definitions"]} />
      <div className="card flex justify-content-center">
        <SplitButton label="הוצאות" model={inc} id="right" />
        <SplitButton label="הכנסות" model={out} id="left" />
      </div>
      {data ? <>{
        (console.log("lllllll"),
          <CardA p={data} title={title}></CardA>,
          setData(null), setChoseE(null), setChoseI(null), setMonth(null), setYear(null), setId(null))}</> :
        (choseE ?
          <div>
            {choseE == 1 ? setDraw(1) :
              choseE == 2 ? <InputNumber placeholder="הכנס קוד הוצאה" value={id} onChange={(e) => setId(e.value)} /> :
                choseE == 3 ? <InputNumber placeholder="הכנס קוד מוסד" value={id} onChange={(e) => setId(e.value)} /> :
                  choseE == 4 ? <><InputNumber placeholder="הכנס קוד מוסד " value={id} onChange={(e) => setId(e.value)} />
                    <InputNumber placeholder="הכנס  חודש " value={month} onChange={(e) => setMonth(e.value)} />
                    <InputNumber placeholder="הכנס שנה  " value={year} onChange={(e) => setYear(e.value)} /></> :
                    <></>
            }
            <Button label="לקבלת נתונים" severity="help" text raised onClick={() => (setDraw(1))} />
          </div> :
          <div></div>)
      }
    </>
    }
  </>
  )




};
export default Account