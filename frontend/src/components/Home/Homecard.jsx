import React, { Component } from 'react'
import '../../styles/homecard.css';

function Homecard(props) {
    return (
        <div>
            <div className="features-col" style={{float:"left"}}>
                <i className= {props.iconClassName} style={{display:"block"}}></i>
                <a className= {props.cName} href={props.url}>
                    {props.title}
                </a>
            </div>
        </div>
        
    );
}

export default Homecard;