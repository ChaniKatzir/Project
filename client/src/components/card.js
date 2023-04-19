import React from 'react'; 
import { Card } from 'primereact/card';


export default function CardA(props) {
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
        </div>
    );
    
    return (  
        <div className="card flex justify-content-center">
            <Card  footer={props.data} header={props.title} className="md:w-25rem">
            </Card>
        </div>
    )
}
