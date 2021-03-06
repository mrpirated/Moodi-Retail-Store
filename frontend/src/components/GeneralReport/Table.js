import { Button, IconButton, Link } from "@material-ui/core";

export const columns = [
	// {
	// 	cellStyle: {
	// 		width: 100,
	// 		maxWidth: 100,
	// 	},
	// 	headerStyle: {
	// 		width: 100,
	// 		maxWidth: 100,
	// 	},
	// },

	{
		title: "Sr No",
		field: "num",
	},
	{
		title: "Batches",
		field: "batch",

		// render: () => {
		// 	<Button >Button</Button>;
		// },
		// render: (rowdata) => {
		// 	<Link to='/'>view</Link>;
		// },
	},

	{
		title: "Category",
		field: "category",
	},
	// {
	//     title:'Barcode', field:'barcode'
	// },
	{
		title: "Company",
		field: "company",
	},
	{
		title: "Product",
		field: "productType",
	},
	{
		title: "Wt/Vol",
		field: "WtVol",
	},
	// {
	//     title:'Quantity', field:'quantity'
	// },
	// {
	//     title:'Expiry Date', field:'expiry'
	// },
	// {
	//     title:'Purchase Rate', field:'quantity'
	// },
	// {
	//     title:'MRP', field:'product'
	// },
	// {
	//     title:'Tagged Selling Price', field:'basicPrice'
	// },
	// {
	//     title:'Special Discount', field:'discount'
	// },
	// {
	//     title:'CGST', field:'gst%'
	// },
	// {
	//     title:'IGST', field:'gst%'
	// },
	// {
	//     title:'SGST', field:'gst%'
	// },
	{
		title: "Total",
		field: "total",
	},
	// {
	// 	title: "ItemCode",
	// 	field: "itemcode",
	// },
];
