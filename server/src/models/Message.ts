import { uuid } from "uuidv4";
import mongoose from "../database";

const MessageSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid,
    },
    user_id: {
        type: String,
        ref: "User",
        required: true,
    },
    chat_id: {
        type: String,
        ref: "Chat",
        required: true,
    },
    text: { type: String, required: true },
    attachments: [{ type: { type: String, url: String } }],
    note_id: { type: String, ref: "Note" },
    event_id: { type: String, ref: "Event" },
    created_at: { type: Date, default: Date.now },
});

const MessageModel = mongoose.model("Message", MessageSchema);

export { MessageModel };
