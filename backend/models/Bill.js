import { Schema, model } from 'mongoose';

const BillSchema = Schema({
    Bill_Id:{
        type:String,
        required:true,
    },
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
    TotalCost:{
        type:String,
        required:true,
    },


});

export default model('bill',BillSchema);