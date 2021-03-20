import Navbar from "../Home/Navbar";
import { useState, useEffect } from "react";
import "./Supplier.css";
import { columns } from "../Supplier/Table";
import DataTable from "../DataTable";
import Search from "../searchbar";
import Input from "../Input";
import axios from "axios";
const config = require("../../config/apipaths.json");
export default function Supplier() {
	const [data, setData] = useState([{}]);
	// const [SupplierName, setSupplierName] = useState("");
	// const [Name, setName] = useState("");
	// const [Phone, setPhone] = useState("");
	// const [ID, setID] = useState("");
	// const [GST, setGST] = useState("");
	// const [Address, setAddress] = useState("");
	// const [email, setEmail] = useState("");
	// const [ledger, setLedger] = useState("");
	//const [data, setData] = useState([{}]);
	// const details = [
	// 	{ field: "Name", value: Name },
	// 	{ field: "Phone Number", value: Phone },
	// 	{ field: "Supplier ID:", value: ID },
	// 	{ field: "GST Number", value: GST },
	// 	{ field: "Address:", value: Address },
	// 	{ field: "Email ID:", value: email },
	// 	{ field: "Ledger:", value: ledger },
	// ];
	useEffect(async () => {
		const result = await axios
			.get(config.supplierDetails, {
				params: {
					UserId: "4584548524",
				},
			})
			.then((res) => {
				//setData(res.data);
				//console.log(res.data);
				let temp = [];
				//console.log(items[0].Line);
				for (let i = 0; i < res.data.length; i++) {
					let t = {
						name: res.data[i].Name,
						num: i + 1,
						phone: res.data[i].phone,
						//barcode:items.Batches[0],
						address: res.data[i].Address,
						email: res.data[i].Email,
						ledger: res.data[i].Ledger,
						id: res.data[i].Supplier_Id,
						gst: res.data[i].GST_No,
					};
					temp.push(t);
					//console.log(temp);
				}

				//console.log("Hello");
				setData(temp);
				// setName(res.data[0].Name);
				// setPhone(res.data[0].phone);
				// setAddress(res.data[0].Address);
				// setEmail(res.data[0].Email);
				// setLedger(res.data[0].Ledger);
				// setGST(res.data[0].GST_No);
				// setID(res.data[0].Supplier_Id);
				//console.log(res.data[0].Name);
			});
	}, []);
	// const OnSearch = (event) => {
	// 	//console.log(SupplierName);
	// 	axios
	// 		.get(config.supplierDetails, {
	// 			params: {
	// 				UserId: "4584548524",
	// 				Name: SupplierName,
	// 			},
	// 		})
	// 		.then((res) => {
	// 			//setData(res.data);
	// 			//console.log(res.data);
	// 			setName(res.data[0].Name);
	// 			setPhone(res.data[0].phone);
	// 			setAddress(res.data[0].Address);
	// 			setEmail(res.data[0].Email);
	// 			setLedger(res.data[0].Ledger);
	// 			setGST(res.data[0].GST_No);
	// 			setID(res.data[0].Supplier_Id);
	// 			//console.log(res.data[0].Name);
	// 		});
	// 	event.preventDefault();
	// };
	// const OnChange = (event) => {
	// 	//event.preventDefault();
	// 	setSupplierName(event.target.value);
	// };
	const actions = [
		{
			icon: "more",
			tooltip: "More Details",
			onClick: (event, rowData) => {
				console.log(rowData);
			},
		},
	];
	return (
		<div>
			<Navbar title='Supplier Details' />
			{/* <Search OnSearch={OnSearchChild} title='Search Supplier Name' /> */}
			{/* <form onSubmit={OnSearch} className='form'>
				<label style={{ paddingRight: "10px", fontWeight: "bolder" }}>
					{"Search Supplier Name"}{" "}
				</label>
				<input
					value={SupplierName}
					onChange={OnChange}
					type='text'
					style={{ marginRight: "10px", fontSize: "25px" }}
				/>
				<button
					style={{
						height: "40px",
						marginLeft: "20px",
						fontSize: "20px",
						padding: "5px",
					}}
				>
					Get Details
				</button>
			</form>
			<hr className='hr-style' />
			<div className='details'>
				{details.map((item, index) => {
					return <Input value={item.value} field={item.field} key={index} />;
				})}
			</div>
			<hr className='hr-style' /> */}
			<DataTable
				title='Supplier Table'
				columns={columns}
				actions={actions}
				data={data}
			/>
		</div>
	);
}
