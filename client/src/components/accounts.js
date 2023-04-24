import React, { useContext } from "react";
import Menu from './menu'
import Context from "./context/Context"
import Search from './search'

import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import Table from "./table";
import BasicDemo from "./basicdemo";
<link rel="stylesheet" href="login.css"></link>
const Account = () => {

  const [id, setId] = useState();
  const [institute, setInstitute] = useState();

    const context = useContext(Context);
    console.log(context);
   
    const findOne = async (props) => {
        const a = await getData(`expends/${id}`);
      }
    const findAllinst = async (props) => {
        const a = await getData(`expends/institute/${id}`);
      }
    return (<>
        {context && (<>
        <BasicDemo></BasicDemo>
      
        </>)
        }
    </>)

    
};
export default Account