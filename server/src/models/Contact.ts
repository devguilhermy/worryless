import { uuid } from "uuidv4";
import mongoose from "../database";

const ContactSchema = new mongoose.Schema({
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
    contact_info: {
        phone: { type: String, required: true },
        is_whatsapp: { type: Boolean, required: true },
        email_address: { type: String, required: true },
    },
    relationship: { type: String, required: true },
    notes: String,
    emergency: { type: Boolean, required: true },
});

const ContactModel = mongoose.model("Contact", ContactSchema);

export { ContactModel };
