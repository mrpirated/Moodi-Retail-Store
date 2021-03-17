import {columns} from '../Expiryreport/Table';
import DataTable from '../DataTable';
export default function Expiryreport() {
    return (
        <div>         
             <p>Expiry Date: <input type="date"></input><button>Search</button></p>
             <hr  className='hr-style'/>
             <DataTable title='Expiry Report' columns={columns}/>
        </div>  
    )
}
 
