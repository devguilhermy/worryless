import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    chat_id: string;

    @Column()
    text: string;

    @Column()
    attachments: [{ type: string; url: string }];

    @Column()
    note_id: string;

    @Column()
    event_id: string;

    @Column({ type: "datetime" })
    created_at: string;
}
