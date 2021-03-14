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
import Billing from './components/Billing';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Report from './components/Reports';
function App() {
	return (
		<Router>
			<div className='App'>
				<Route exact path='/' component={Home}/>
				<section>
				<Switch>
				<Route exact path='/customer' component={Customer}/>
				<Route exact path='/supplier' component={Supplier}/>
				<Route exact path='/reports' component={Report}/>
				<Route exact path='/billing' component={Billing}/>
				</Switch>
				</section>
			</div>
		</Router>
	);
}

export default App;
