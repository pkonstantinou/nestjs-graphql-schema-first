import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookService } from './book.service';
import { CreateBookInput, FindBookInput } from '../graphql';

@Resolver('Book')
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query('books')
  getAllBooks() {
    return this.bookService.findMany();
  }

  @Query('book')
  getBook(@Args('input') book: FindBookInput) {
    return this.bookService.findById(book.id);
  }

  @Mutation('createBook')
  createBook(@Args('input') book: CreateBookInput) {
    return this.bookService.createBook(book);
  }
}
