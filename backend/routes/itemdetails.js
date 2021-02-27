import { Router } from "express";
const router = Router();
import { check, validationResult } from "express-validator";
import User from "../models/User";
import Items from "../models/Item";
import mongoose from "mongoose";

router.post("/items", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(ErrorCode.HTTP_BAD_REQ).json({ errors: errors.array() }).send("Error in Validation");
  }
  try {
    const item = new Items({
      UserId: req.body.UserId,
      Name: req.body.Name,
      Company: req.body.Company,
      Line: req.body.Line,
      Type: req.body.Type,
      Total_Units: req.body.Total_Units,
      Weight_Volume: req.body.Weight_Volume,
      Batches: req.body.Batches,
    });
    await item.save();
    res.status(200).send(item);
  } catch (err) {
    console.log(err.message);
    res
      .status(ErrorCode.HTTP_SERVER_ERROR)
      .json({ errors: { msg: "Server Error!" } });
  }
});

router.get("/items", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(ErrorCode.HTTP_BAD_REQ).json({ errors: errors.array() });
  }
  try {
    const { _id, UserId } = req.body;
    let item = await Items.findOne({ _id, UserId });
    if (item) {
      return res.status(200).send(item);
    } else {
      return res.status(200).send("Item not found");
    }
  } catch (err) {
    console.log(err.message);
    res
      .status(ErrorCode.HTTP_SERVER_ERROR)
      .json({ errors: { msg: "Server Error!" } });
  }
});

export default router;