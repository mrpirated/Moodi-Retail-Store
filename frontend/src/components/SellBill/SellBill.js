import './SellBill.css';
import {columns} from './Table';
import DataTable from '../DataTable';
import Input from '../Input';
import Search from '../searchbar';
export default function SellBill(){
    const details=[{field:'Name'},{field:'Phone Number'},{field:'Customer ID:'},{field:'Address:'},{field:'Email ID:'},{field:'Ledger:'}];
    return (
        <div className="customer">
            <div class="heading"><h1> Bill No. : 001</h1></div>
            <Search title='Customer Name'/>
            <div class ="addc">
                 <button> Add Customer</button>
            </div>
             <div className="details" >
                 {details.map((item) => {
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
 