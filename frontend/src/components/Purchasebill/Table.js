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
            title:'Barcode', field:'barcode', headerStyle: { fontSize: 18, fontWeight: 'bold'}
        },
        {
            title:'Category', field:'category', headerStyle: { fontSize: 18, fontWeight: 'bold'}
        },
        {
            title:'Product', field:'product', headerStyle: { fontSize: 18, fontWeight: 'bold'}
        },
        {
            title:'Company', field:'company', headerStyle: { fontSize: 18, fontWeight: 'bold'}
        },{
            title:'Quantity', field:'quantity', headerStyle: { fontSize: 18, fontWeight: 'bold'}
        },{
            title:'Wt/Vol', field:'WtVol', headerStyle: { fontSize: 18, fontWeight: 'bold'}
        },
        {
            title:'HSN Code', field:'HSNCode', headerStyle: { fontSize: 18, fontWeight: 'bold'}
        },
        {
            title:'Expiry Date', field:'expiryDate', headerStyle: { fontSize: 18, fontWeight: 'bold'}
        },{
            title:'MRP', field:'mrp', headerStyle: { fontSize: 18, fontWeight: 'bold'}
        },{
            title:'Basic Price', field:'basicPrice', headerStyle: { fontSize: 18, fontWeight: 'bold'}
        },{
            title:'GST%', field:'gst%', headerStyle: { fontSize: 18, fontWeight: 'bold'}
        },{
            title:'Purchase Rate', field:'purchaseRate', headerStyle: { fontSize: 18, fontWeight: 'bold'}
        },{
            title:'Total', field:'total', headerStyle: { fontSize: 18, fontWeight: 'bold'}
        }
    ]

    return (
        <div>
            <MaterialTable title={props.title}
                data={data}
                columns={columns}
                options={{
                    // filtering: true,
                    exportButton: false
                }}
            />
        </div>
    )
}

export default Table

