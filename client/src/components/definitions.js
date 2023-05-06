import React, { useContext } from "react";
import Menu from './menu'
import Context from "./context/Context"
import Search from './search'

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
<link rel="stylesheet" href="login.css"></link>
const Definitions = () => {
    const context = useContext(Context);
    console.log(context);
    return (<>
    <h1>דף זה עדין בבניה</h1>
       
    </>)

    
};
export default Definitions