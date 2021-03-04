import batches from "../models/batches";
import mongoose from "mongoose";
import connectDB from "../config/dbConnector";
function code(){
    let str = Math.floor(Math.random()*1000000000).toString();
    return str;
};
function generatecode(){
    var generatedcode;
    var flag = true;
    while(flag){
        var Batch_Id = code();
        let temp = batches.find({Batch_Id});
        if(!temp){
            flag = false;
            generatedcode=Batch_Id;
        }
        flag = false;
    }
    return Batch_Id;
}
export default generatecode;