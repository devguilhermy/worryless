import { uuid } from "uuidv4";
import mongoose from "../database";

const EventSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid,
    },
    title: {
        type: String,
        required: true,
    },
    description: String,
    category: { type: String, ref: "Category", required: true },
    time: {
        type: {
            text: String,
            datetime_start: Date,
            datetime_end: Date,
            repetition: {
                interval_text: String,
                interval_number: Number,
            },
        },
        required: true,
    },
    locations: [
        {
            _id: false,
            order: Number,
            address: String,
            description: String,
            coordinates: {
                latitude: Number,
                longitude: Number,
            },
        },
    ],
    transportation: {
        method: String,
        moblyt_trip_id: String || null,
        steps: [
            {
                _id: false,
                order: String,
                origin: String,
                destination: String,
                datetime_start: Date,
                datetime_end: Date,
                confirmations: { at_start: Boolean, at_end: Boolean },
            },
        ],
    },
    companions: [String],
    sharing: {
        chats: [{ type: String, ref: "Chat" }],
        users: [{ type: String, ref: "User" }],
        only_if_emergency: Boolean,
        specific_datetime: Date || null,
    },
    notify: {
        at_event_start: Boolean,
        at_event_end: Boolean,
        if_missing_mandatory_confirmation: Boolean,
    },
    confirmations: {
        at_event_start: { ask: Boolean, mandatory: Boolean },
        at_event_end: { ask: Boolean, mandatory: Boolean },
        max_delay_missing_confirmation: Number,
        additional: [
            {
                _id: false,
                datetime: Date,
                mandatory: Boolean,
            },
        ],
    },
    created_at: { type: Date, default: Date.now },
});

const EventModel = mongoose.model("Event", EventSchema);

export { EventModel };
