import React,{useState} from "react";
import Navbar from "../Home/Navbar";
import "./GeneralReport.css";
import {columns} from "../GeneralReport/Table";
import {fetchItems} from '../../api/fetchitems';
import DataTable from '../DataTable';
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
function GeneralReport() {
    const [items,setItems]=useState([{}]);
    const fetch=()=>{
        const data = fetchItems();
        console.log(data);
        setItems(data);
        console.log(items);
    }
  return (
    <div class="Report">
      <Navbar title="General Report" />

      <div classname="customer-form">
        <button onClick={fetch}> General Report</button>
        <button> GST Report</button>
        <button> Expiry Report</button>
        <button> Damaged Goods</button>
        <div className="Add">
          <p>
            {" "}
            Date : {currDate} ,Time: {currTime}
          </p>
        </div>
        <hr className='hr-styleS'/>
        <div class="change">
          <button> Change Selling Price or Discount </button>
        </div>
        <DataTable title="Report Table" columns={columns}/>
      </div>
    </div>
  );
}

export default GeneralReport;
