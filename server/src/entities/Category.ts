import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { uuid } from "uuidv4";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: "datetime" })
    created_at: string;
}
