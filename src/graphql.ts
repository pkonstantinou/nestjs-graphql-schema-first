
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
}

export interface Book {
    id: string;
    title: string;
    price?: Nullable<number>;
}

export interface IQuery {
    books(): Nullable<Nullable<Book>[]> | Promise<Nullable<Nullable<Book>[]>>;
    book(input: FindBookInput): Nullable<Book> | Promise<Nullable<Book>>;
}

export interface IMutation {
    createBook(input?: Nullable<CreateBookInput>): Book | Promise<Book>;
}

type Nullable<T> = T | null;
