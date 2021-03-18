import MaterialTable from "material-table";
import React from "react";

export default function DataTable(props) {
	return (
		<React.Fragment>
			<MaterialTable
				title={props.title}
				data={props.data}
				columns={props.columns}
				options={{
					// filtering: true,
					exportButton: true,
				}}
			/>
		</React.Fragment>
	);
}
