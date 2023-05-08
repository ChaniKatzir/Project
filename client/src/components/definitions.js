import React, { useState, useContext, useEffect, useRef } from "react";
import Menu1 from './menu'
import { Menu } from 'primereact/menu';
import Card from "./card";
import { Button } from "primereact/button";
import Context from "./context/Context"
import { InputNumber } from 'primereact/inputnumber';
import { Toast } from 'primereact/toast';
import yudatatable from './table';

import Search from './search'
import { useCrudFunctions } from "../hooks/useCrudFunctions";

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
<link rel="stylesheet" href="login.css"></link>
const Definitions = () => {

    const context = useContext(Context);
    const { putData, getData,deleteData } = useCrudFunctions();
    const [privateInstitute, setPrivateInstitute] = useState();
    const [choose, setChose] = useState();
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [data, setData] = useState();
    const toast = useRef(null);
    const menu2 = useRef(null);
    const [draw, setDraw] = useState();
    const options = { selectableRows: "none", filterTypy: "dropdown" }
  let perobj;
   
    const names = ["קוד מוסד","שכר לימוד", "מספר זהות מנהל", "כתובת", "כתובת המייל", "טלפון", "שם מוסד"];
    let definitionColumns = [{
        name: "id_institute",
        label:"קוד מוסד ",
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "tuition",
        label:  "שכר לימוד ",
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
        name: "id_institute",
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
            return <><i className="pi pi-trash" style={{ fontSize: '2rem' }} onClick={() => { deletefunc(data[tableMeta.rowIndex]) }} ></i>
            </>
          },
        },
      },
      ]
    //   const postfunc = async () => {
    //     if (person) {
    //       let err;
    //       if (btn == 5)
    //         perobj = await putData(``, person)
    //       else
    //         perobj = await postData(`staff`, person)
    //       try {
    //         err = perobj.response.data.message;
    //         toast.current.show({ severity: 'info', summary: 'ERROR', detail: err })
    //       }
    //       catch {
    //         toast.current.show({ severity: 'info', summary: 'הפרטים עודכנו בהצלחה', detail: err })
    //       }
    //       setData(null); setBtn(null); setId(null)
    //     }
    //   }

      const deletefunc = async (arr) => {
        console.log(arr[0]);
        perobj = await deleteData(`institute/${arr[0]}`)
        const err = perobj.message;
        toast.current.show({ severity: 'info', detail: err })
        setData(null);  setId(null)
      }

    const funcGet = async (id) => {
        let res;
        let datas = [];
        if (id == null)
            res = await getData(`institute/`)
        else res = await getData(`institute/${id}`)
        if (res == null) {
            let err = res.response.data.message;
            toast.current.show({ severity: 'info', summary: 'טעות בהזנת הנתונים', detail: err })
        }
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
                let arr=[]
                arr.push(datas)
                setData(arr)
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
            if (choose == 1) {
                setTitle(`פרטי כל המוסדות`)
                funcGet(null)
            }
            if (choose == 2) {
                setTitle(`פרטי מוסד מספר ${id}`)
                funcGet(id)
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
        {context && (
            <>
                {<Menu1 arr={["בית", "ניהול חשבונות", "תלמידים", "צוות", "ניהול תוכן", "הגדרות מוסד", "הודעות "]}
                    icon={["pi pi-fw pi-home", "pi pi-fw pi-calendar", "pi pi-fw pi-pencil", "pi pi-fw pi-users", "pi pi-paperclip", "pi pi-cog"]}
                    navigate={["/home", "/account", "/student", "/staff", "/materialManagement", "/definitions", "/messege"]} />
                }
               
                {data ? <>                   
                     {yudatatable(data, definitionColumns, options, title)}
                    <Button label="חזרה" onClick={() => (setDraw(null), setData(null), setChose(null), setId(null))}></Button>
                </> 
                : <>
                    <div className="card flex justify-content-center">
                        {<><Menu model={institutes} popup ref={menu2} />
                            <Button label="למוסדות נוספים" icon="pi pi-bars" onClick={(e) => menu2.current.toggle(e)} id="left" /></>
                        }
                    </div>
                    {(choose ?
                        <div className='card'> {
                            choose == 2 ? <InputNumber placeholder="הכנס קוד מוסד" value={id} onChange={(e) => setId(e.value)} /> :
                                choose == 3 ? <InputNumber placeholder="הכנס קוד מוסד" value={id} onChange={(e) => setId(e.value)} /> :
                                    //עדכון,הוספה ומחיקה 
                                    <></>}
                            <Button label="לקבלת נתונים" onClick={() => (setDraw(1))} />
                        </div>
                        :
                        <></>)}
                {privateInstitute ? <><Card names={names} defin={privateInstitute} title={"פרטי המוסד"}></Card></> : <></>}

                </>
                }
            </>)
        }
    </>)


};
export default Definitions