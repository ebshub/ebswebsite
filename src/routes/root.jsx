import { Link, useLoaderData } from "react-router-dom"
// import { getBooks } from "../books"
// import { BOOKS } from "../components/bookObjects.js";
import { getBooks, getLogos } from "../books.js"

export async function loader() {
    // const url = new URL(request.url);
    const books = await getBooks();
    // console.log("asdfasdf", books)
    const logos = await getLogos()
    console.log("books:", books, "logos:", logos)
    return { books, logos };
  }


export default function Root() {
    const { books } = useLoaderData()
    
    // BOOKS.map((book) => (
    //     books.push(book)
    //     ))

    return (
        <>
        <h1>sidebar react router books</h1>
        <div>
            <h2>this should be where books are loaded?</h2>
        </div>
       
        <nav>
        {books.length ? (
            <ul>
              {books.map((book) => ( 
                  <li key={book.id}>
                  <Link to={`books/${book.id}`}>
                      <img src={book.logo}></img>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No books</i>
            </p>
          )}
        {/* <ul>
            <li>
              <Link to={`/books/1`}>isabelle</Link>
            </li>
            <li>
              <Link to={`/books/2`}>next book not made yet</Link>
            </li>
          </ul> */}
        </nav>
        </>
    )
}