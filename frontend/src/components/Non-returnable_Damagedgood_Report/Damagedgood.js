import React from 'react'
import Navbar from '../Home/Navbar';
import './Damagedgood.css';
import * as ReactBootstrap from 'react-bootstrap';
import Table from './Table';
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString(); 
function nonreturnableDamagedgood() {
    return (
        <div class="Report">
         <Navbar title="Damaged Good"/>

<div classname="customer-form" >
    <button> Damaged Good Report</button> 
    <button> Enter Physical Damage</button>  
    <div className="Add">
<p> Date : {currDate} ,Time:  {currTime}</p>

</div>    
<hr
                style={{
                    color: 'black',
                    backgroundColor: 'gray',
                    height: '1px',
                    marginTop: '25px'
                }}
            />
            <div className="return_item">
                <button>Returnable</button>
                <button>Non-Returnable</button>
            </div>
            <hr
                style={{
                    color: 'black',
                    backgroundColor: 'gray',
                    height: '1px',
                    marginTop: '25px'
                }}
            />
            <Table title='Non-Returnable Report Table' />
        </div>
        </div>
    )
}

export default nonreturnableDamagedgood
