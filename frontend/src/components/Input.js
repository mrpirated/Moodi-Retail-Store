import React from 'react'
import './Customer/customer.css';
export default function Input(props){
    return ( <div>
        <label classname="name-label-customer" style={{
                    paddingRight:'1px'
                }}>{props.field} </label>
                <input type="text" style={{
                    marginRight:'6px'
                }} />
    </div>);
};