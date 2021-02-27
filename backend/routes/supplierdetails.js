import Supplier from '../models/supplier';
import mongoose from 'mongoose';
import { Router } from "express";
const router = Router();
import {  validationResult } from "express-validator";

router.get("/supplier", async (req ,res) => {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res
      .status(ErrorCode.HTTP_BAD_REQ)
      .json({ errors: errors.array() })
      .send("Error in Validation");
  }
  try {
    const { UserId , name} = req.body;
    let supplier = await Customer.findOne({ UserId , name});
    if (!supplier.isEmpty()) {
      return res.status(200).send(supplier);
    } else {
      return res.status(200).send("Supplier details not found");
    }
  } catch (err) {
    console.log(err.message);
    res
      .status(ErrorCode.HTTP_SERVER_ERROR)
      .json({ errors: { msg: "Server Error!" } });
  }
});

router.post("/addsupplier" ,
[
    check('email', 'Please input valid email').isEmail(),
  ],
async(req,res) =>{

    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res
        .status(ErrorCode.HTTP_BAD_REQ)
        .json({ errors: errors.array() })
        .send("Error in Validation");
    }
    try{
        const {UserId , name , phone ,gstno, address , email , ledger}=req.body;
        
        let supplier = new Supplier({
            UserId:UserId,
            Supplier_Id :new mongoose.Types.ObjectId(),
            Name:name,
            phone :phone,
            GST_No : gstno,
            Address: address,
            Email :email,
            Ledger : ledger, 
        })
        await supplier.save();
        console.log(supplier);
        return res.status(200).send("New Supplier Added Successfully");
    
      }catch (err) {
        console.log(err.message);
        res
          .status(ErrorCode.HTTP_SERVER_ERROR)
          .json({ errors: { msg: "Server Error!" } });
      }
});
export default router;
