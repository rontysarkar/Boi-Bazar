import { useLoaderData, useParams } from "react-router-dom";
import { getReadInfo } from "../utility/getReadInfo";
import toast from 'react-hot-toast';
import { getWishListInfo } from "../utility/getWishListInfo";



const BookDetails = () => {
    const data = useLoaderData();
    const { id } = useParams()
    const book = data.find(b => b.bookId == id)
    const {bookId, bookName, author, image, tags, category, rating, review, yearOfPublishing, totalPages, publisher } = book;
    

    
const handleReadBtn = () => {
    const saveReadData = getReadInfo();
    const existedReadData = saveReadData.find(b => b.bookId == bookId);
    if(!existedReadData){
        saveReadData.push(book)
        localStorage.setItem('read',JSON.stringify(saveReadData))
        toast.success('Book Added To Read List')
    }else{
        toast.error('You Have Already Read This Book!')
    }
    
    
}

const handleWishListBtn = () =>{
    const saveReadData = getReadInfo();
    const saveWishListData = getWishListInfo();

    const existedReadData = saveReadData.find(b => b.bookId == bookId);
    const existedWishListData = saveWishListData.find(b => b.bookId == bookId)
    if(existedReadData){
        toast.error('You Have Already Read This Book!')
    }else if(!existedWishListData){
        saveWishListData.push(book)
        localStorage.setItem('wishlist',JSON.stringify(saveWishListData));
        toast.success('Book Added To Wish List')
    }
    else{
        toast.error('You have Already Add this Book in WishList')
    }
    

}



    return (
        <div className=" min-h-[80vh] mt-12 rounded-3xl ">
            <div className="hero-content flex-col lg:flex-row justify-between  ">
                <div className="bg-base-200 h-[812px] w-3/6 flex items-center justify-center rounded-xl ">
                    <img src={image} className="  h-[812px] " />
                </div>
                <div className="w-1/2 space-y-5  ">
                    <h1 className="text-4xl font-bold ">{bookName}</h1>
                    <h5 className="text-xl font-semibold">By : {author}</h5>
                    <hr />
                    <h2 className="text-xl font-semibold">{category}</h2>
                    <hr />
                    <p className="text-lg"> <span className="text-xl font-bold">Review</span> :{review}</p>
                    <div className="flex gap-4 ">
                        <div className="flex items-center gap-4 ">
                            <h1 className="text-xl font-bold">Tag</h1>
                            {
                                tags.map(tag => <button key={tag} className='px-2 py-1  bg-[#f4fcf3] rounded-full text-[#23be0a]'>{tag}</button>)
                            }
                        </div>
                    </div>
                    <hr />

                    <div className="flex gap-10 text-lg">
                        <h1>Number of Pages:</h1> <span className="font-bold ml-8 ">{totalPages}</span>

                    </div>
                    <div className="flex gap-10 text-lg">
                        <h1>Publisher:</h1> <span className="font-bold ml-24">{publisher}</span>

                    </div>
                    <div className="flex gap-10 text-lg">
                        <h1>Year of Publishing::</h1> <span className="font-bold ml-8 ">{yearOfPublishing}</span>

                    </div>
                    <div className="flex gap-10 text-lg">
                        <h1>Rating:</h1> <span className="font-bold ml-28 ">{rating}</span>

                    </div>
                    <div className="space-x-6">
                        <button onClick={handleReadBtn} className="btn btn-outline px-6 font-bold">Read</button>
                        <button onClick={handleWishListBtn} className="btn bg-[#50b1c9] text-white text-lg">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;