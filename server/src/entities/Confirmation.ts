import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Confirmation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    event_id: string;

    @Column()
    datetime: Date;

    @Column()
    mandatory: boolean;

    @Column()
    confirmed: boolean;

    @Column({ type: "datetime" })
    created_at: string;
}
