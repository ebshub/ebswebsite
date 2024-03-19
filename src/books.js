import {BOOKS} from "./components/bookObjects.js"

let allBooks = BOOKS.map((book) => (
    console.log(book)
))

export async function getBooks() {

    return allBooks
    // export async function getBooks()  {
//     await fakeNetwork(`getBooks:${id}`);
//   let books = await localforage.getItem("books");
//   if (!books) books = [];
//   if (query) {
//     books = matchSorter(books, query, { keys: ["artist", "logo"] });
//   }
//   return books.sort(sortBy("last", "createdAt"));
}