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
        },{
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
        },{
            title:'MRP', field:'product'
        },
        {
            title:'GST', field:'gst%'
        },
        {
            title:'Selling Price Rate', field:'basicPrice'
        },
        {
            title:'Discount', field:'mrp'
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

