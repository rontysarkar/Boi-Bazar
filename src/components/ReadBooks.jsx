
import { getReadInfo } from "../utility/getReadInfo";
import ReadBookCard from "./ReadBookCard";


const ReadBooks = () => {
    
    const localStorageReadData = getReadInfo();
    
    
    
    return (
        <div>
            {
                localStorageReadData.length == 0 ? <h1 className="text-5xl mt-10 font-bold opacity-60">Your Read Book is : 0</h1> : ''
            }
            {
                localStorageReadData.map(book=><ReadBookCard key={book.bookId} book={book} />)
            }
        </div>
    );
};

export default ReadBooks;