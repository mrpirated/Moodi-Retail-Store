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
}
