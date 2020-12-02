import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    category_id: string;

    @Column()
    time: {
        text: String;
        datetime_start: string;
        datetime_end: string;
        repetition: {
            interval_text: string;
            interval_number: number;
        };
    };

    @Column()
    locations: [
        {
            order: number;
            address: string;
            description: string;
            coordinates: {
                latitude: number;
                longitude: number;
            };
        }
    ];

    @Column()
    transportation: {
        method: string;
        moblyt_trip_id: string;
        steps: [
            {
                order: number;
                origin: string;
                destination: string;
                datetime_start: string;
                datetime_end: string;
                confirmations: {
                    at_start: boolean;
                    at_end: boolean;
                };
            }
        ];
    };

    @Column()
    sharing: {
        chats: [string];
        contacts: [string];
        only_if_emergency: boolean;
        specific_datetime: string;
    };

    @Column()
    notify: {
        at_event_start: boolean;
        at_event_end: boolean;
        if_missing_mandatory_confirmation: boolean;
    };
    @Column()
    confirmations: {
        at_event_start: {
            ask: boolean;
            mandatory: boolean;
        };
        max_delay_missing_confirmation: number;
        additional: [
            {
                datetime: string;
                mandatory: boolean;
            }
        ];
    };

    @Column({ type: "datetime" })
    created_at: string;
}
