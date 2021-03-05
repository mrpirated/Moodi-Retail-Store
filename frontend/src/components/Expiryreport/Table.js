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
            title:'Company Name', field:'name'
        },{
            title:'Product', field:'product'
        },
        {
            title:'Wt/volume', field:'wt/volume'
        },
        {
            title:'Quantity', field:'quantity'
        },
        {
            title:'MFG', field:'mfg'
        },
        {
            title:'Purchase Date', field:'purchase_date'
        },
        {
            title:'Expiry Date', field:'expiry_date'
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

