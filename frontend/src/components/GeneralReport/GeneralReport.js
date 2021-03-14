import "./GeneralReport.css";
import {columns} from "../GeneralReport/Table";
import DataTable from '../DataTable';
export default function GeneralReport() {
    // const [items,setItems]=useState([{}]);
    // const fetch=()=>{
    //     const data = fetchItems();
    //     console.log(data);
    //     setItems(data);
    //     console.log(items);
    // }
  return (
    <div class="Report">
        <button> Change Selling Price or Discount </button>
        <DataTable title="General Report" columns={columns}/>
     </div>
  );
}

 