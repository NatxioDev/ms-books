import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BookEntity } from './book.entity'
import { BookDto } from './book.dto';

@Injectable()
export class BookService {

    constructor(
        @InjectRepository(BookEntity)
        private readonly bookRepository: Repository<BookEntity>){
    }

    async findAll(){
        return await this.bookRepository.find();
    }

    async findById(idBook: number) {
        return await this.bookRepository.findOneBy({ idBook });
    }
    
    async insert(data: BookDto){
        const book = this.bookRepository.create(data);
        await this.bookRepository.save(data);
        return book;
    }

    async update(idBook: number, data: Partial<BookDto>){
        await this.bookRepository.update({ idBook }, data);
        return await this.bookRepository.findOneBy({ idBook });
    }
    
    async delete(idBook: number) {
        await this.bookRepository.delete({ idBook });
        return { deleted: true };
    }
}
