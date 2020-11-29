import { uuid } from "uuidv4";
import mongoose from "../database";

const ChatSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    icon_url: String,
    created_by: { type: String, ref: "User", required: true },
    created_at: { type: Date, default: Date.now },
});

const ChatModel = mongoose.model("Chat", ChatSchema);

export { ChatModel };
