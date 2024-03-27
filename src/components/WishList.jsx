import { useOutletContext } from "react-router-dom";
import ReadBookCard from "./ReadBookCard";

const WishList = () => {

    const [listedBooks] = useOutletContext()

    return (
        <div>
            {
                listedBooks.length == 0 ? <h1 className="text-5xl mt-10 font-bold opacity-60">Your WishList Book is : 0</h1> : ''
            }
            {
                listedBooks.map(book => <ReadBookCard key={book.bookId} book={book} />)
            }
        </div>
    );
};

export default WishList;