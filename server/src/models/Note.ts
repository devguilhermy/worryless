import { uuid } from "uuidv4";
import mongoose from "../database";

const NoteSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid,
    },
    user_id: {
        type: String,
        required: true,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    body: { type: String, required: true },
    attachment: [
        {
            type: {
                type: String,
                content: String,
            },
        },
    ],
    category: { type: String, ref: "Category" },
    sharees: {
        users: [{ type: String, ref: "User" }],
        chats: [{ type: String, ref: "User" }],
    },
    sharing_options: {
        emergency: { type: Boolean, required: true },
        posthumous: { type: Boolean, required: true },
        datetime: Date,
    },
    created_at: { type: Date, default: Date.now },
});

const NoteModel = mongoose.model("Note", NoteSchema);

export { NoteModel };
