// import { Link } from "react-router-dom";
import { BOOKS } from "../components/bookObjects.js";
import { Book } from "../components/Book";
import { Link } from "react-router-dom"

export function BookList() {

    console.log()
  // return (
  //     <>
  //     <Link to="/books/1">Book 1</Link>
  //     <Link to="/books/2">Book 2</Link>
  //     <Link to="/books/3">Book 3</Link>
  //     <Link to="/books/4">Book 4</Link>
  //     </>
  // )

  //   BOOKS.map((book) => {
  //     console.log(book.logo)
  //   })
//   const uBook =
//     !!BOOKS.length &&
//     BOOKS.map((book) => {
//       return <Book key={book?.id} book={book} logo={book.logo} />;
//     });

// const uBook =
// !!BOOKS.length &&
// BOOKS.map((book) => {
//   return (
//     <Link key={book?.id} book={book} logo={book.logo} >
//         <img src={uBook.logo} /> 
//     </Link>
//   )
// });

  return (
    <div
      style={{ width: "50px", margin: "5px 10px 0px 5px" }}
      className="art-container"
    >
     {/* <img src={uBook.logo} /> */}
      {uBook}
    </div>
  );
}
