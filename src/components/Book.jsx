import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

export function Book({book}) {
  const { id } = useParams();
//   console.log(book.id);

  return (
    <>
      <h1>one Book {id}</h1>
      {/* <Link to={`/books/1`}> */}
        <img src={book.logo} />
      {/* </Link> */}
    </>
  );
}
