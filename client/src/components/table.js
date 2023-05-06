import React from "react";
import MUIDataTable from "mui-datatables";

const yuseDataTable = (data, columns, options, tableName, exportData) => {
  
  const deletedRows = new Set();
  data.forEach((item, index) => {
    // if (
    //   (typeof item[item.length - 1] !== "string" &&
    //     item[item.length - 1]?.props["aria-label"]) === "IS_DELETED"
    // ) {
      // deletedRows.add(index);
    // }
  });

  options = {
    ...options,
    onDownload: (buildHead, buildBody, columns, dataa) => {
      if (exportData) {
        dataa = [...exportData];
      }
      return `\uFEFF${buildHead(columns)}${buildBody(dataa)}`;
    },
    setRowProps: (row, index) => {
      return {
        style: {
          textDecoration: deletedRows.has(index) ? "line-through" : "none",
          cursor: "pointer",
        },
      };
    },

    textLabels: {
      body: {
        noMatch: "לא נמצאו תוצאות",
        toolTip: "Sort",
      },
      pagination: {
        next: "דף הבא",
        previous: "דף קודם",
        rowsPerPage: "מס' שורות בעמוד:",
        displayRows: "מתוך",
        jumpToPage: "עבור לדף:",
      },
      toolbar: {
        search: "חיפוש",
        downloadCsv: "הורד CSV",
        print: "הדפס",
        viewColumns: "הצג עמודות",
        filterTable: "סינון טבלה",
      },
      filter: {
        all: "הכל",
        title: "מסנני טבלה",
        reset: "מחק",
      },
      viewColumns: {
        title: "הצג עמודות",
        titleAria: "הצג/הסתדר עמודות בטבלה",
      },
      selectedRows: {
        text: "שורות נבחרו",
        delete: "מחק",
        deleteAria: "מחק שורות שנבחרו",
      },
    },
  };
  return (
    <MUIDataTable
      title={tableName}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default yuseDataTable;

// import React, { useState, useEffect } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// // import { CustomerService } from './service/CustomerService';

// export default function Table(props) {
//     const [customers, setCustomers] = useState([]);

//     // useEffect(() => {
//     //     CustomerService.getCustomersMedium().then((data) => setCustomers(data));
//     // }, []);

//     return (
//         <div className="card">
//             <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
//                 {props.column.forEach(element => {
//                 <Column field={element} header={element} style={{ width: `${props.column.length/100})%` }}></Column>
                    
//                 })}
//             </DataTable>
//         </div>
//     );
// }