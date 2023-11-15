import { Controller, Body, Delete, Get, Param, Post, Put, HttpStatus } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './book.dto';


@Controller('books')
export class BookController {

    constructor(private readonly bookService: BookService) {}

    @Get()
    async findAll(){
        return{
            statusCode: HttpStatus.OK,
            data: await this.bookService.findAll()
        };
    }

    @Get(':idBook')
    async findOneById(@Param('idBook') idBook: number){
        return {
            statusCode: HttpStatus.OK,
            data: await this.bookService.findById(idBook),
        };
    }

    @Post('save')
    async create(@Body() bookModel: BookDto){
        return {
            statusCode: HttpStatus.OK,
            message: 'Book added successfully',
            data: await this.bookService.insert(bookModel),
        };
    }

    @Put(':idBook')
    async update(@Param('idBook') idBook: number, @Body() data: Partial<BookDto>){
        return {
            statusCode: HttpStatus.OK,
            message: 'Book update successfully',
            data: await this.bookService.update(idBook, data),
        };
    }

    @Delete(':idBook')
    async delete (@Param('idBook') idBook: number){
        await this.bookService.delete(idBook);
        return {
            statusCode: HttpStatus.OK,
            message: 'Book deleted successfully',
        };
    }
}
