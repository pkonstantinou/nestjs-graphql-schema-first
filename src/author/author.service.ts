import { Author } from './author.entity';
import authors from '../data/authors';

export class AuthorService {
  authors: Author[];

  constructor() {
    this.authors = authors;
  }

  findMany() {
    return this.authors;
  }

  findById(id: number) {
    const author = this.authors.find((author) => author.id === id);

    if (author) {
      return author;
    }

    return null;
  }
}
