
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface FindBookInput {
    id: number;
}

export interface CreateBookInput {
    id: number;
    title: string;
    price: number;
    author: number;
}

export interface Author {
    id: string;
    name: string;
    books?: Nullable<Nullable<Book>[]>;
}

export interface IQuery {
    authors(): Nullable<Nullable<Author>[]> | Promise<Nullable<Nullable<Author>[]>>;
    books(): Nullable<Nullable<Book>[]> | Promise<Nullable<Nullable<Book>[]>>;
    book(input: FindBookInput): Nullable<Book> | Promise<Nullable<Book>>;
}

export interface Book {
    id: string;
    title: string;
    price: number;
    author: Author;
}

export interface IMutation {
    createBook(input?: Nullable<CreateBookInput>): Book | Promise<Book>;
}

type Nullable<T> = T | null;
