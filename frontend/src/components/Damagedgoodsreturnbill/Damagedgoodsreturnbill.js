import Navbar from '../Home/Navbar';
import './Damagedgoodsreturnbill.css';
import { columns }  from './Table';
import Input from '../Input';
import Search from '../searchbar';
import DataTable from '../DataTable';
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString(); 
function Damagedgoodsreturnbill() {
    const details=[{field:'Name'},{field:'Phone Number'},{field:'Supplier ID:'},{field:'GST Number'},{field:'Address:'},{field:'Email ID:'},{field:'Ledger:'}];
    return (
        <div class="Report">
         <Navbar title="Damaged Goods Return Billing"/>

<div classname="customer-form" >
     <button> Sell</button> 
     <button> Customer Return </button> 
     <button> Purchase</button>  
     <button> Damaged goods for Bill</button> 
    <div className="Add">
<p> Date : {currDate} ,Time:  {currTime}</p>
</div>    
<hr className='hr-style'/>
             <div class="heading">
            <h1> Bill No. : <input type="text" style={{
                            marginRight:'5px',
                            fontSize:'25px'
                        }}></input></h1>
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
                <button> Add Product</button></div>
                
            <DataTable title='Damaged Goods Return Table' columns={columns} />
            <h1>Total Money Return: <input type="text"></input></h1>
            <button> Generate </button>
        </div>
        </div>
    )
}

export default Damagedgoodsreturnbill
