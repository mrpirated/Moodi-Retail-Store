<<<<<<< HEAD
import MaterialTable from "material-table";

export default function DataTable(props) {
	return (
		<div>
			<MaterialTable
				title={props.title}
				data={props.data}
				columns={props.columns}
				options={{
					// filtering: true,
					exportButton: true,
				}}
			/>
		</div>
	);
=======
import MaterialTable from 'material-table';
import React from 'react';

export default function DataTable(props) {
    return (
        <React.Fragment>
            <MaterialTable title={props.title}
               // data={data}
                columns={props.columns}
                options={{
                    // filtering: true,
                    exportButton: true
                }}
            />
        </React.Fragment>
    )
>>>>>>> 08aec07cf04b814d210c73db62b52a760eee5935
}
