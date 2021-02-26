import { Schema, model } from 'mongoose';

const SupplierSchema = Schema({
    Supplier_Id: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    GST_No: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Ledger: {
        type: Number,
        required: true,
    },
    Transactions: [{date:Date,}], //To be finalized
});

export default model('supplier',SupplierSchema);