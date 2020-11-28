import mongoose from "../database";
import bcrypt from "bcryptjs";
import { uuid } from "uuidv4";

interface UserDoc extends mongoose.Document {
    name: string;
    account: {
        email: string;
        password: string;
        sso_token: string;
    };
    proof_of_life: {
        interval: number;
        fixed_time: Date;
        additional: {
            datetime: Date;
            mandatory: boolean;
        }[];
    };
    // sharing: {
    //     notes: Array<string>;
    // };
    emergency: {
        missing_proof_of_life: boolean;
        missing_event_step_confirmation: boolean;
        notify: {
            users: Array<number>;
            groups: Array<number>;
        };
        sharing_options: {
            location: boolean;
            current_event: boolean;
            last_event: boolean;
            all_records: boolean;
        };
    };
    posthumous: {
        max_delay_for_confirmation: number;
        max_confirmations_missed: number;
        sharing_options: {
            last_event: boolean;
            all_records: boolean;
        };
    };
    current_monitoring: number;
    created_at: string;
}

const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid,
    },
    name: {
        type: String,
        required: true,
    },
    account: {
        type: {
            email: {
                type: String,
                required: true,
                unique: true,
                lowercase: true,
            },
            password: {
                type: String,
                required: true,
                select: false,
            },
            sso_token: String,
        },
        required: true,
    },
    proof_of_life: {
        interval: {
            type: Number,
        },
        fixed_time: {
            type: Date,
        },
        additional: [
            {
                datetime: { type: Date, required: true },
                mandatory: {
                    type: Boolean,
                    required: true,
                },
            },
        ],
    },
    // sharing: {
    //     notes: [
    //         {
    //             note_id: {
    //                 type: mongoose.Schema.Types.ObjectId,
    //                 ref: "Note",
    //                 required: true,
    //             },
    //             sharees: {
    //                 users: [
    //                     {
    //                         type: mongoose.Schema.Types.ObjectId,
    //                         ref: "User",
    //                         required: true,
    //                     },
    //                 ],
    //                 groups: [
    //                     {
    //                         type: mongoose.Schema.Types.ObjectId,
    //                         ref: "Group",
    //                         required: true,
    //                     },
    //                 ],
    //             },
    //         },
    //     ],
    //     events: [
    //         {
    //             note_id: {
    //                 type: mongoose.Schema.Types.ObjectId,
    //                 ref: "Note",
    //                 required: true,
    //             },
    //             sharees: {
    //                 users: [
    //                     {
    //                         type: mongoose.Schema.Types.ObjectId,
    //                         ref: "User",
    //                         required: true,
    //                     },
    //                 ],
    //                 groups: [
    //                     {
    //                         type: mongoose.Schema.Types.ObjectId,
    //                         ref: "Group",
    //                         required: true,
    //                     },
    //                 ],
    //             },
    //         },
    //     ],
    //     location: {
    //         always_on: {
    //             type: Boolean,
    //             required: true,
    //         },
    //         sharees: {
    //             users: [
    //                 {
    //                     type: mongoose.Schema.Types.ObjectId,
    //                     ref: "User",
    //                     required: true,
    //                 },
    //             ],
    //             groups: [
    //                 {
    //                     type: mongoose.Schema.Types.ObjectId,
    //                     ref: "Group",
    //                     required: true,
    //                 },
    //             ],
    //         },
    //     },
    // },
    emergency: {
        type: {
            missing_proof_of_life: {
                type: Boolean,
                required: true,
                default: true,
            },
            notify: {
                type: {
                    users: [
                        {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: "User",
                            required: true,
                        },
                    ],
                    groups: [
                        {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: "Group",
                            required: true,
                        },
                    ],
                },
                required: true,
            },
            info_sharing_options: {
                type: {
                    location: {
                        type: Boolean,
                        default: true,
                    },
                    current_event: {
                        type: Boolean,
                        default: true,
                    },
                    last_event: {
                        type: Boolean,
                        default: true,
                    },
                    all_records: {
                        type: Boolean,
                        default: false,
                    },
                },
                required: true,
            },
        },
    },
    posthumous: {
        type: {
            max_delay_for_confirmation: { type: Number, default: 86400 },
            max_confirmations_missed: { type: Number, default: 1 },
            info_sharing_options: {
                last_event: { type: Boolean, default: true },
                all_records: { type: Boolean, default: false },
            },
        },
        required: true,
    },
    current_monitoring: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Monitoring",
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
