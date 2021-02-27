import { Schema, model } from 'mongoose';

const BillSchema = Schema({
    Bill_Id:{
        type:String,
        required:true,
    },
    Client_id:String, // customer or supplier id
    Items:[
        {Batch_Id:{
            type:String,
            required:true,
        }, 
        Quantity:{
            type:Number,
            required:true,
        },
        Unit_Price:{
            type:Number,
            required:true,
        },
        GST:{
            type:String,
            required:true,
        },  //Linked to HSN Code
        },
    ],
    date:{
        type:Date,
        required:true,
    },
    Gst:String, //total gst
    TotalCost:{
        type:String,
        required:true,
    },
    Mode:String //mode of payment


});

export default model('bill',BillSchema);