import React, { Component } from 'react'
import Navbar from '../Home/Navbar';
import  './customer.css';
import * as ReactBootstrap from 'react-bootstrap';
import  {columns} from './tablecolumns.js';
import Input from '../Input';
import Table from './table'
import DataTable from '../DataTable.js';
function Customer() {
    const details=[{field:'Name'},{field:'Phone Number'},{field:'Customer ID:'},{field:'Address:'},{field:'Email ID:'},{field:'Ledger:'}];
    return (
        <div className="customer">
            <Navbar title="Customer Details"/>
            {Search()}
            <hr className="hr-style"/>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '50px 40px 25px'
                }}>
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
    return(
        <div classname="customer-form" >
                <form className="form" style={{
                            marginTop:'50px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize:'25px'
                            
                    }}>
                    <div className="field" >
                        <label classname="name-label-customer" style={{
                            paddingRight:'10px'
                        }}>Customer Name: </label>
                        <input type="text" style={{
                            marginRight:'10px',
                            fontSize:'25px'
                        }} />
                    </div>
                    <button>Get Details</button>
                </form>
            </div>
    )
}

export default Customer
