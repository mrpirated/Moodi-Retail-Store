import "./GeneralReport.css";
import { columns } from "../GeneralReport/Table";
import DataTable from "../DataTable";
export default function GeneralReport() {
<<<<<<< HEAD
    // const [items,setItems]=useState([{}]);
    // const fetch=()=>{
    //     const data = fetchItems();
    //     console.log(data);
    //     setItems(data);
    //     console.log(items);
    // }
  return (
    <div className="Report">
        <button> Change Selling Price or Discount </button>
        <DataTable title="General Report" columns={columns}/>
     </div>
  );
=======
	// const [items,setItems]=useState([{}]);
	// const fetch=()=>{
	//     const data = fetchItems();
	//     console.log(data);
	//     setItems(data);
	//     console.log(items);
	// }
	return (
		<div class='Report'>
			<button> Change Selling Price or Discount </button>
			<DataTable title='General Report' columns={columns} />
		</div>
	);
>>>>>>> eb740a27fc2098f969bca4a6da43971c1d296114
}
