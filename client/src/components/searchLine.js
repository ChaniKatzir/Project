import React, {useEffect,useState} from 'react'; 
import { InputText } from 'primereact/inputtext';
export default function SearchLine(props) { 
const onChange=(selected,key)=>{
    props.setObjUser((prev)=> ({...prev,[key]:selected}))
}
    return (
        <div >
            <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex-auto" id={props.id}>
                        <label className="font-bold block mb-2">
                            {props.name}
                        </label>
                        <InputText key={props.counter} id={props.id} keyfilter={props.type} className="w-full" onChange={(e)=>{onChange(e.target.value,props.id)}} />
                    <h1></h1>
                    </div>
            </div>
        </div>
    )
}
        