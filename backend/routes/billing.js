import { Router } from "express";
const router = Router();
import { validationResult } from "express-validator";
import batches from '../models/batches';
import bill from '../models/Bill';
import item from '../models/Item';
import supplier from '../models/supplier';
import customer from '../models/Customer';
import { Mongoose } from "mongoose";
import generatecode from "../controllers/generatebarcode";

router.post('/sale', async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res
        .status(ErrorCode.HTTP_BAD_REQ)
        .json({ errors: errors.array() })
        .send("Error in Validation");
    }
    try {
        const {UserId ,Items,Client_id,date,Mode,TotalCost , Ledger} = req.body;
       let  Bill_Id= generatecode();
        let Bill = new bill({
            UserId:UserId,
            Bill_Id: Bill_Id ,
            Client_id:Client_id,
            Items:Items,
            Date:Date(date),
            TotalCost:TotalCost,
            Mode:Mode

        });
        Bill.save();
        //Now Updating Releted fields in Batch, Item , Customer , Supplier
        Items.forEach(ele => {
           batches.updateOne({Batch_Id:ele.Batch_Id},{$inc:{Quantity:(ele.Quantity)*(-1)}}, function (err,result){console.log(result);});
         

           item.updateOne({_id:ele.ItemCode},{$inc:{Total_Units:(ele.Quantity)*(-1)}},function(err,result){console.log(result);});
          
                    
        });

        customer.updateOne({_id:Client_id},{
            $push :{Bill_ids:Bill_Id} , $set:{Ledger}
        },function(err,result){console.log(result);});
        

        return res.status(200).send("Bil updated syccesfully");
        
    } catch (err) {
        console.log(err.message);
    res
      .status(ErrorCode.HTTP_SERVER_ERROR)
      .json({ errors: { msg: "Server Error!" } });
    }
});


// =================Purchase Billing===================

router.post('./purchase', async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res
        .status(ErrorCode.HTTP_BAD_REQ)
        .json({ errors: errors.array() })
        .send("Error in Validation");
    }
    try {
        const {UserId ,Items,Client_id,date,Mode,TotalCost,Ledger} = req.body;
       let  Bill_Id= generatecode();
        let Bill = new bill({
            UserId:UserId,
            Bill_Id: Bill_Id ,
            Client_id:Client_id,
            Items:Items,
            Date:Date(date),
            TotalCost:TotalCost,
            Mode:Mode

        });
        Bill.save();
        //Now Updating Releted fields in Batch, Item , Customer , Supplier
        supplier.updateOne({_id:Client_id},{
            $push :{Bill_ids:Bill_Id}, $set:{Ledger}
        },function (err,result){console.log(result);});
        
        return res.status(200).send("Purchase Added Sccesfully");                 

        
    } catch (err) {
        console.log(err.message);
    res
      .status(ErrorCode.HTTP_SERVER_ERROR)
      .json({ errors: { msg: "Server Error!" } });
    }
});

export default router ;