import React from 'react'
import './Customer/customer.css';
export default function Input(props){
    return( <div style={{ padding:'30px 20px 30px 20px'}}>
               <label>{props.field} </label>
               <input type="text"/>
            </div>);
};
     