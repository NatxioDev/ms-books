import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class BookEntity {

    @PrimaryGeneratedColumn()
    idBook: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    description: string;

    @Column()
    category: string;

    @Column()
    stock: number;

    @Column()
    price: number;

    @Column()
    status: number;
}
