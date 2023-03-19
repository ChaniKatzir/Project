import React from 'react';
import { Button } from 'primereact/button';
import UseGet from '../hooks/Generic'
import { InputText } from "primereact/inputtext";

const Student=()=>{
    const onChage=(selected,key)=>{
        
    }
    // function makeObject(props){

    //     console.log("makeobject");
    //     var object={
    //         first_name:props.fn,
    //         last_name:props.ln,
    //         yearbook:props.yb,
    //         id_institute_student:props.idi,
    //         phone_number:props.pn,
    //         celphone_number:props.cn,
    //         id_person_student:props.ids
    //             }
    //     UseGet('https://localhost:2000/student/',object);
    // }
    return(<>
        <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="first name" id='fn' onChange={(e)=> onChage(e.target.value,"fn")}/>
                <InputText placeholder="last name" id='ln'/>
                <InputText placeholder="yearbook" id='yb'/>
                <InputText placeholder="id of the institute" id='idi'/>
                <InputText placeholder="phone number" id='pn'/>
                <InputText placeholder="celphone number" id='cn'/>
                <InputText placeholder="id student" id='ids'/>
                
        </span>

        <Button label="get student/s"  onClick={()=>{  onChage()
        // console.log("makeobject")
        // debugger
        // makeObject(document.getElementById("fn").target.value,
        // document.getElementById("ln").target.value,
        // document.getElementById("yb").target.value,
        // document.getElementById("idi").target.value,
        // document.getElementById("pn").target.value,
        // document.getElementById("cn").target.value,
        // document.getElementById("ids").target.value)
                                            }}/>

        </>)}
export default Student;