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
            title:'Barcode', field:'barcode'
        },
        {
            title:'Company', field:'company'
        },
        {
            title:'Product', field:'productType'
        },
        {
            title:'Supplier ID', field:'supplierid'
        },
        {
            title:'Supplier Name', field:'supplier'
        },
        {
            title:'Purchase Rate', field:'quantity'
        },
        {
            title:'Return Type', field:'returnType'
        },
        {
            title:'Wt/Vol', field:'Wt/Vol'
        },
        {
            title:'ExpiryDate', field:'expirydate'
        },
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

