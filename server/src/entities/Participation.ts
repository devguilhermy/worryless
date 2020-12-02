import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Participation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    chat_id: string;

    @Column()
    is_admin: boolean;

    @Column({ type: "datetime" })
    created_at: string;
}
