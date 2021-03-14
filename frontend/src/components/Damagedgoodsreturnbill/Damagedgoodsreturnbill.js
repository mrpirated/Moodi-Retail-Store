import './Damagedgoodsreturnbill.css';
import { columns }  from './Table';
import Input from '../Input';
import Search from '../searchbar';
import DataTable from '../DataTable';
export default function Damagedgoodsreturnbill() {
        const details=[{field:'Name'},{field:'Phone Number'},{field:'Supplier ID:'},{field:'GST Number'},{field:'Address:'},{field:'Email ID:'},{field:'Ledger:'}];
        return (
            <div class="Report">
                <div class="heading">
                 <h1> Bill No. : 001</h1>
                </div>
                <Search title='Search Supplier by name'/>
                <div className="details" >
                    {details.map((item, index) => {
                                return (
                                <Input field={item.field}/>
                                )
                            })}
                </div>
                <hr className='hr-style'/>
                <div class="addproduct">
                    <button> Add Product</button>
                </div>
                <DataTable title='Damaged Goods Return Table' columns={columns} />
                <h1>Total Money Return: <input type="text"></input></h1>
                <button> Generate </button>
            </div>
        )
    }
 
