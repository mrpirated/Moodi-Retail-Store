import MaterialTable from "material-table";
import React from "react";

export default function DataTable(props) {
	return (
		<React.Fragment>
			<MaterialTable
				title={props.title}
				data={props.data}
				actions={props.actions}
				columns={props.columns}
				options={{
					// filtering: true,
					exportButton: true,
				}}
			/>
		</React.Fragment>
	);
}
