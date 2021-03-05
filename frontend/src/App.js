import React from "react";
import Login from "./components/login/login.jsx";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import Supplier from './components/Supplier/Supplier';
import Customer from './components/Customer/Customer';
import Billing from "./components/Billing/Billing.js";
import report from "./components/Reports/Report";
import Gstreport from "./components/Gstreport/Gstreport";
function App() {
  return (
    <div className="App">
      <Gstreport/>
    </div>
  );
}

export default App;
