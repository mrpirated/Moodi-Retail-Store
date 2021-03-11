import React, { Component } from 'react';
import Navbar from '../Home/Navbar';
import  './customer.css';
import  {columns} from './tablecolumns.js';
import Input from '../Input';
import DataTable from '../DataTable.js';
function Customer() {
    const details=[{field:'Name'},{field:'Phone Number'},{field:'Customer ID:'},{field:'Address:'},{field:'Email ID:'},{field:'Ledger:'}];
    return (
        <div>
            <Navbar title="Customer Details"/>
            {Search()}
            <hr className="hr-style"/>
            <div className="details" >
                 {details.map((item, index) => {
                            return (
                               <Input field={item.field} />
                            )
                        })}
            </div>
            <hr className="hr-style"/>
            <DataTable title='Customer Table' col={columns}/>
        </div>
    )
}
 function Search(){
    return(<form className="form">
                     <label  style={{paddingRight:'10px'}}>Customer Name: </label>
                     <input type="text" style={{ marginRight:'10px', fontSize:'25px' }} />
                     <button>Get Details</button>
             </form>
           )
}

export default Customer
