import './Purchasebill.css'
import {columns} from './Table';
import DataTable from '../DataTable';
import Input from '../Input';
import Search from '../searchbar';
export default function Purchasebill() {
    const details=[{field:'Name'},{field:'Phone Number'},{field:'Supplier ID:'},{field:'GST Number'},{field:'Address:'},{field:'Email ID:'},{field:'Ledger:'}];
    return (
        <div className="Report">
            <div className="heading">
                <h1> Bill No. : <input type="text" style={{
                            marginRight:'5px',
                            fontSize:'25px'
                        }}></input></h1>
            </div>
            <Search title='Supplier Name'/>
            <div className="details" >
                 {details.map((item,index) => {
                            return (
                               <Input field={item.field} key={index}/>
                            )
                        })}
            </div>
            <hr className='hr-style'/>
            <div className="addproduct">
                <button> Add Product</button></div>
                
            <DataTable title='Purchase Bill Table' columns={columns} />
            <h1>Total payment: <input type="text"></input></h1>
            <button> Pay</button>
            <button>Print Barcode</button>

        </div>
    )
}

 
