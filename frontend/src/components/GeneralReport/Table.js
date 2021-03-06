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
            title:'Batch ID', field:'batch'
        },
        {
            title:'Category', field:'category'
        },{
            title:'Barcode', field:'barcode'
        },
        {
            title:'Company', field:'company'
        },
        {
            title:'Product', field:'productType'
        },
        {
            title:'Wt/Vol', field:'WtVol'
        },
        {
            title:'Quantity', field:'quantity'
        },
        {
            title:'Expiry Date', field:'expiry'
        },
        {
            title:'Purchase Rate', field:'quantity'
        },{
            title:'MRP', field:'product'
        },
        {
            title:'Tagged Selling Price', field:'basicPrice'
        },
        {
            title:'Special Discount', field:'discount'
        },
        {
            title:'CGST', field:'gst%'
        },
        {
            title:'IGST', field:'gst%'
        },
        {
            title:'SGST', field:'gst%'
        },
        {
            title:'Total', field:'total'
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

