import { Link, useLoaderData } from "react-router-dom";
import { getBooks, getInSituImages, getLogos } from "../books.js";

export async function loader() {
  const books = await getBooks();
  const inSituImages = await getInSituImages();
  const logos = await getLogos();
  return { books, inSituImages, logos };
}

export default function Root() {
  const { logos, books, inSituImages } = useLoaderData();

  //   const availableBooks = books.filter((book) => book.available);
  //   const booksNotYetAvailable = books.filter((book) => !book.available);
  //   const justLogos = booksNotYetAvailable.map(
  //     (notYetAvailable) => notYetAvailable.logo
  //   );

  return (
    <>
      <nav className="pt-3">
        <ul>
          {books.map((book) => (
            <li key={book.id} className="px-1">
              <Link to={`books/${book.id}`} className="flex ">
                <img src={book.logo} className="h-5 w-14"></img>
                <h1 className="px-1 ">{book.year}</h1>
              </Link>
            </li>
          ))}
          {logos.map((logo) => (
            <li key={logo} className="px-1 pb-1">
              <img src={logo} className="w-14"></img>
            </li>
          ))}
        </ul>
      </nav>
      <div >
      {/* <nav>
          {inSituImages.map((inSituImage) => (
            <div key={inSituImage} className="pb-1 px-1 w-2/6 display-inline">
                <img src={inSituImage}></img>
            </div>
          ))}
      </nav> */}
        
        <ul className="grid grid-rows-4 grid-flow-col gap-4 ">
          {inSituImages.map((inSituImage) => (
            <li key={inSituImage} >
                <img src={inSituImage} className="row-span-2" ></img>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
