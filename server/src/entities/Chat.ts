import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { uuid } from "uuidv4";

//CREATE BY IS ID, AND CREATED AT MUST HAVE DEFAULT

@Entity()
export class Chat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    icon_url: string;

    @Column()
    created_by: string;

    @Column({ type: "datetime" })
    created_at: string;
}
