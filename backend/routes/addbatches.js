import { Router } from "express";
const router = Router();
import { check, validationResult } from "express-validator";
import User from "../models/User";
import Items from "../models/Item";
import batches from "../models/batches";
import mongoose from "mongoose";
import generatecode from "../controllers/generatebarcode";
router.post("/addbatch", async (req, res) => {

    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res
      .status(ErrorCode.HTTP_BAD_REQ)
      .json({ errors: errors.array() })
      .send("Error in Validation");
  }
  try{
    const {UserId,Date,ItemCode,Quantity,Cost_price,Selling_price,MRP,HSN_Code,CGST,SGST,IGST,Expiry,Discount}=req.body;
    const Batch_Id=generatecode();
    let batch = new batches({
      UserId :UserId,
      Date: Date,
      Batch_Id:Batch_Id,
      ItemCode:  ItemCode,
      Quantity : Quantity,
      Cost_price :Cost_price,
      Selling_price :Selling_price ,
      MRP :MRP,
      HSN_Code :HSN_Code,
      CGST: CGST,
      SGST: SGST,
      IGST: IGST,
      Expiry: Expiry,
      Discount :Discount,
    })
    batch.save();
    return res.status(200).send(batch);

  }catch (err) {
    console.log(err.message);
    res
      .status(ErrorCode.HTTP_SERVER_ERROR)
      .json({ errors: { msg: "Server Error!" } });
  }
});
router.get("/getbatch", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res
      .status(ErrorCode.HTTP_BAD_REQ)
      .json({ errors: errors.array() })
      .send("Error in Validation");
  }
  try {
    const { Date, ItemCode, UserId } = req.body;
    let batch = await batches.findOne({ Date, ItemCode, UserId });
    if (batch) {
      return res.status(200).send(batch);
    } else {
      return res.status(200).send("Batch not found");
    }
  } catch (err) {
    console.log(err.message);
    res
      .status(ErrorCode.HTTP_SERVER_ERROR)
      .json({ errors: { msg: "Server Error!" } });
  }
});
export default router;
