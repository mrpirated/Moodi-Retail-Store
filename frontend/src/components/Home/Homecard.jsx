import React, { Component } from 'react'
import '../../styles/homecard.css';

function Homecard(props) {
    return (
        <div id={props.idName} >
            <a className= {props.cName} href={props.url}>
                <div className="features-col" style={{float:"left"}}>
                    <i className= {props.iconClassName} style={{display:"block"}}></i>
                    {props.title}
                </div>
            </a>
        </div>
        
    );
}

export default Homecard;