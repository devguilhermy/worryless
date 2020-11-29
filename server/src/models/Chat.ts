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
    participants: [
        {
            _id: false,
            user_id: { type: String, required: true },
            is_admin: { type: Boolean, required: true },
        },
    ],
});

const ChatModel = mongoose.model("Chat", ChatSchema);

export { ChatModel };
