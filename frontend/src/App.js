import React from "react";
import Login from "./components/login/login.jsx";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import Supplier from './components/Supplier/Supplier';
import Customer from './components/Customer/Customer';
<<<<<<< Updated upstream
import Billing from "./components/Billing/Billing.js";
import report from "./components/Reports/Report";
import Gstreport from "./components/Gstreport/Gstreport";
function App() {
  return (
    <div className="App">
      <Gstreport/>
=======
import SellBill from "./components/SellBill/SellBill.js";
import GeneralReport from "./components/GeneralReport/GeneralReport.js";
function App() {
  return (
    <div className="App">
      <GeneralReport/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
