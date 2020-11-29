import { uuid } from "uuidv4";
import mongoose from "../database";

const ParticipantSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid,
    },
    user_id: { type: String, ref: "User", required: true },
    chat_id: { type: String, ref: "Chat", required: true },
});

const ParticipantModel = mongoose.model("Participant", ParticipantSchema);

export { ParticipantModel };
