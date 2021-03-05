import React from "react";
import Login from "./components/login/login.jsx";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import Supplier from './components/Supplier/Supplier';
import Customer from './components/Customer/Customer';
import Billing from "./components/Billing/Billing.js";
import report from "./components/Reports/Report";
import Gstreport from "./components/Gstreport/Gstreport";
import Expiryreport from "./components/Expiryreport/Expiryreport";
import Damagedgood from "./components/Damagedgood/Damagedgood";
import Purchasebill from "./components/Purchasebill/Purchasebill.js";
function App() {
  return (
    <div className="App">
      <Purchasebill/>
    </div>
  );
}

export default App;
