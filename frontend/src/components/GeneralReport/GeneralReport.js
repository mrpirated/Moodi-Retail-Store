import "./GeneralReport.css";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { columns } from "../GeneralReport/Table";
import Batches from "./Batches";
import DataTable from "../DataTable";
const config = require("../../config/apipaths.json");
//import { fetchItems } from "../../api/fetchitems";
export default function GeneralReport() {
	const [items, setItems] = useState([{}]);
	const [data, setData] = useState([{}]);
	const history = useHistory();
	useEffect(async () => {
		const result = await axios
			.get(config.fetchItems, {
				params: {
					UserId: "4584548524",
				},
			})
			.then((res) => {
				//console.log("frae");
				//console.log(res.data);
				//setItems(res.data);
				let temp = [];
				//console.log(items[0].Line);
				for (let i = 0; i < res.data.length; i++) {
					let t = {
						batch: res.data[i].Batches.length,
						num: i + 1,
						category: res.data[i].Line,
						//barcode:items.Batches[0],
						company: res.data[i].Company,
						productType: res.data[i].Type,
						WtVol: res.data[i].Weight_Volume,
						total: res.data[i].Total_Units,
						itemcode: res.data[i]._id,
					};
					temp.push(t);
					//console.log(temp);
				}
				//console.log("Here");
				setData(temp);
				//data=res.data;
				//console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// function callAPI() {
	// 	axios
	// 		.get(config.fetchItems, {
	// 			params: {
	// 				UserId: "4584548524",
	// 			},
	// 		})
	// 		.then((res) => {
	// 			//console.log("frae");
	// 			//console.log(res.data);
	// 			//setItems(res.data);
	// 			let temp = [];
	// 			//console.log(items[0].Line);
	// 			for (let i = 0; i < res.data.length; i++) {
	// 				let t = {
	// 					batch: res.data[i].Batches.length,
	// 					num: i + 1,
	// 					category: res.data[i].Line,
	// 					//barcode:items.Batches[0],
	// 					company: res.data[i].Company,
	// 					productType: res.data[i].Type,
	// 					WtVol: res.data[i].Weight_Volume,
	// 					total: res.data[i].Total_Units,
	// 					itemcode: res.data[i]._id,
	// 				};
	// 				temp.push(t);
	// 				console.log(res.data[i]);
	// 			}
	// 			//console.log(temp);
	// 			setData(temp);
	// 			//data=res.data;
	// 			//console.log(data);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// 	//setItems(result.data);
	// }
	const actions = [
		{
			icon: "more",
			tooltip: "More Details",
			onClick: (event, rowData) => {
				history.push("/batches", { rowData: rowData });
			},
		},
	];
	return (
		<div className='Report'>
			{/* {() => callAPI()} */}
			{/* <button onClick={() => callAPI()}> Refresh </button> */}
			<DataTable
				title='General Report'
				columns={columns}
				data={data}
				actions={actions}
			/>
		</div>
	);
}
