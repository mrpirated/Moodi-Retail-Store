import Navbar from './Home/Navbar';
import GeneralReport from './GeneralReport/GeneralReport'
import Gstreport from './Gstreport/Gstreport'
import ExpiryReport from './Expiryreport/Expiryreport'
import Damagedgood from './Damagedgood/Damagedgood'
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString(); 

export default function Report() {
    let c=1;
    
               
    return (
        <div>
         <Navbar title="Billing"/>
      <div style={{marginLeft:'10px',marginRight:'10px'}}>
     <button> General Report</button> 
     <button> GST Report</button> 
     <button> Expiry Report</button> 
     <button> Damaged Goods</button> 
             <div style={{float:'right',marginTop:'10px',marginRight:'10px'}}>  Date : {currDate} ,Time:  {currTime}</div> 
            <hr  className='hr-style'/>
         </div>
         {(() =>  { switch (c) {
           case 1:<p>ahshs</p>;
               
               break;
       
           default:
               break;
       }})}
         </div>
    )
}