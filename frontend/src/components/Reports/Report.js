import React from 'react'
import Navbar from '../Home/Navbar';
import './Report.css';
import * as ReactBootstrap from 'react-bootstrap';
import Table from '../Reports/Table';
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString(); 
function Report() {
    return (
        <div class="Report">
         <Navbar title="General Report"/>

<div classname="customer-form" >
    <div classname="generalreport"><button> General Report</button> </div>
    <button> GST Report</button> 
    <button> Expiry Report</button> 
    <button> Damaged Goods</button> 
    <div className="Add">
<p> Date : {currDate} ,Time:  {currTime}</p>

</div>    
<hr
                style={{
                    color: 'black',
                    backgroundColor: 'gray',
                    height: '1px',
                    marginTop: '25px'
                }}
            />
            <div class="change">
            <button> Change Selling Price or Discount </button>
            </div>
            <Table title='Report Table' />
        </div>
        </div>
    )
}

export default Report
