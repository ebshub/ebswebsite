import { useLoaderData } from "react-router-dom";
import { getBook } from "../books";
import ImageSlider from "../components/ImageSlider";

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
      <div id="book">
        <div>
          <h2>
            {book.bookTitle}, {book.year}
          </h2>
          <h1>{book.artist}</h1>
          {/* <iframe src={slides[3].file} autoPlay className="w-full object-cover"/> */}
          {/* <video src={slides[3].file} autoPlay className="w-full object-cover" /> */}
        </div>
        <div>
            <div style={containerStyles}>
            <ImageSlider pictures={pictures} videos={videos}/>
            </div>
        </div>
         {/* <img src={picUrl} /> */}
         <div>
            {pictures.map((picture) => (
            <div key={picture.id} className=" ">
                {/* <img src={picture.imgFile} /> */}
            </div>
            ))}
            <div>
            <p>{book.attribution}</p>
            <h3>{book.pages} pages</h3>
            <h4>{book.size}</h4>
            <h5>
                {book.binding}, {book.price}. {book.edition} edition; Edition amount{" "}
                {book.editionAmount}
            </h5>
            </div>
         </div>
      </div>
    </>
  );
}
