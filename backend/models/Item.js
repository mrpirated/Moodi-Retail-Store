import { Schema, model } from "mongoose";

const ItemSchema = Schema({
	UserId: {
		type: String,
		required: true,
	},
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
	Weight_Volume: {
		type: String,
		required: true,
	},

	Batches: {
		type: Number,
		default: 0,
	}, //Array of Batch Ids
});

export default model("item", ItemSchema);
