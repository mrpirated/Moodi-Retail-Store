import Navbar from '../Home/Navbar';
import './SellBill.css';
import {columns} from './Table';
import DataTable from '../DataTable';
import Input from '../Input';
import Search from '../searchbar';
//import InvoicePage from '../react-invoice-generator/react-invoice-generator-master/src/components/InvoicePage';
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString(); 
function SellBill(){
    const details=[{field:'Name'},{field:'Phone Number'},{field:'Customer ID:'},{field:'Address:'},{field:'Email ID:'},{field:'Ledger:'}];
    return (
        <div className="customer">
            <Navbar title="Sell Bill"/>

            <div classname="customer-form" >
                <button> Sell</button> 
                <button> Customer Return</button> 
                <button> Purchase</button> 
                <button> Damaged Goods Return Bill</button> 
                <div className="Add">
            <p> Date : {currDate} ,Time:  {currTime}</p>
        
    </div>    
              <hr className='hr-style'/>
            <div class="heading"><h1> Bill No. : 001</h1></div>
            <Search title='Customer Name'/>
            </div>
            <div class ="addc">
            <button> Add Customer</button>
 </div>
 <div className="details" >
                 {details.map((item, index) => {
                            return (
                               <Input field={item.field} />
                            )
                        })}
            </div>
            <hr className='hr-style'/>
            <DataTable title='Billing' columns={columns}/>
            <div class="bottom"> 
            <h1>Total payment: <input type="text"></input></h1>
           <h1>Total Savings: <input type="text"></input></h1>
            <button> Pay</button>
              <button > Generate </button>
   </div>
        </div>
    )
}
export default SellBill