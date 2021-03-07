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
                <form className="form" style={{
                            marginTop:'25px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                    }}>
                    <div className="field" >
                        <label classname="name-label-supplier" style={{
                            paddingRight: '10px',
                            fontSize: '30px',
                            fontWeight: 'bolder'
                        }}>Supplier Name: </label>
                        <input type="text" style={{
                            marginRight: '10px',
                            height: '40px',
                            width: '30rem',
                            fontSize: '20px',
                            padding: '5px'
                        }} />
                    </div>
                    <button style={{
                        height: '40px',
                        marginLeft: '20px',
                        fontSize: '20px',
                        padding: '5px'
                    }}>Get Details</button>
                </form>
            </div>
            <hr
                style={{
                    color: '#d3d3d3',
                    backgroundColor: '#d3d3d3',
                    height: '2px',
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
                    color: '#d3d3d3',
                    backgroundColor: '#d3d3d3',
                    height: '2px',
                    marginTop: '25px'
                }}
            />
            <Table title='Supplier Table' />
        </div>
    )
}

export default Supplier