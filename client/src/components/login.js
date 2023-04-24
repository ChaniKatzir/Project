import React, { useState, createContext, useEffect } from "react";

import { useCrudFunctions } from "../hooks/useCrudFunctions";

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme

import { InputNumber } from 'primereact/inputnumber';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";


const Login = (props) => {
  const { getData } = useCrudFunctions()
  const [valueid, setValueid] = useState();
  const [valuepass, setValuepass] = useState();
  const [statusP, setStatus] = useState();

  const navigate = useNavigate();

  const func = async (props) => {
    const a = await getData(`access/${valueid}/${valuepass}`);
    setStatus(a)
  }

  useEffect(() => {
    if (statusP) {
      props.setStatus({ "status": statusP, "id": valueid });
      navigate('/Home');
    }
  }, [statusP]);


  return (<>{statusP?<></>:
   <div className="card">
        <InputNumber placeholder="enter your id number" value={valueid} onChange={(e) => setValueid(e.value)}
        //  min={10000000} max={999999999} 
        />
        <Password placeholder="enter your password" value={valuepass} feedback={false} onChange={(e) => setValuepass(e.target.value)} toggleMask />
        <Button label="הכנס" onClick={() => { func() }} /></div>}
  </>
  )
};
export default Login