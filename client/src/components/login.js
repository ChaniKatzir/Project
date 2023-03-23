import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

import  getData from "../hooks/getData";

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme

import Home from "./Home"
import { InputNumber } from 'primereact/inputnumber';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import axios from "axios";


// const log=(valueid,valuepass)=>{
  
//   // 
//   return data;
// }

const Login=()=>{
    
    const [valueid, setValueid] = useState('');
    const [valuepass, setValuepass] = useState('');
    // const[data, loading, error, refetch] =useGet(`${valueid}/${valuepass}`);
    const [enter, setEnter] = useState(false);
    const [statusP, setStatus] = useState('');
    const UserContext = createContext()
  

    return(<>
    {statusP ?  <> 
      <Home status={statusP}/>
      </>
    :<>
    <InputNumber placeholder="enter your id number"  value={valueid} onChange={(e) => setValueid(e.value)}
    //  min={10000000} max={999999999} 
     />
    <Password placeholder="enter your password" value={valuepass} feedback={false} onChange={(e) => setValuepass(e.target.value)}  toggleMask />
    <Button label="Submit" onClick={()=>{setStatus(getData(`${valueid}/${valuepass}`))}} />
    </>}
    </>
    )
};
export default Login