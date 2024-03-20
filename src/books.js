import {BOOKS} from "./components/bookObjects.js"
import localforage from 'localforage'
import { matchSorter } from "match-sorter"
import sortBy from 'sort-by'

let books = []
BOOKS.map((book) => (
    books.push(book)
))

export async function getBook(id) {
    await fakeNetwork(`book:${id}`);
    let books = await localforage.getItem("books");
    let book = books.find(book => book.id === id);
    return book ?? null;
  }

export async function getBooks() {

    return books
    // export async function getBooks()  {
//     await fakeNetwork(`getBooks:${id}`);
//   let books = await localforage.getItem("books");
//   if (!books) books = [];
//   if (query) {
//     books = matchSorter(books, query, { keys: ["artist", "logo"] });
//   }
//   return books.sort(sortBy("last", "createdAt"));
}