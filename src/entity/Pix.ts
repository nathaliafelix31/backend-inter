import {
    Entity, 
    PrimaryGeneratedColumn, 
    JoinColumn, 
    OneToOne, 
    Column, 
    CreateDateColumn,
    ManyToOne,
    UpdateDateColumn
} from 'typeorm';

@Entity()
    export class Pix{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    status: string;

    @Column()
    value: number;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;


    }
