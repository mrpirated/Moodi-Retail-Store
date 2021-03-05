import React from 'react'
import MaterialTable from 'material-table';

function Table(props) {

    const data = [
    ]

    const columns = [
        {
            title:'Date', field:'date', cellStyle: {
            width: 100,
            maxWidth: 100
            },
            headerStyle: {
            width:100,
            maxWidth: 100
            }
        },
        {
            title:'Transaction ID', field:'transactionID'
        },{
            title:'Category', field:'category'
        },{
            title:'Product Type', field:'productType'
        },{
            title:'Company', field:'company'
        },{
            title:'Quantity', field:'quantity'
        },{
            title:'Wt/Vol', field:'WtVol'
        },{
            title:'Expiry Date', field:'expiryDate'
        },{
            title:'HSN Code', field:'HSNCode'
        },{
            title:'Barcode', field:'barcode'
        },{
            title:'Product', field:'product'
        },{
            title:'MRP', field:'mrp'
        },{
            title:'Basic Price', field:'basicPrice'
        },{
            title:'GST%', field:'gst%'
        },{
            title:'Purchase Rate', field:'purchaseRate'
        },{
            title:'Total', field:'total'
        }
    ]

    return (
        <div>
            <MaterialTable title={props.title}
                data={data}
                columns={columns}
                options={{
                    // filtering: true,
                    exportButton: true
                }}
            />
        </div>
    )
}

export default Table

