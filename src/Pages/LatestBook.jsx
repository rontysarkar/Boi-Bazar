import { useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";

const LatestBook = () => {

    const latestBooks = useLoaderData()
    console.log(latestBooks)

    return (
        <div>
            <div className="bg-base-200 py-8 my-6 rounded-2xl" >
                <h1 className="text-5xl text-center font-bold  ">Latest Books</h1>
            </div>
            <div className='grid lg:grid-cols-3 gap-8 mt-10 mx-auto '>
                {
                    latestBooks.map(book => <BookCard key={book.bookId} book={book} />)
                }
            </div>

        </div>
    );
};

export default LatestBook;