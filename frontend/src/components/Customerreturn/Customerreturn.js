import React from 'react';
import Navbar from '../Home/Navbar';
import './Customerreturn.css';
import * as ReactBootstrap from 'react-bootstrap';
import Table from './Table';
import Customer from '../Customer/Customer';
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString(); 
function Customerreturn(){
    return (
        <div className="customer">
            <Navbar title="Customer Return Billing"/>

            <div classname="customer-form" >
                <button> Sell</button> 
                <button> Customer Return</button> 
                <button> Purchase</button> 
                <button> Damaged Goods Return Bill</button> 
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
            <div class="heading">
            <h1> Bill No. : <input type="text" style={{
                            marginRight:'5px',
                            fontSize:'25px'
                        }}></input></h1>
                        </div>
        <form className="form" style={{
                            marginTop:'30px',
                            marginLeft:'0px',
                            display: 'flex',
                            justifyContent: 'right',
                            alignItems: 'right',
                            fontSize:'25px'
                    }}>
                    <div className="field" >
                        <label classname="name-label-customer" style={{
                            paddingRight:'5px'
                        }}>Customer Name: </label>
                        <input type="text" style={{
                            marginRight:'5px',
                            fontSize:'25px'
                        }} />
                    </div>
                    <button>Get Details</button>
                </form>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '50px 0px 25px'
            }}>
                <div>
                    <label classname="name-label-customer" style={{
                                paddingRight:'10px'
                            }}>Name: </label>
                            <input type="text" style={{
                                marginRight:'90px'
                            }} />
                </div>
                <div>
                    <label classname="name-label-customer" style={{
                        paddingRight:'10px'
                    }}>Phone Number: </label>
                    <input type="text" style={{
                        marginRight:'90px'
                    }} />
                </div>
                <div>
                    <label classname="name-label-customer" style={{
                        paddingRight:'10px'
                    }}>Customer ID: </label>
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
                    <label classname="name-label-customer" style={{
                                paddingRight:'10px'
                            }}>Address: </label>
                            <input type="text" style={{
                                marginRight:'90px'
                            }} />
                </div>
                <div>
                    <label classname="name-label-customer" style={{
                                paddingRight:'10px'
                            }}>Email ID: </label>
                            <input type="text" style={{
                                marginRight:'90px'
                            }} />
                </div>
                <div>
                    <label classname="name-label-customer" style={{
                                paddingRight:'10px'
                            }}>Ledger: </label>
                            <input type="text" style={{
                                marginRight:'90px'
                            }} />
                </div>
            </div>
            <hr
                style={{
                    color: 'black',
                    backgroundColor: 'gray',
                    height: '1px',
                    margin: '25px 0px'
                }}
            />
            <Table title='Customer Return Billing' />
            <div class="bottom"> 
            <h1>Return payment: <input type="text"></input></h1>
              <button> Generate </button>
   </div>
        </div>
    )
}
export default Customerreturn