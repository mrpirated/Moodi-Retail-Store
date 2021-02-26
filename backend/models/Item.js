import { Schema, model } from "mongoose";

const ItemSchema = Schema({
  Name: {
    type: String,
    required: true,
  },
  Company: {
    type: String,
    required: true,
  },
  Line: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Total_Units: { type: Number, min: 0 },

  Batches: [{ type: String }], //Array of Batch Ids
});

export default model("item", ItemSchema);
