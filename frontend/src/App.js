import React from "react";
import Login from "./components/login/login.jsx";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import Supplier from './components/Supplier/Supplier';
import Customer from './components/Customer/Customer';
import Gstreport from "./components/Gstreport/Gstreport";
import Expiryreport from "./components/Expiryreport/Expiryreport";
import Damagedgood from "./components/Damagedgood/Damagedgood";
import Purchasebill from "./components/Purchasebill/Purchasebill.js";
import GeneralReport from "./components/GeneralReport/GeneralReport.js";
function App() {
  return (
    <div className="App">
      <GeneralReport/>
    </div>
  );
}

export default App;
