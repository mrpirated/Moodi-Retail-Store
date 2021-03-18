import "./GeneralReport.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { columns } from "../GeneralReport/Table";
import DataTable from "../DataTable";
const config = require("../../config/apipaths.json");
//import { fetchItems } from "../../api/fetchitems";
export default function GeneralReport() {
	const [items, setItems] = useState([{}]);
	const [data, setData] = useState([{}]);
	useEffect(async () => {
		await axios
			.get(config.fetchItems, {
				params: {
					UserId: "4584548524",
				},
			})
			.then((res) => {
				//console.log("frae");
				//console.log(res.data);
				setItems(res.data);
				let temp = [];
				//console.log(items[0].Line);
				for (let i = 0; i < items.length; i++) {
					let t = {
						batch: items[i].Batches.length,
						num: i + 1,
						category: items[i].Line,
						//barcode:items.Batches[0],
						company: items[i].Company,
						productType: items[i].Type,
						WtVol: items[i].Weight_Volume,
						total: items[i].Total_Units,
					};
					temp.push(t);
					console.log(temp);
				}
				//console.log(temp);
				setData(temp);
				//data=res.data;
				//console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
		//setItems(result.data);
	}, []);

	return (
		<div class='Report'>
			<button> Change Selling Price or Discount </button>
			<DataTable title='General Report' columns={columns} data={data} />
		</div>
	);
}
