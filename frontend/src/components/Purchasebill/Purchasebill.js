import React from 'react'
import Navbar from '../Home/Navbar';
import './Purchasebill.css'
import * as ReactBootstrap from 'react-bootstrap';
import Table from './Table';
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString(); 
function Purchasebill() {
    return (
        <div class="Report">
         <Navbar title="Purchase Billing"/>

<div classname="customer-form" >
     <button> Sell</button> 
     <button> Return </button> 
     <button> Purchase</button>  
     <button> Damaged goods for Bill</button> 
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
            <div className="Supplier">
            <h1> Supplier Details </h1>
            </div>
            <div className="addsupplier">
                <button>Add Supplier</button>
                <p> Search by Name: <input type="text"></input></p>
            </div>
<div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '50px 0px 25px'
            }}>
                
                <div>
                    <label classname="name-label-supplier" style={{
                                paddingRight:'10px'
                            }}>Name: </label>
                            <input type="text" style={{
                                marginRight:'90px'
                            }} />
                </div>
                <div>
                    <label classname="name-label-supplier" style={{
                        paddingRight:'10px'
                    }}>Phone Number: </label>
                    <input type="text" style={{
                        marginRight:'90px'
                    }} />
                </div>
                <div>
                    <label classname="name-label-supplier" style={{
                        paddingRight:'10px'
                    }}>GST Number: </label>
                    <input type="text" style={{
                        marginRight:'90px'
                    }} />
                </div>
                <div>
                    <label classname="name-label-supplier" style={{
                        paddingRight:'10px'
                    }}>Supplier ID: </label>
                    <input type="text" style={{
                        marginRight:'90px'
                    }} />
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px 0px 25px'
            }}>
                <div>
                    <label classname="name-label-supplier" style={{
                                paddingRight:'10px'
                            }}>Address: </label>
                            <input type="text" style={{
                                marginRight:'90px'
                            }} />
                </div>
                <div>
                    <label classname="name-label-supplier" style={{
                                paddingRight:'10px'
                            }}>Email ID: </label>
                            <input type="text" style={{
                                marginRight:'90px'
                            }} />
                </div>
                <div>
                    <label classname="name-label-supplier" style={{
                                paddingRight:'10px'
                            }}>Ledger: </label>
                            <input type="text" style={{
                                marginRight:'90px'
                            }} />
                </div>
            </div>
            <hr
                style={{
                    color: '#d3d3d3',
                    backgroundColor: '#d3d3d3',
                    height: '2px',
                    marginTop: '25px'
                }}
                />
            <Table title='Purchase Bill Table' />
        </div>
        </div>
    )
}

export default Purchasebill
