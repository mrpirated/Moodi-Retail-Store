import Navbar from '../Home/Navbar';
import './Damagedgood.css';
import {columns} from './Table';
import DataTable from '../DataTable';
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString(); 
    function Damagedgood() {
        return (
            <div class="Report">
            <Navbar title="Damaged Good"/>

    <div classname="customer-form" >
        <button> Damaged Good Report</button> 
        <button> Enter Physical Damage</button>  
        <div className="Add">
    <p> Date : {currDate} ,Time:  {currTime}</p>

    </div>    
    <hr className='hr-style'/>
                <div className="return_item">
                    <button>Returnable</button>
                    <button>Non-Returnable</button>
                </div>
                <hr className='hr-style'/>
                <DataTable title='Returnable Report Table' columns={columns} />
            </div>
            </div>
        )
    }

    export default Damagedgood
