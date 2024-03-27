import { useLoaderData } from "react-router-dom";
import { getBook } from "../books";
import ImageSlider from "../components/ImageSlider";
import { Navbar } from "../components/Navbar";

export async function loader({ params }) {
  console.log({ params });
  const book = await getBook(params.bookId);
  if (!book) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { book };
}

const containerStyles = {
  // width: "100%",
  // height: "100vh",
  // margin: "0 auto",
  width: "500px",
  height: "auto",
  margin: "0 auto",
};

export default function Book() {
  const { book } = useLoaderData();
  let pictures = book.images;
  let videos = book.media;

  //   console.log(pictures)
  //   let picUrl = "/assets/coverImages/IMG_9389 copy.jpg"
  //   console.log("pictures[0].imgFile:",pictures[0].imgFile);
  //   console.log("picUrl:",picUrl)
  //   console.log("pictures:",pictures)
  return (
    <>
      <div className="">
        <div className="">
          <h2 className="flex absolute inset-x-0 top-0 justify-center">
            {book.bookTitle} by {book.artist}
          </h2>
          <Navbar />
          {/* <img className="h-32" src={book.logo} alt="" /> */}
          {/* <h1>{book.artist}</h1> */}
          {/* <iframe src={slides[3].file} autoPlay className="w-full object-cover"/> */}
          {/* <video src={slides[3].file} autoPlay className="w-full object-cover" /> */}
        </div>
        <div>
          <div style={containerStyles}>
            <ImageSlider pictures={pictures} videos={videos} />
          </div>
        </div>
        {/* <img src={picUrl} /> */}
        <div>
          {pictures.map((picture) => (
            <div key={picture.id} className=" ">
              {/* <img src={picture.imgFile} /> */}
            </div>
          ))}
          <div className="m-4 grid grid-cols-1 sm:grid-cols-12 gap-4 text-sm">
            <div className="sm:col-span-8">
              <p>{book.attribution}</p>
              <br />
              <p>{book.notes}</p>
              <br />
              <p>{book.bio}</p>
            </div>
            <div className="sm:col-span-4">
              <h3 className="flex items-baseline">
                Logo:{" "}
                <img src={book.logo} alt={book.artist} className="w-10 px-1" />
              </h3>
              {/* <div className="flow-root">
                <h3 className="float-left">test</h3>
                <h3 className="float-right pl-20">this</h3>
              </div> */}
              <h3>
                Artist: <b>{book.artist}</b>
              </h3>
              <h3>
                Format: <b>{book.size}</b>
              </h3>
              <h3>
                Binding: <b>{book.binding}</b>
              </h3>
              <h3>
                Pages: <b>{book.pages}</b>
              </h3>
              <h3>Price: <b>{book.price}</b></h3>
              <h3>Edition: <b>{book.edition}</b>; {book.editionAmount} copies</h3>
              <br />
              <h3>Artist's Website: <a href="https://isabellecornaro.com/"><b>isabellecornaro.com</b></a></h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
