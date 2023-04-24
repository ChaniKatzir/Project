import { useEffect, useState , useContext} from "react";
import Context from "./context/Context"
import "primeicons/primeicons.css";//icone
import "primereact/resources/primereact.min.css";//core
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import Menu from "./menu";
// import SearchLine from "./searchLine"
import { Button } from "primereact/button";
import { useCrudFunctions} from "../hooks/useCrudFunctions";
import Table from "./table";
import SearchLine from "./searchLine";
<link rel="stylesheet" href="login.css"></link>
 
 const Student = (props) => {
    const {putData}=useCrudFunctions();
    const [students, setStudents] = useState('');
    const [data, setData] = useState('');
    let [counter, setCounter] = useState(0);
    let [columns, setColumns] = useState();
    const [objUser,setObjUser]=useState({})

    // const [body, setBody] = useState();
    let body={};
    
    const context = useContext(Context);
    const name=["מספר זהות","שם פרטי","שם משפחה","מספר טלפון","מספר פלאפון","שנתון","קוד מוסד"];
    const id=["id_person_student","first_name","last_name","phone_number","celphone_number","yearbook","id_person_student"];

    const func=async()=>{
     
        const a= await putData('student',objUser) ;
        setStudents(a);
      }
      const setDatafunc=(data)=>{
        setData(data)
      }

      // useEffect(() => {
      //   
      //   console.log("counterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",counter);
      //   console.log("body",body);

      //   body[id[counter-1]]=data
      //   setData('')
      // }, [counter]);
    
      useEffect(() => {
        if(students)
        {
           let keys=Object.keys(students)
           setColumns(keys);
        }        
      }, [students]);
return(<> 
    {
        <>
        {students?<><Table column={columns}/></> :<></>}
        {context.status==1?<> 
            <Menu 
             arr={["בית","ניהול חשבונות","תלמידים","צוות","ניהול תוכן","הגדרות מוסד"]} 
             icon={["pi pi-fw pi-home","pi pi-fw pi-calendar","pi pi-fw pi-pencil","pi pi-fw pi-users","pi pi-paperclip","pi pi-cog"]} 
             navigate={["/Home","/AccountManagement","/Student","/Staff","/MaterialManagement","/Definitions"]} />
        </>:
        <>
            <Menu 
            arr={["בית","תלמידים","איזור אישי","ניהול תוכן"]} 
            icon={["pi pi-fw pi-home","pi pi-fw pi-pencil","pi pi-fw pi-book","pi pi-paperclip"]} 
            navigate={["/Home","/Student","/PrivateArea","/MaterialManagement"]}/>  
        </>}
        

        {name.map((name,index) => {
           return(

             <SearchLine name={name}  id={id[index]} data={setDatafunc} setObjUser={setObjUser}/>
           )
        })}
            
            <Button label="חפש" onClick={()=>{func()}}/>
            

        </>
    }
    </>)}
    export default Student;