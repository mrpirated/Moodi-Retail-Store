import { Router } from 'express';
const router = Router();
import { check, validationResult } from 'express-validator';
import User from '../../models/User';
import Items from '../models/Item';
import mongoose from 'mongoose';

router.post(
    '/items',async (req,res)=>{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(ErrorCode.HTTP_BAD_REQ).json({ errors: errors.array() });
    }
    
    }
)
router.get(
    '/items',async (req,res)=>{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(ErrorCode.HTTP_BAD_REQ).json({ errors: errors.array() });
    }
    try{
        const ItemId = req.body;
        let item = await Items.findOne({ItemId});
        if(item){
            return res.status(200).send(item);
        }else{
            return res.status(200).send("Item not found");
        }
    }catch (err) {
      console.log(err.message);
      res.status(ErrorCode.HTTP_SERVER_ERROR).json({ errors: { msg: 'Server Error!' } });
    }
    }
)