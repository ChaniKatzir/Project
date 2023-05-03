import React from 'react'; 
import { Card } from 'primereact/card';
export default function CardA(props,index) {
   
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
        </div>
    );
    
    return (  
        <div className="card flex justify-content-center">


           <Card kea={index} title= {props.title} className="md:w-25rem">
                
                    {/* {props.p}
                    {props.s} */}
                    {props.p?<>{props.p.map((element,index) => {
                        return(<>{element}</>)
                    })}</>:<></>}
                
            </Card>

        </div>
    )
}
