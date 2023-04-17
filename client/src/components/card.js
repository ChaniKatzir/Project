import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import  getData from "../hooks/getData";


export default function CardA() {
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
        </div>
    );
    const id=44;
    const status=3;
    let a={};


    const st=async(x)=>{
         a= await getData(`${x}/${id}`) ;
        return a;
    }

    if(status===3)
     a=st("student");
   else
    a=st("staff")

    return (
        <div className="card flex justify-content-center">
            <Card  footer={footer} header={header} className="md:w-25rem">
                <p> name:    
                    {a.first_name}
                </p>
                <p> la
                </p>
                   
            </Card>
        </div>
    )
}
