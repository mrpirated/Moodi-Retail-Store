import React, { useState } from "react";
import Navbar from "../Home/Navbar";
import "./GeneralReport.css";
import * as ReactBootstrap from "react-bootstrap";
import Table from "../GeneralReport/Table";
import { temp } from "../../api/fetchitems";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
function GeneralReport() {
	const [items, setItems] = useState([{}]);
	const fetch = () => {
		const data = temp();
		console.log(data);
		setItems(data);
		console.log(items);
	};
	return (
		<div class='Report'>
			<Navbar title='General Report' />

			<div classname='customer-form'>
				<button onClick={fetch}> General Report</button>
				<button> GST Report</button>
				<button> Expiry Report</button>
				<button> Damaged Goods</button>
				<div className='Add'>
					<p>
						{" "}
						Date : {currDate} ,Time: {currTime}
					</p>
				</div>
				<hr
					style={{
						color: "black",
						backgroundColor: "gray",
						height: "1px",
						marginTop: "25px",
					}}
				/>
				<div class='change'>
					<button> Change Selling Price or Discount </button>
				</div>
				<Table title='Report Table' />
			</div>
		</div>
	);
}

export default GeneralReport;
