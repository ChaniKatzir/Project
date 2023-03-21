import React from "react";
import Menue from './menu3Generic'
import Search from './search'

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme


const Home3=()=>{

   
    return(<>
    <Menue/>
    <Search placeholder="חיפוש בחומר הלימוד"/>   
    </>)
};
export default Home3