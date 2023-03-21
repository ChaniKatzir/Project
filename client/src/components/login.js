import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

import useGet from "../hooks/useGet";
import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme

import Home from "./Home"
import { InputNumber } from 'primereact/inputnumber';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Login=()=>{
    console.log("pppp");
    const [valueid, setValueid] = useState();
    const [valuepass, setValuepass] = useState('');
    const [enter, setEnter] = useState(false);
    const [status, setStatus] = useState();
    const UserContext = createContext()
    
    if(enter)
   { 
        const{ data, loading, error, refetch}=useGet(`${valueid}/${valuepass}`);
        console.log(data);
        while(loading){}
        setStatus(data)
        setEnter(true)
    }


    return(<>
    {enter ?  <><Home/> 
      <UserContext.Provider value={status}>
      </UserContext.Provider></>
    :<>
    <InputNumber placeholder="enter your id number" inputId="minmax" valueid={valueid} onChange={(e) => setValueid(e.target.value)}
    //  min={10000000} max={999999999} 
     />
    <Password placeholder="enter your password" value={valuepass} feedback={false} onChange={(e) => setValuepass(e.target.value)}  toggleMask />
    <Button label="Submit" onClick={()=>{setEnter(true)}} />
    </>}
   
    </>
    )
};
export default Login