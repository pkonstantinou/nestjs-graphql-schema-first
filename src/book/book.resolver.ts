import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './book.entity';
import { CreateBookInput, FindBookInput } from '../graphql';
import { AuthorService } from '../author/author.service';

@Resolver('Book')
export class BookResolver {
  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
  ) {}

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

  @ResolveField('author')
  author(@Parent() book: Book) {
    return this.authorService.findById(book.author);
  }
}
