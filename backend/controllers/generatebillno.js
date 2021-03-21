import bill from "../models/Bill";
import mongoose from "mongoose";
function code(){
    let str = Math.floor(Math.random()*1000000000).toString();
    return str;
};
function generatecode(){
    var generatedcode;
    var flag = true;
    while(flag){
        var Bill_Id = code();
        let temp = bill.find({Bill_Id});
        if(!temp){
            flag = false;
            generatedcode=Bill_Id;
        }
        flag = false;
    }
    return Bill_Id;
}
export default generatecode;