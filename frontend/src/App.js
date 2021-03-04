import React from "react";
import Login from "./components/login/login.jsx";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import Supplier from './components/Supplier/Supplier';
import Customer from './components/Customer/Customer';
function App() {
  return (
    <div className="App">
      <Customer/>
    </div>
  );
}

export default App;
