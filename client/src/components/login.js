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
      toast.current.show({ severity: 'info', summary: 'Error', detail:err })
    }
  }, [err]);

  useEffect(() => {
    if (statusP) {
      props.setStatus({ "status": statusP, "id": valueid });
      navigate('/Home');
    }
  }, [statusP]);

  return (
  <>{statusP?<></>:
   <div className="form">
        <InputNumber placeholder="enter your id number" value={valueid} onChange={(e) => setValueid(e.value)}
        //  min={10000000} max={999999999} 
        />
        <h1></h1>
        <Password placeholder="enter your password" value={valuepass} feedback={false} onChange={(e) => setValuepass(e.target.value)} toggleMask />
        <h1></h1>
        <Toast ref={toast} />
        <Button label="הכנס" onClick={() => { func() }} /></div>}
  </>
  )
};
export default Login