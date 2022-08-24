import { Book } from './book.entity';
import books from '../data/books';
import { CreateBookInput } from '../graphql';

export class BookService {
  books: Partial<Book>[];

  constructor() {
    this.books = books;
  }

  findMany() {
    return this.books;
  }

  findById(id: number) {
    const book = this.books.find((book) => book.id === id);

    if (book) {
      return book;
    }

    return null;
  }

  findByAuthorId(authorId: number) {
    const books = this.books.filter((book) => book.author === authorId);

    if (books.length) {
      return books;
    }

    return null;
  }

  createBook(book: CreateBookInput) {
    this.books = [book, ...this.books];

    return book;
  }
}
