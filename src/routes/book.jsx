import { useLoaderData } from 'react-router-dom'
import { getBook } from '../books'

export async function loader({params}) {
    console.log({params})
    const book = await getBook(params.bookId)
    if (!book) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return { book };
}

export default function Book() {
    const { book } = useLoaderData()

    return ( 
        <>
            <div id="book">
                <h2>{book.bookTitle}, {book.year}</h2>
                <h1>{book.artist}</h1>
                <img src={book.coverImage} alt={book.artist} className="w-2/4"/>
                <p>{book.attribution}</p>
                <h3>{book.pages} pages</h3>
                <h4>{book.size}</h4>
                <h5>{book.binding}, {book.price}. {book.edition} edition; Edition amount {book.editionAmount}</h5>
            </div>
        </>
    )
}