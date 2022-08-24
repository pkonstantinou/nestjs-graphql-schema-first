import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { BookService } from '../book/book.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AuthorService, AuthorResolver, BookService],
})
export class AuthorModule {}
