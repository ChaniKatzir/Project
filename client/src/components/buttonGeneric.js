import React from 'react'; 
import { Button } from 'primereact/button';

export default function BasicDemo(props) {
    return (
        <div className="card flex justify-content-center">
            <Button label={props.label}/>
        </div>
    )
}