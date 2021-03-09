import bill from '../models/Bill';
import mongoose from 'mongoose';
import { Router } from "express";
const router = Router();
import { validationResult } from "express-validator";

router.get('./gstreport', async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res
        .status(ErrorCode.HTTP_BAD_REQ)
        .json({ errors: errors.array() })
        .send("Error in Validation");
    }
    try {
        const {date,UserId} = req.body;
        let transaction = await bill.find({'Date':Date(date)});
        return res.status(200).send(transaction); 
    } catch (err) {
        console.log(err.message);
        res
          .status(ErrorCode.HTTP_SERVER_ERROR)
          .json({ errors: { msg: "Server Error!" } });  
    }
})
