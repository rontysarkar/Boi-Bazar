
import ReadBookCard from "./ReadBookCard";
import { useOutletContext } from "react-router-dom";




const ReadBooks = () => {
    const [listedBooks] = useOutletContext();

    return (
        <div>
            {
                listedBooks.length == 0 ? <h1 className="text-5xl mt-10 font-bold opacity-60">Your Read Book is : 0</h1> : ''
            }
            {
                listedBooks.map(book => <ReadBookCard key={book.bookId} book={book} />)
            }
        </div>
    );
};

export default ReadBooks;