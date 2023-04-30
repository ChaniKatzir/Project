import React, { useEffect, useState, useContext } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

import Context from "./context/Context"
import { useCrudFunctions } from "../hooks/useCrudFunctions";
import { InputNumber } from 'primereact/inputnumber';
import CardA from './card';
import Account from './account';
import { useNavigate } from "react-router-dom";

export default function Expendence(props) {
  const context = useContext(Context);
  const { putData, getData, deleteData, postData } = useCrudFunctions()

  const [id, setId] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  const [alert, setAlert] = useState();
  const [type, setTipe] = useState();
  const [data, setData] = useState();
  const [draw, setDraw] = useState();//כדי לעקוף את onchange

  const [title, setTitle] = useState();
  const navigate = useNavigate();

  const funcDelete = async (id) => {
    let response = await deleteData(`expends/${id}`)
    console.log(response);
    setAlert(response.statusText)
  }
  const funcGet = async (id) => {
    let arr = await getData(`expends/${id}`)
    let a = []
    let ay
    let ax = ["מספר הוצאה", "סכום", "הגובה", "קוד קבלה", "תאריך"]
    if (type == 1) {
      ay = Object.values(arr)
      ax.forEach((key, index) =>
        a.push(key + " :" + ay[index]));
    }
    else {
      for (let index = 0; index < arr.length; index++) {
        ay = Object.values(arr[index])
        console.log(ay);
        ax.forEach((key, i) => {
          a.push(key + " :" + ay[i])
        });
      }
    }
    setData(a);
  }
  useEffect(() => {
    if (type == 1) {
      setTitle(` :פרוט הוצאה מספר ${id}`)
      funcGet(id)
    }
    else
      if (type == 2) {
        setTitle(`  הוצאות מוסד מספר ${id}`)
        funcGet(`institute/${id}`)
      }
      else
        if (type == 3) {
          console.log(`  month/${id}/${month}/${year}`);
          setTitle(`  הוצאות מוסד מספר ${id}  בשנה${year} בחודש${month}`)
          funcGet(`month/${id}/${month}/${year}`)
        }
        else
          if (type == 4) {
            setTitle(`כל ההוצאות`)
            funcGet(``)
          }
          else
          if (type == 5) {
            funcDelete(id)
          }
  }, [draw]);
  return (context && (
    <div className="card flex flex-wrap justify-content-center gap-3">
      {data ? <><CardA p={data} title={title}></CardA> <Button label='לפעולות נוספות' onClick={() => (setData(null), setTipe(null), setMonth(null), setYear(null), setId(null))}></Button>
      </> :
        alert ? <><h1>{alert}</h1></> :
          <>
            {
              <>
                <Button label=" קוד הוצאה" text raised onClick={() => (setTipe(1))} />
                <Button label="הוצאה לפי קוד מוסד" severity="secondary" text raised onClick={() => (setTipe(2))} />
                <Button label="על ידי תאריך" severity="success" text raised onClick={() => (setTipe(3))} />
                <Button label=" הכל" text raised onClick={() => (setTipe(4))} />
                <Button label="עדכון" severity="info" text raised />
                <Button label="הוצאה חדשה" severity="warning" text raised />
                <Button label="מחיקה" severity="help" text raised onClick={() => (setTipe(5))}/>
                <Button label="חזרה" onClick={() => (navigate('/Home'))} />

              </>}
            {<><Button label="לקבלת נתונים" severity="help" text raised onClick={() => (setDraw(id))} /></>}
            {type == 1 ?
              <><InputNumber placeholder="הכנס קוד הוצאה" value={id} onChange={(e) => setId(e.value)} /></> :
              type == 2 ? <>
                <InputNumber placeholder="הכנס מספר מוסד" value={id} onChange={(e) => setId(e.value)} /></> :
                type == 3 ?
                  <>
                    <InputNumber placeholder="הכנס חודש" value={month} onChange={(e) => setMonth(e.value)} />
                    <InputNumber placeholder="הכנס שנה" value={year} onChange={(e) => setYear(e.value)} />
                    <InputNumber placeholder="הכנס קוד מוסד" value={id} onChange={(e) => setId(e.value)} /></> :
                  type == 4 ?
                    <>
                      {setDraw(1)} </> :
                       type == 5 ?
                    <>
                    <InputNumber placeholder="הכנס קוד מוסד" value={id} onChange={(e) => setId(e.value)} /> </>:
                    <></>

            }
          </>}
    </div>)
  );
}