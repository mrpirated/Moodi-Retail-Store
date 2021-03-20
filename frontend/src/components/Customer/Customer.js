import Navbar from "../Home/Navbar";
import { useState, useEffect } from "react";
import "./customer.css";
import { columns } from "./tablecolumns.js";
import Input from "../Input";
import DataTable from "../DataTable.js";
import axios from "axios";
import Search from "../searchbar";
const config = require("../../config/apipaths.json");
export default function Customer() {
	//const [CustomerName, setCustomerName] = useState("");
	const [data, setData] = useState([{}]);
	// const [Name, setName] = useState("");
	// const [Phone, setPhone] = useState("");
	// const [ID, setID] = useState("");
	// //const [GST, setGST] = useState("");
	// const [Address, setAddress] = useState("");
	// const [email, setEmail] = useState("");
	// const [ledger, setLedger] = useState("");
	// const details = [
	// 	{ field: "Name", value: Name },
	// 	{ field: "Phone Number", value: Phone },
	// 	{ field: "Customer ID", value: ID },
	// 	{ field: "Address", value: Address },
	// 	{ field: "Email", value: email },
	// 	{ field: "Ledger", value: ledger },
	// ];
	useEffect(async () => {
		const result = await axios
			.get(config.customerDetails, {
				params: {
					UserId: "4584548524",
					//Name: CustomerName,
				},
			})
			.then((res) => {
				//setData(res.data);
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
						id: res.data[i].Customer_Id,
					};
					temp.push(t);
					//console.log(temp);
				}

				console.log("Hello");
				setData(temp);
			});
	}, []);
	const OnSearch = (event) => {
		//console.log(SupplierName);
		axios
			.get(config.customerDetails, {
				params: {
					UserId: "4584548524",
					//Name: CustomerName,
				},
			})
			.then((res) => {
				//setData(res.data);
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
						id: res.data[i].Customer_Id,
					};
					temp.push(t);
					//console.log(temp);
				}

				console.log(temp);
				setData(temp);
				// console.log(res.data);
				// setName(res.data.Name);
				// setPhone(res.data.phone);
				// setAddress(res.data.Address);
				// setEmail(res.data.Email);
				// setLedger(res.data.Ledger);
				// //setGST(res.data[0].GST_No);
				// setID(res.data.Customer_Id);
				// console.log(res.data.Name);
			});
		event.preventDefault();
	};
	// const OnChange = (event) => {
	// 	//event.preventDefault();
	// 	setCustomerName(event.target.value);
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
			<Navbar title='Customer Details' />
			{/* <Search title='Search by Customer name' /> */}
			{/* <form onSubmit={OnSearch} className='form'>
				<label style={{ paddingRight: "10px", fontWeight: "bolder" }}>
					{"Search by Customer name"}{" "}
				</label>
				<input
					value={CustomerName}
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
			</form> */}
			{/* <hr className='hr-style' />
			<div className='details'>
				{details.map((item, index) => {
					return <Input value={item.value} field={item.field} key={index} />;
				})}
			</div>
			<hr className='hr-style' /> */}
			<DataTable
				title='Customer Table'
				columns={columns}
				actions={actions}
				data={data}
			/>
		</div>
	);
}
