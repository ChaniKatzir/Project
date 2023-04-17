import React, { useState, createContext } from "react";
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom'; 

import { store } from '../store/status'
import { Provider } from 'react-redux'
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../store/status";
import { useSelector } from "react-redux";

const Menu=(props) =>{
    const navigate = useNavigate();
    const arr = props.arr
    const icon= props.icon
    const command= props.navigate
    let items=[]
    // const [statusU,setStatusU] = useState((state) => state.counter.value);
    const statusU=props.status;
    const id=props.id;


    if(statusU==1){
    items=[{label:arr[0],icon:icon[0],comand:()=>{navigate(command[0])}},
        {label:arr[1],icon:icon[1],comand:()=>{navigate(command[1])}},
        {label:arr[2],icon:icon[2],comand:()=>{navigate(command[2])}},
        {label:arr[3],icon:icon[3],comand:()=>{navigate(command[3])}},
        {label:arr[4],icon:icon[4],comand:()=>{navigate(command[4])}},
        ]}

    else if(statusU==2){
    items=[{label:arr[0],icon:icon[0],comand:()=>{navigate(command[0])}},
        {label:arr[1],icon:icon[1],comand:()=>{navigate(command[1])}},
        {label:arr[2],icon:icon[2],comand:()=>{navigate(command[2])}},
        {label:arr[3],icon:icon[3],comand:()=>{navigate(command[3])}},
        ]}
        
    else{
    items=[{label:arr[0],icon:icon[0],comand:()=>{navigate(command[0])}},
        {label:arr[1],icon:icon[1],comand:()=>{navigate(command[1])}},
        ]}
        
    // [
    //     {label: 'בית', icon: 'pi pi-fw pi-home', command: ()=> { navigate("/Home1") } },
    //     {label: 'ניהול חשבונות', icon: 'pi pi-fw pi-calendar' ,  command: ()=> { navigate("/AccountManagement") }  },
    //     {label: 'תלמידים', icon: 'pi pi-fw pi-pencil', command: ()=> { navigate("/Home1/student") } },
    //     {label: 'צוות', icon: 'pi pi-fw pi-users', command: ()=> { navigate("/Home1/staff") }},
    //     {label: 'ניהול תוכן', icon: 'pi pi-paperclip', command: ()=> { navigate("/MaterialManagement") }}
    // ];

    return (<>
        <div className="card">
            <TabMenu model={items} />
        </div>
        </>
    )
}
export default Menu;
