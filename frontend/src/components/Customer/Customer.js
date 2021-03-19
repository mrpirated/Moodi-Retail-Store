import Navbar from "../Home/Navbar";
import { useState } from "react";
import "./customer.css";
import { columns } from "./tablecolumns.js";
import Input from "../Input";
import DataTable from "../DataTable.js";
import axios from "axios";
import Search from "../searchbar";
const config = require("../../config/apipaths.json");
export default function Customer() {
	const [CustomerName, setCustomerName] = useState("");
	const [Name, setName] = useState("");
	const [Phone, setPhone] = useState("");
	const [ID, setID] = useState("");
	//const [GST, setGST] = useState("");
	const [Address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [ledger, setLedger] = useState("");
	const details = [
		{ field: "Name", value: Name },
		{ field: "Phone Number", value: Phone },
		{ field: "Customer ID:", value: ID },
		{ field: "Address:", value: Address },
		{ field: "Email ID:", value: email },
		{ field: "Ledger:", value: ledger },
	];
	const OnSearch = (event) => {
		//console.log(SupplierName);
		axios
			.get(config.customerDetails, {
				params: {
					UserId: "4584548524",
					Name: CustomerName,
				},
			})
			.then((res) => {
				//setData(res.data);
				console.log(res.data);
				setName(res.data.Name);
				setPhone(res.data.phone);
				setAddress(res.data.Address);
				setEmail(res.data.Email);
				setLedger(res.data.Ledger);
				//setGST(res.data[0].GST_No);
				setID(res.data.Customer_Id);
				console.log(res.data.Name);
			});
		event.preventDefault();
	};
	const OnChange = (event) => {
		//event.preventDefault();
		setCustomerName(event.target.value);
	};
	return (
		<div>
			<Navbar title='Customer Details' />
			{/* <Search title='Search by Customer name' /> */}
			<form onSubmit={OnSearch} className='form'>
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
			</form>
			<hr className='hr-style' />
			<div className='details'>
				{details.map((item, index) => {
					return <Input value={item.value} field={item.field} key={index} />;
				})}
			</div>
			<hr className='hr-style' />
			<DataTable title='Customer Table' columns={columns} />
		</div>
	);
}
