import {useState} from 'react';
import Navbar from './Home/Navbar';
import GeneralReport from './GeneralReport/GeneralReport'
import Gstreport from './Gstreport/Gstreport'
import ExpiryReport from './Expiryreport/Expiryreport'
import Damagedgood from './Damagedgood/Damagedgood'

const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString(); 

export default function Report() {
    const [data,setdata]=useState({
        display:<GeneralReport/>
    });
    const {display}=data;
               
    return (
        <div>
            <Navbar title="Expiry Report"/>
            <div style={{marginLeft:'10px',marginRight:'10px'}}>
                <button onClick={()=>setdata({...data,display:<GeneralReport/>})}> General Report</button> 
                <button onClick={()=>setdata({...data,display:<Gstreport/>})}> GST Report</button> 
                <button onClick={()=>setdata({...data,display:<ExpiryReport/>})}> Expiry Report</button> 
                <button onClick={()=>setdata({...data,display:<Damagedgood/>})}> Damaged Goods</button> 
                <div style={{float:'right',marginTop:'10px',marginRight:'10px'}}>  Date : {currDate} ,Time:  {currTime}</div> 
                <hr  className='hr-style'/>
            </div>
            {display}
         </div>
    )
}