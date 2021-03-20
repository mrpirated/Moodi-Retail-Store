import "./GeneralReport.css";
import Navbar from "../Home/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { columns } from "./BatchTable";
import DataTable from "../DataTable";
const config = require("../../config/apipaths.json");

export default function Batches(props) {
	const [data, setData] = useState([{}]);
	//setRowData(props.location.state.rowData);
	const row = props.location.state.rowData;
	useEffect(async () => {
		//console.log(props.location.state.rowData);
		let temp = [];
		const result = await axios
			.get(config.batchDetails, {
				params: {
					UserId: "4584548524",
					ItemCode: row.itemcode,
				},
			})
			.then((res) => {
				let temp = [];
				const r = res.data;
				for (let i = 0; i < r.length; i++) {
					const disc = ((r[i].MRP - r[i].Selling_price) * 100) / r[i].MRP;
					disc.toFixed(2);
					const exp = r[i].Expiry.substring(0, 10);

					//console.log(disc);
					let t = {
						num: i + 1,
						barcode: r[i].Batch_Id,
						quantity: r[i].Quantity,
						expiry: exp,
						rate: r[i].Cost_price,
						mrp: r[i].MRP,
						basicPrice: r[i].Selling_price,
						discount: disc,
						cgst: r[i].CGST,
						sgst: r[i].SGST,
						igst: r[i].IGST,
						hsncode: r[i].HSN_Code,
					};
					temp.push(t);
				}
				setData(temp);
			});
	}, []);

	return (
		<div>
			<Navbar title='Batch Report' />
			<div></div>
			<DataTable title='General Report' columns={columns} data={data} />
		</div>
	);
}
