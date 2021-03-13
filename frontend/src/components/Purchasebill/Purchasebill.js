import React from 'react'
import Navbar from '../Home/Navbar';
import './Purchasebill.css'
import {columns} from './Table';
import DataTable from '../DataTable';
import Input from '../Input';
import Search from '../searchbar';
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString(); 
function Purchasebill() {
    const details=[{field:'Name'},{field:'Phone Number'},{field:'Supplier ID:'},{field:'GST Number'},{field:'Address:'},{field:'Email ID:'},{field:'Ledger:'}];
    return (
        <div class="Report">
         <Navbar title="Purchase Billing"/>

<div classname="customer-form" >
     <button> Sell</button> 
     <button> Customer Return </button> 
     <button> Purchase</button>  
     <button> Damaged goods for Bill</button> 
    <div className="Add">
<p> Date : {currDate} ,Time:  {currTime}</p>
</div>    
<hr classname='hr-style'/>
             <div class="heading">
            <h1> Bill No. : <input type="text" style={{
                            marginRight:'5px',
                            fontSize:'25px'
                        }}></input></h1>
                        </div>
                        <Search title='Supplier Name'/>
                     <div className="details" >
                 {details.map((item, index) => {
                            return (
                               <Input field={item.field}/>
                            )
                        })}
                </div>
            <hr classname='hr-style'/>
                <div class="addproduct">
                <button> Add Product</button></div>
                
            <DataTable title='Purchase Bill Table' columns={columns} />
            <h1>Total payment: <input type="text"></input></h1>
            <button> Pay</button>
            <button>Print Barcode</button>

        </div>
        </div>
    )
}

export default Purchasebill
