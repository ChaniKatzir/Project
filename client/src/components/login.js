import React, { useState } from "react";
import Home1 from "./Home1";

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme

import { InputNumber } from 'primereact/inputnumber';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Login=()=>{

    const [valueid, setValueid] = useState();
    const [valuepass, setValuepass] = useState('');

    return(<>
     <InputNumber placeholder="enter your id number" inputId="minmax" valueid={valueid} onValueChange={(e) => setValueid(e.value)} min={10000000} max={999999999} />
     <Password placeholder="enter your password" value={valuepass} onChange={(e) => setValuepass(e.target.value)} toggleMask />
     <Button label="Submit" onClick={()=>{}} />
    </>
    )
};
export default Login