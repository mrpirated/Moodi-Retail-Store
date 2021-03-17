   export  const columns = [
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

  