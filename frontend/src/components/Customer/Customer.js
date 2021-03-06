import React from 'react'
import Navbar from '../Home/Navbar';
import './customer.css';
import * as ReactBootstrap from 'react-bootstrap';
import Table from '../Customer/table';

function Customer() {
    return (
        <div className="customer">
            <Navbar title="Customer Details"/>
            <div classname="customer-form" >
                <form className="form" style={{
                            marginTop:'25px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize:'25px'
                    }}>
                    <div className="field" >
                        <label classname="name-label-customer" style={{
                            paddingRight:'10px'
                        }}>Customer Name: </label>
                        <input type="text" style={{
                            marginRight:'10px',
                            fontSize:'25px'
                        }} />
                    </div>
                    <button>Get Details</button>
                </form>
            </div>
            <hr
                style={{
                    color: 'black',
                    backgroundColor: 'gray',
                    height: '1px',
                    marginTop: '25px'
                }}
            />
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
            <Table title='Customer Table' />
        </div>
    )
}

export default Customer
