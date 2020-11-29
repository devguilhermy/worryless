import { uuid } from "uuidv4";
import mongoose from "../database";

const ConfirmationSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid,
    },
    user_id: {
        type: String,
        required: true,
        ref: "User",
    },
    event: {
        type: String,
        ref: "User",
    },
    datetime: { type: Date, default: Date.now },
    mandatory: { type: Boolean, required: true },
    confirmed: { type: Boolean, required: true },
    created_at: { type: Date, default: Date.now },
});

const ConfirmationModel = mongoose.model("Confirmation", ConfirmationSchema);

export { ConfirmationModel };
