import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { CustomerService } from './service/CustomerService';

export default function Table(props) {
    const [customers, setCustomers] = useState([]);

    // useEffect(() => {
    //     CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    // }, []);

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                {props.column.forEach(element => {
                <Column field={element} header={element} style={{ width: `${props.column.length/100})%` }}></Column>
                    
                })}
            </DataTable>
        </div>
    );
}