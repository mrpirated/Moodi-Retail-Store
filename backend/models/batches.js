import { Schema, model } from 'mongoose';

const BatcheSchema = Schema({
    Batch_Id:{
        type:String,  //used as barcode also
        required:true,
    },
    ItemCode:{ 
        type:String,
        required:true,
    },
    Quantity:{
        type:Number,
        required:true,
    },
    Cost_price:{
        type:Number,
        required:true,
    },
    Selling_price:{
        type:Number,
        required:true,
    },
    MRP:{
        type:Number,
        required:true,
    },
    HSN_Code:{
        type:String,
        required:true,
    },
    Expiry:{
        type:Date,
    },
});

export default model('batch',BatcheSchema);