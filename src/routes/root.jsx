import { Link, useLoaderData } from "react-router-dom";
import { getBooks, getInSituImages } from "../books.js";
import Info from "../components/Info.jsx";
// import logo1 from "/assets/logos/Fiery_Color_001 copy.png";
import logo2 from "/assets/logos/Fiery_Color_010_ok copy 2.png";
import logo3 from "/assets/logos/Fiery_Color_011 copy 2.png";
import logo4 from "/assets/logos/Fiery_Color_012 copy 2.png";
import logo5 from "/assets/logos/Fiery_Color_013 copy 2.png";
import logo6 from "/assets/logos/Fiery_Color_014 copy 2.png";
import logo7 from "/assets/logos/Fiery_Color_015 copy 2.png";
import logo8 from "/assets/logos/Fiery_Color_016 copy 2.png";
import logo9 from "/assets/logos/Fiery_Color_017 copy 2.png";
import logo10 from "/assets/logos/Fiery_Color_018 copy 2.png";
import logo11 from "/assets/logos/Fiery_Color_019 copy 2.png";
import logo12 from "/assets/logos/Fiery_Color_020 copy 2.png";
import logo13 from "/assets/logos/Fiery_Color_021 copy 2.png";



export async function loader() {
  const books = await getBooks();
  const inSituImages = await getInSituImages();
  //   const logos = await getLogos();
  return { books, inSituImages };
}

export default function Root() {
  //   const { logos, books, inSituImages } = useLoaderData();
  const { books, inSituImages } = useLoaderData();

  //   const availableBooks = books.filter((book) => book.available);
  //   const booksNotYetAvailable = books.filter((book) => !book.available);
  //   const justLogos = booksNotYetAvailable.map(
  //     (notYetAvailable) => notYetAvailable.logo
  //   );

  return (
    <>
      <div className="pt-2 px-2">
        {books.map((book) => (
          <Link to={`books/${book.id}`} key={book.id} className="">
            <div className="flex pb-[0.5px] items-baseline">
              <img src={book.logo} className="w-10"></img>
              <h1 className="px-0.5 text-xs">{book.year}</h1>
            </div>
          </Link>
        ))}
        <div className="flex items-baseline ">
          <img src={logo2} alt="" className="w-10 pb-1" />
        </div>
        <div className="flex items-baseline ">
          <img src={logo3} alt="" className="w-10 pb-1" />
        </div>
        <div className="flex items-baseline ">
          <img src={logo4} alt="" className="w-10 pb-1" />
        </div>
        <div className="flex items-baseline ">
          <img src={logo5} alt="" className="w-10 pb-1" />
        </div>
        <div className="flex items-baseline ">
          <img src={logo6} alt="" className="w-10 pb-1" />
        </div>
        <div className="flex items-baseline ">
          <img src={logo7} alt="" className="w-10 pb-1" />
        </div>
        <div className="flex items-baseline ">
          <img src={logo8} alt="" className="w-10 pb-1" />
        </div>
        <div className="flex items-baseline ">
          <img src={logo9} alt="" className="w-10 pb-1" />
        </div>
        <div className="flex items-baseline ">
          <img src={logo10} alt="" className="w-10 pb-1" />
        </div>
        <div className="flex items-baseline ">
          <img src={logo11} alt="" className="w-10 pb-1" />
        </div>
        <div className="flex items-baseline ">
          <img src={logo12} alt="" className="w-10 pb-1" />
        </div>
        <div className="flex items-baseline ">
          <img src={logo13} alt="" className="w-10 pb-1" />
        </div>
        {/* {logos.map((logo) => (
          <div key={logo} className="flex items-baseline px-0.5  ">
            <img src={logo} className="w-10 pb-1 "></img>
            <h1 className="px-1 text-xs"></h1>
          </div>
        ))} */}
      </div>
      <div className="px-2 py-1">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
          {inSituImages.map((inSituImage) => (
            <div key={inSituImage} className="">
              <img src={inSituImage}></img>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5">
        {inSituImages.map((inSituImage) => (
          <div key={inSituImage} >
            <img src={inSituImage}></img>
          </div>
        ))}
      </div> */}
      {/* <div className="px-3 grid gap-3 sm:grid-cols-12 ">
        {inSituImages.map((inSituImage) => (
          <div key={inSituImage} className="sm:col-span-6 min-h-[100px] ">
            <img src={inSituImage}></img>
          </div>
        ))}
      </div> */}
      <div className="px-3">
        <Info />
      </div>
    </>
  );
}
