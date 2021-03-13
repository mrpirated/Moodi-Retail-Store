import Navbar from '../Home/Navbar';
import './Customerreturn.css';
import {columns} from './Table';
import Input from '../Input';
import DataTable from '../DataTable';
import Search from '../searchbar';
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString(); 
function Customerreturn(){
    const details=[{field:'Name'},{field:'Phone Number'},{field:'Customer ID:'},{field:'Address:'},{field:'Email ID:'},{field:'Ledger:'}];
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
            <hr className='hr-style'/>
            <div class="heading">
            <h1> Bill No. :001</h1>
                        </div>
          <Search title='Search by Customer Name'/>
                   </div>
            <div className="details" >
                 {details.map((item, index) => {
                            return (
                               <Input field={item.field} />
                            )
                        })}
            </div>
            <hr className='hr-style'/>
            <DataTable title='Customer Return Billing' columns={columns}/>
            <div class="bottom"> 
            <h1>Return payment: <input type="text"></input></h1>
              <button> Generate </button>
   </div>
        </div>
    )
}
export default Customerreturn