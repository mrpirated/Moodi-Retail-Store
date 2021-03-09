import { Schema, model } from 'mongoose';

const BillSchema = Schema({
    UserId:{
        type:String,
        required:true
    },
    Bill_Id:{
        type:String,
        required:true,
        unique:true
    },
    Client_id:String, // customer or supplier id
    Items:[
        {Batch_Id:{
            type:String,
            required:true,
        },
        ItemCode:String ,
        Quantity:{
            type:Number,
            required:true,
        },
        Unit_Price:{
            type:Number,
            required:true,
        },
        CGST:{
            type:Number,
            default:0
        },
        SGST:{
            type:Number,
            default:0
        },
        IGST:{
            type:Number,
            default:0
        },
        HSN_Code:{
            type:String,
            required:true,
        },
        Tax:{
            type:Number,
        },
        NetPrice: Number,
    
        },
    ],
    Date:{
        type:Date,
        required:true,
    },
    TotalCost:{
        type:String,
        required:true,
    },
    Mode:String


});

export default model('bill',BillSchema);