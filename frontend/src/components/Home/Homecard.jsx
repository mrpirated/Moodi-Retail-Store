import React, { Component,useState } from 'react'
import '../../styles/homecard.css';
import {fetchItems} from '../../api/fetchitems';
function Homecard(props) {
    const [items,setItems] = useState([{}]);
    const funct=()=>{
        const data = fetchItems();
        console.log("here");
       setItems(data);
    }
    return (
        <div>
            <div className="features-col" style={{float:"left"}}>
                <i className= {props.iconClassName} style={{display:"block"}}></i>
                <button onClick={funct}><a className= {props.cName} href={props.url}>
                    {props.title}
                </a>
                </button>
                
            </div>
        </div>
        
    );
}

export default Homecard;