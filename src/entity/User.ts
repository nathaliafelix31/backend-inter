import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column
} from 'typeorm';

@Entity()
    export class Pix{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    accountNumber: number;

    @Column()
    accountDigt: number;

    @Column()
    wallet: number;

    @Column()
    email: string;

    @Column()
    password: string;

    



    }
