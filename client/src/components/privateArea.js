import React from "react";
import Menue from './menu'
import  Card from "./card";

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
<link rel="stylesheet" href="login.css"></link>

const Area = () => {
    return (<>
        <Menue status={3} id={44}/>
      <Card/>
    </>)
};
export default Area