import Navbar from '../Home/Navbar';
import './Supplier.css';
import {columns} from '../Supplier/Table';
import DataTable from '../DataTable';
import Search from '../searchbar';
import Input from '../Input';
export default function Supplier() {
    const details=[{field:'Name'},{field:'Phone Number'},{field:'Supplier ID:'},{field:'GST Number'},{field:'Address:'},{field:'Email ID:'},{field:'Ledger:'}];
    return (
        <div>
            <Navbar title="Supplier Details"/>
            <Search title='Search Supplier Name'/>
            <hr className='hr-style'/>
             <div className="details" >
                 {details.map((item, index) => {
                            return (
                               <Input field={item.field} key={index}/>
                            )
                        })}
                </div>
            <hr className='hr-style'/>
            <DataTable title='Supplier Table' columns={columns}/>
        </div>
    )
}
 