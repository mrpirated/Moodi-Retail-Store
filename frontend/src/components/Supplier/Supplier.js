import Navbar from "../Home/Navbar";
import { useState } from "react";
import "./Supplier.css";
import { columns } from "../Supplier/Table";
import DataTable from "../DataTable";
import Search from "../searchbar";
import Input from "../Input";
import axios from "axios";
const config = require("../../config/apipaths.json");
export default function Supplier() {
	const details = [
		{ field: "Name" },
		{ field: "Phone Number" },
		{ field: "Supplier ID:" },
		{ field: "GST Number" },
		{ field: "Address:" },
		{ field: "Email ID:" },
		{ field: "Ledger:" },
	];
	const [Name, setName] = useState("");
	const [Phone, setPhone] = useState("");
	const [ID, setID] = useState("");
	const [GST, setGST] = useState("");
	const [Address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [ledger, setLedger] = useState("");
	const [data, setData] = useState([{}]);
	const OnSearchChild = (childData) => {
		console.log(childData);
		axios
			.get(config.supplierDetails, {
				params: {
					UserId: "4584548524",
					Name: childData,
				},
			})
			.then((res) => {
				setData(res.data);
				console.log(data);
				setName(data.Name);
				setPhone(data.phone);
				setAddress(data.Address);
				setEmail(data.Email);
				setLedger(data.Ledger);
				setGST(data.GST_No);
				setID(data.Supplier_Id);
			});
	};
	return (
		<div>
			<Navbar title='Supplier Details' />
			<Search OnSearch={OnSearchChild} title='Search Supplier Name' />
			<hr className='hr-style' />
			<div className='details'>
				{details.map((item, index) => {
					return <Input field={item.field} key={index} />;
				})}
			</div>
			<hr className='hr-style' />
			<DataTable title='Supplier Table' columns={columns} />
		</div>
	);
}
