import Navbar from '../Home/Navbar';
import {columns} from '../Expiryreport/Table';
import DataTable from '../DataTable';
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString(); 
function Expiryreport() {
    return (
        <div>
         <Navbar title="Expiry Report"/>
      <div style={{marginLeft:'10px',marginRight:'10px'}}>
     <button> General Report</button> 
     <button> GST Report</button> 
     <button> Expiry Report</button> 
     <button> Damaged Goods</button> 
             <div style={{float:'right',marginTop:'10px',marginRight:'10px'}}>  Date : {currDate} ,Time:  {currTime}</div>
             
 
            <hr  className='hr-style'/>
         
             <p>Expiry Date: <input type="date"></input><button>Search</button></p>
                        
                        <hr  className='hr-style'/>
               
            <DataTable title='Report Table' columns={columns}/>
        </div>
        </div>   
    )
}

export default Expiryreport
