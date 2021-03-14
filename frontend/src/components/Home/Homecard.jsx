import '../../styles/homecard.css';
import { Link } from 'react-router-dom';
// import {fetchItems} from '../../api/fetchitems';
function Homecard(props) {
    // const [items,setItems] = useState([{}]);
    // const funct=()=>{
    //     const data = fetchItems();
    //     console.log("here");
    //    setItems(data);
    // }
    return (
        <Link to={props.url}>
            <div className="features-col" style={{float:"left"}}>
            
                <i className= {props.iconClassName} style={{display:"block"}}></i>
                <div className= {props.cName} >
                    {props.title}
                </div>
                
                
            </div>
        </Link>
        
    );
}

export default Homecard;