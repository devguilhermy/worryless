import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    account: {
        email: string;
        // type: String,
        // required: true,
        // unique: true,
        // lowercase: true,
        password: string;
        // type: String,
        // required: true,
        // select: false,
        sso_token: string;
    };

    @Column()
    proof_of_life: {
        interval: number;
        fixed_time: string;
        additional: [
            {
                datetime: string;
                mandatory: boolean;
            }
        ];
    };

    @Column()
    emergency: {
        missing_proof_of_life: boolean;
        // type: Boolean,
        // required: true,
        // default: true,

        notify: {
            chats: [string];
            contacts: [string];
        };
        info_sharing_options: {
            // default: true,
            location: boolean;
            current_event: boolean;
            last_event: boolean;
            all_records: boolean;
        };
    };

    @Column()
    posthumous: {
        // default: 86400
        max_delay_for_confirmation: number;
        // default: 1
        max_confirmations_missed: number;
        info_sharing_options: {
            last_event: boolean;
            all_records: boolean;
        };
    };

    @Column()
    current_monitoring: string;

    @Column({ type: "datetime" })
    created_at: string;
}
