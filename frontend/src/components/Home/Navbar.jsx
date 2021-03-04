import React, { Component, useState } from 'react'
import { MenuItems } from './MenuItems';
import '../../styles/navbar.css';

function Navbar(props) {

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo" style={{ fontSize: "2.2rem" }}>{ props.title}</h1>
            <ul className={'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} style={{fontSize:"1.2rem", fontWeight:"bold"}} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Navbar;