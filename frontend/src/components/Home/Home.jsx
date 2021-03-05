import React, { Component } from 'react'
import Navbar from './Navbar';
import Homebody from './Homebody';

function Home() {
    return (
        <div>
            <Navbar title="Moodi Retail Store" />
            <Homebody />
        </div>
    );
}

export default Home;