import React, { useState, createContext, useEffect,useRef } from "react";

import { useCrudFunctions } from "../hooks/useCrudFunctions";

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme

import { InputNumber } from 'primereact/inputnumber';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';


const Login = (props) => {
  const { getData } = useCrudFunctions()
  const [valueid, setValueid] = useState();
  const [valuepass, setValuepass] = useState();
  const [statusP, setStatusP] = useState();
  const [err, setErr] = useState();

  const toast = useRef(null);
  const navigate = useNavigate();

  const func = async () => {
    const a = await getData(`access/${valueid}/${valuepass}`);
    if(a==1||a==2||a==3){
      setStatusP(a)
    }
    else
      setErr(a.response.data.message);
    }
    
  useEffect(() => {
    if (err) {
      toast.current.show({ severity: 'info', summary: 'טעות בהזנת הנתונים', detail:err })
    }
  }, [err]);

  useEffect(() => {
    if (statusP) {
      props.setStatus({ "status": statusP, "id": valueid });
      navigate('/home');
    }
  }, [statusP]);

  return (
  <>{statusP?<></>:
   <div className="form">
        <h1>ברוכים  הבאים</h1>
        <h3></h3>
        <InputNumber  placeholder="הקש מספר זהות" value={valueid} onChange={(e) => setValueid(e.value)}useGrouping={false} />
        <h1></h1>
        <Password placeholder="הקש סיסמא" value={valuepass} feedback={false} onChange={(e) => setValuepass(e.target.value)} toggleMask useGrouping={false}/>
        <h1></h1>
        <Toast ref={toast} />
        <Button label="כניסה" onClick={() => { func() }} /></div>}
  </>
  )
};
export default Login