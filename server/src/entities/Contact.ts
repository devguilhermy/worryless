import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    referencing_user_id: string;

    @Column()
    name: string;

    @Column()
    contact_info: {
        phone: string;
        is_whatsapp: boolean;
        email_address: string;
        facebook: string;
        instagram: string;
        twitter: string;
    };

    @Column()
    relationship: string;

    @Column()
    observations: string;

    @Column()
    emergency: boolean;

    @Column({ type: "datetime" })
    created_at: string;
}
