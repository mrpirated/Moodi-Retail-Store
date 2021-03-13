import MaterialTable from 'material-table';

function DataTable(props) {
    return (
        <div>
            <MaterialTable title={props.title}
               // data={data}
                columns={props.columns}
                options={{
                    // filtering: true,
                    exportButton: true
                }}
            />
        </div>
    )
}

export default DataTable

