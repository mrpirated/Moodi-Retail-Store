import React from 'react'
import Navbar from '../Home/Navbar';
import './Supplier.css';
import * as ReactBootstrap from 'react-bootstrap';
import Table from '../Supplier/Table';


function Supplier() {
    return (
        <div className="supplier">
            <Navbar title="Supplier Details"/>
            <div classname="supplier-form" >
                <h1 classname="head-supplier" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '50px 0px 25px'
                }}>Supplier</h1>
                <hr
                    style={{
                        color: 'black',
                        backgroundColor: 'black',
                        height: '5px',
                        marginBottom: '25px'
                    }}
                />
                <form className="form" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                    }}>
                    <div className="field" >
                        <label classname="name-label-supplier" style={{
                            paddingRight:'10px'
                        }}>Supplier Name: </label>
                        <input type="text" style={{
                            marginRight:'10px'
                        }} />
                    </div>
                    <button>Get Details</button>
                </form>
            </div>
            <hr
                style={{
                    color: 'black',
                    backgroundColor: 'black',
                    height: '5px',
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
                    color: 'black',
                    backgroundColor: 'black',
                    height: '5px',
                    margin: '25px 0px'
                }}
            />
            <Table title='Supplier Table' />
        </div>
    )
}

export default Supplier
