import { uuid } from "uuidv4";
import mongoose from "../database";

const MonitoringSchema = new mongoose.Schema({
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
    datetime_start: { type: Date, required: true },
    datetime_end: { type: Date, required: true },
    confirmations: {
        interval: Number,
        datetime: Date,
        skip_regular_confirmation_requests: Boolean,
    },
    button_sequence_function: {
        consider_emergency: Boolean,
        notify: {
            users: [{ type: String, ref: "User" }],
            chats: [{ type: String, ref: "Chat" }],
            message: String,
            share_location: Boolean,
        },
        send_notes: [{ type: String, ref: "Note" }],
    },
    created_at: { type: Date, default: Date.now },
});

const MonitoringModel = mongoose.model("Monitoring", MonitoringSchema);

export { MonitoringModel };
