    import './Customerreturn.css';
    import {columns} from './Table';
    import Input from '../Input';
    import DataTable from '../DataTable';
    import Search from '../searchbar';
    export default function Customerreturn(){
        const details=[{field:'Name'},{field:'Phone Number'},{field:'Customer ID:'},{field:'Address:'},{field:'Email ID:'},{field:'Ledger:'}];
        return (
            <div className="customer">
                <div class="heading">
                 <h1> Bill No. :001</h1>
                 </div>
                <Search title='Search by Customer Name'/>
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
    