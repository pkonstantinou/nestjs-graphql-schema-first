import { Book } from './book.schema';
import books from '../data/books';
import { CreateBookInput } from '../graphql';

export class BookService {
  books: Book[];

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

  createBook(book: CreateBookInput) {
    this.books = [book, ...this.books];
    console.log(this.books);

    return book;
  }
}
