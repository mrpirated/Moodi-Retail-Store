//require('dotenv').config()
import axios from 'axios';
const URL = process.env.FETCH_ITEMS;

export const fetchItems = async (query)=>{
    
    //console.log("frae");
    const data = await axios.get("http://localhost:5000/user/items",{
        params:{
        'UserId':"4584548524"
        }
    }).then((res)=>{
        //console.log("frae");
        console.log(res.data);
        //data=res.data;
        //console.log(data);
    })
    console.log(data);
    return data;
}
