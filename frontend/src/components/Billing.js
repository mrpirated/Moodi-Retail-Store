import {useState} from 'react';
import Navbar from './Home/Navbar';
import Purchasebill from "./Purchasebill/Purchasebill.js";
import SellBill from './SellBill/SellBill';
import Customerreturn from "./Customerreturn/Customerreturn.js";
import Damagedgoodsreturnbill from "./Damagedgoodsreturnbill/Damagedgoodsreturnbill.js";
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString(); 
export default function Report() {
    const [data,setdata]=useState({
        display:<SellBill/>
    });
    const {display}=data;       
    return (
        <div>
            <Navbar title="Billing"/>
            <div style={{marginLeft:'10px',marginRight:'10px'}}>
                <button onClick={()=>setdata({...data,display:<SellBill/>})}> Sell Bill</button> 
                <button onClick={()=>setdata({...data,display:<Purchasebill/>})}> Purchase Bill</button> 
                <button onClick={()=>setdata({...data,display:<Customerreturn/>})}> Customer Return Bill</button> 
                <button onClick={()=>setdata({...data,display:<Damagedgoodsreturnbill/>})}> Damaged Goods Return Bill</button> 
                <div style={{float:'right',marginTop:'10px',marginRight:'10px'}}>  Date : {currDate} ,Time:  {currTime}</div> 
                <hr  className='hr-style'/>
            </div>
            {display}
         </div>
    )
}
