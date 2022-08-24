import { Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { Author } from './author.entity';
import { BookService } from '../book/book.service';

@Resolver('Author')
export class AuthorResolver {
  constructor(
    private authorService: AuthorService,
    private bookService: BookService,
  ) {}

  @Query('authors')
  getAllAuthors() {
    return this.authorService.findMany();
  }

  @ResolveField('books')
  books(@Parent() author: Author) {
    return this.bookService.findByAuthorId(author.id);
  }
}
