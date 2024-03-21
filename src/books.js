import { BOOKS } from "./components/bookObjects.js";
// import localforage from "localforage";
// import { matchSorter } from "match-sorter";
// import sortBy from "sort-by";

export async function getLogos() {
    let logos = []
    // let books = [{}]
    // BOOKS.map((book) => {
    //     if (!('coverImage' in book)) logos.push(book.logo) 
    //     else books.push(book)
    //     })
    BOOKS.map((book) => {
        if (!('coverImage' in book)) logos.push(book.logo) 
    })
    
    return logos
}

export async function getBooks() {
   let books = []

   BOOKS.map((book) => {
    if ('coverImage' in book) books.push(book)
   })

     return books;
}

export async function getBook(id) {
    await `book:${id}`;

    let book = BOOKS.find(book => book.id === Number(id));
    return book ?? null;
}

