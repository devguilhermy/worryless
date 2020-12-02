import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    title: string;

    @Column()
    body: string;

    @Column()
    attachments: [{ type: string; url: string }];

    @Column()
    category: string;

    @Column()
    sharees: {
        chats: [string];
        contacts: [string];
    };

    @Column()
    sharing_options: {
        chats: boolean;
        posthumous: boolean;
        datetime: boolean;
    };

    @Column({ type: "datetime" })
    created_at: string;
}
