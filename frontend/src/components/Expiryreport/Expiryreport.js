import React from 'react'
import Navbar from '../Home/Navbar';
import * as ReactBootstrap from 'react-bootstrap';
import Table from '../Expiryreport/Table';
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString(); 
function Expiryreport() {
    return (
        <div class="Report">
         <Navbar title="Expiry Report"/>

<div classname="customer-form" >
     <button> General Report</button> 
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
          <div class="search">
              <h1>Expiry Date: <input type="text"></input></h1>
                        </div>  
                        <hr
                style={{
                    color: 'black',
                    backgroundColor: 'gray',
                    height: '1px',
                    marginTop: '25px'
                }}
            />
            <Table title='Report Table' />
        </div>
        </div>
    )
}

export default Expiryreport
