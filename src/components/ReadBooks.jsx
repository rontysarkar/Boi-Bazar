
import { getReadInfo } from "../utility/getReadInfo";
import ReadBookCard from "./ReadBookCard";


const ReadBooks = () => {
    
    const localStorageReadData = getReadInfo();
    
    
    
    return (
        <div>
            
            {
                localStorageReadData.map(book=><ReadBookCard key={book.bookId} book={book} />)
            }
        </div>
    );
};

export default ReadBooks;