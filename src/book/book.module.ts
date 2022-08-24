import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { AuthorService } from '../author/author.service';

@Module({
  imports: [],
  controllers: [],
  providers: [BookService, BookResolver, AuthorService],
})
export class BookModule {}
