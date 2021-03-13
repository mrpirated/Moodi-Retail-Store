import React from "react";
import Login from "./components/login/login.jsx";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import GeneralReport from "./components/GeneralReport/GeneralReport";
import Supplier from "./components/Supplier/Supplier";
import Customer from "./components/Customer/Customer";
import Gstreport from "./components/Gstreport/Gstreport";
import Expiryreport from "./components/Expiryreport/Expiryreport";
import Damagedgood from "./components/Damagedgood/Damagedgood";
import Purchasebill from "./components/Purchasebill/Purchasebill.js";
//import SellBill from "./components/SellBill/SellBill";
import Damagedgoodsreturnbill from "./components/Damagedgoodsreturnbill/Damagedgoodsreturnbill.js";
import Customerreturn from "./components/Customerreturn/Customerreturn.js";
import ExpiryReport from './components/Expiryreport/Expiryreport'
import SellBill from './components/SellBill/SellBill';
function App() {
	return (
		<div className='App'>
			<SellBill/>
		</div>
	);
}

export default App;
