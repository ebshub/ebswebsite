import { Link, useLoaderData } from "react-router-dom";
import { getBooks, getInSituImages, getLogos } from "../books.js";
import Info from "../components/Info.jsx"

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
      <div className="pt-3 px-2">
        {books.map((book) => (
          <Link to={`books/${book.id}`} key={book.id} className="">
            <div className="flex items-end px-1">
              <img src={book.logo} className="w-12 pb-2"></img>
              <h1 className="px-1.5 pb-0.5">{book.year}</h1>
            </div>
          </Link>
        ))}
        {logos.map((logo) => (
          <div key={logo} className="flex items-end px-1  ">
            <img src={logo} className="w-12 pb-2"></img>
          </div>
        ))}
      </div>
      <div className="px-3 grid gap-3 sm:grid-cols-12">
        {inSituImages.map((inSituImage) => (
          <div key={inSituImage} className="sm:col-span-6 min-h-[100px]">
            <img src={inSituImage}></img>
          </div>
        ))}
      </div>
      <div className="px-3">
        <Info />
      </div>
    </>
  );
}
