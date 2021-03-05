import item from '../models/Item';
import batches from '../models/batches';
import mongoose from 'mongoose';
import { Router } from "express";
const router = Router();
import {  check,validationResult } from "express-validator";

router.get('/expiry', async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res
        .status(ErrorCode.HTTP_BAD_REQ)
        .json({ errors: errors.array() })
        .send("Error in Validation");
    }
    try {
        const {start, end} = req.body;
        let batch = await batches.find({Expiry:{$lte:Date(end) , $gte:Date.now()}});
        for (let i = 0; i < batch.length; i++) {
          let itemcode = batch[i].ItemCode;
          item.findById(itemcode, function(err, result){batch[i].Item = result;}).select({'Batches':0, 'UserId':0});         
        }
        return res.status(200).send(batch);        

    } catch (error) {
        console.log(err.message);
    res
      .status(ErrorCode.HTTP_SERVER_ERROR)
      .json({ errors: { msg: "Server Error!" } });
    }


});