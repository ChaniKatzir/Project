import React from 'react';
import Menue from './menu'
import Pop from './popStudentGeneric'
import PopAdder from './popStudentsAdder'
import PopPut from './popStudentsUpdate'
import PopDelete from './popStudentsDelete'


import useGet from '../hooks/getData'

const Student1=()=>{
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
   <Menue/>
   <Pop label="חיפוש תלמיד/ים"/>
   <PopAdder label="הוספת תלמיד חדש"/>
   <PopPut label="עדכון פרטי תלמיד"/>
   <PopDelete label="מחיקת תלמיד"/>
   

        {/* <Button label="get student/s"  onClick={()=>{  onChage()
        // console.log("makeobject")
        // 
        // makeObject(document.getElementById("fn").target.value,
        // document.getElementById("ln").target.value,
        // document.getElementById("yb").target.value,
        // document.getElementById("idi").target.value,
        // document.getElementById("pn").target.value,
        // document.getElementById("cn").target.value,
        // document.getElementById("ids").target.value)
                                            }}/> */}

        </>)}
export default Student1;