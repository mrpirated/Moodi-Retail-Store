import React from 'react'
import MaterialTable from 'material-table';

function Table(props) {

    const data = [
    ]

    const columns = [
        {
            title:'NO.', cellStyle: {
            width: 100,
            maxWidth: 100
            },
            headerStyle: {
            width:100,
            maxWidth: 100
            }
        },
        {
            title:'Transaction ID', field:'transaction'
        },
        {
            title:'Total Amount Paid', field:'Amount'
        },{
            title:'HSN', field:'hsn'
        },
        {
            title:'%CGST', field:'cgst'
        },
        {
            title:'%SGST', field:'sgst'
        },
        {
            title:'%IGST', field:'igst'
        },
        {
            title:'CGST', field:'%cgst'
        },
        {
            title:'SGST', field:'%sgst'
        },
        
        {
            title:'IGST', field:'%igst'
        },{
            title:'Total Tax', field:'total'
        },
        {
            title:'Mode of Payment', field:'mode'
        }
    ]

    return (
        <div>
            <MaterialTable title={props.title}
                data={data}
                columns={columns}
                options={{
                     filtering: true,
                    exportButton: true
                }}
            />
        </div>
    )
}

export default Table

