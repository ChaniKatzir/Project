import React from 'react'; 
import { Card } from 'primereact/card';
export default function CardA(props,index) {
   
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
        </div>
    );
    
    return (  
        <div className="card flex justify-content-center">
           { console.log(props.p)};
           { console.log(props.p,props.s)}

           <Card kea={index} title= {props.title} className="md:w-25rem">
                
                    {props.p}
                    {/* {props.s} */}
                    {/* {props.p.map((element,index) => {
                        if(index%props.length==0)
                        return(<><p >{element}</p>
                        <h1></h1></>)
                        return(<p >{element}</p>)

                    })} */}
                
            </Card>

        </div>
    )
}
