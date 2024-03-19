import { Link } from "react-router-dom"
// import { getBooks } from "../books"
import { BOOKS } from "../components/bookObjects.js";

// export async function loader() {
//     const books = await getBooks();
//     return { books };
//   }


export default function Root() {
    const books = []
    
    BOOKS.map((book) => (
        books.push(book)
        ))

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
                    {/* {book.artist || book.year ? (
                        <>
                        {book.id} {book.year}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {book.favorite && <span>★</span>} */}
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