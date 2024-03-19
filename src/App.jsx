import { Route, Routes } from "react-router-dom";
import { BookList } from "./components/BookList";
import { Book } from "./components/Book";


export default function App() {
  return (
    <>
      <nav>
        <ul>
          {/* <li>
            <Link to="/"></Link>
          </li> */}
          {/* <li>
            <Link to="/books">Books</Link>
          </li> */}
        </ul>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>
    </>
  );
}
