import { uuid } from "uuidv4";
import mongoose from "../database";

const CategorySchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid,
    },
    user_id: {
        type: String,
        required: true,
        ref: "User",
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    notes: [{ type: String, ref: "Note" }],
    events: [{ type: String, ref: "Event" }],
});

const CategoryModel = mongoose.model("Category", CategorySchema);

export { CategoryModel };
