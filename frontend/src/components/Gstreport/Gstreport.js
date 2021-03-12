import React from 'react'
import Navbar from '../Home/Navbar';
import {columns} from '../Gstreport/Table';
import DataTable from '../DataTable';
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString(); 
function Gstreport() {
    return (
        <div class="Report">
         <Navbar title="GST Report"/>

<div classname="customer-form" >
     <button> General Report</button> 
     <button> GST Report</button> 
     <button> Expiry Report</button> 
     <button> Damaged Goods</button> 
    <div className="Add">
<p> Date : {currDate} ,Time:  {currTime}</p>
</div>    
<hr className='hr-style'/>
            <DataTable title='Report Table' columns={columns}/>
        </div>
        </div>
    )
}

export default Gstreport
