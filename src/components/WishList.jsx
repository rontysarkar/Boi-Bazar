import { getWishListInfo } from "../utility/getWishListInfo";
import ReadBookCard from "./ReadBookCard";

const WishList = () => {
    const localStorageData = getWishListInfo();
    
    return (
        <div>
            {
                localStorageData.length == 0 ? <h1 className="text-5xl mt-10 font-bold opacity-60">Your WishList Book is : 0</h1> : ''
            }
            {
                localStorageData.map(book=><ReadBookCard key={book.bookId} book={book} />)
            }
        </div>
    );
};

export default WishList;