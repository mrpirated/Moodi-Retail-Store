import Customer from '../models/Customer';
import bill from '../models/Bill'
import mongoose from 'mongoose';
import { Router } from "express";
const router = Router();
import { validationResult } from "express-validator";

router.get("/customer", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res
      .status(ErrorCode.HTTP_BAD_REQ)
      .json({ errors: errors.array() })
      .send("Error in Validation");
  }
  try {
    const { UserId, Name } = req.body;
    let customer = await Customer.findOne({ UserId, Name });
    if (customer) {
     let transactions = bill.find({Client_id:customer.Customer_Id}).sort({date:-1}).limit(10) ;
     customer.transactions = transactions ;
      return res.status(200).send(customer);
    } else {
      return res.status(200).send("Customer details not found");
    }
  } catch (err) {
    console.log(err.message);
    res
      .status(ErrorCode.HTTP_SERVER_ERROR)
      .json({ errors: { msg: "Server Error!" } });
  }
});

router.post("/addcustomer",
  [
    check('email', 'Please input valid email').isEmail(),
  ],
  async (req, res) => {


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res
        .status(ErrorCode.HTTP_BAD_REQ)
        .json({ errors: errors.array() })
        .send("Error in Validation");
    }
    try {
      const { UserId, Name, phone, address, email, ledger } = req.body;

      let customer = new Customer({
        UserId: UserId,
        Customer_Id: new mongoose.Types.ObjectId(),
        Name: Name,
        phone: phone,
        Address: address,
        Email: email,
        Ledger: ledger,
      })
      await customer.save();
      console.log(customer);
      return res.status(200).send("New Customer Added Successfully");

    } catch (err) {
      console.log(err.message);
      res
        .status(ErrorCode.HTTP_SERVER_ERROR)
        .json({ errors: { msg: "Server Error!" } });
    }
  });
export default router;
