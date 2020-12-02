import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Monitoring {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    title: string;

    @Column({ type: "datetime" })
    datetime_start: string;

    @Column({ type: "datetime" })
    datetime_end: string;

    @Column()
    confirmations: {
        interval: boolean;
        skip_regular_confirmation_requests: boolean;
        additional: [{ datetime: string }];
    };

    @Column()
    button_sequence_function: {
        consider_emergency: boolean;
        notify: {
            chats: [string];
            contacts: [string];
            message: string;
            share_location: boolean;
        };
        notes_to_share: [string];
        events_to_share: [string];
    };

    @Column({ type: "datetime" })
    created_at: string;
}
