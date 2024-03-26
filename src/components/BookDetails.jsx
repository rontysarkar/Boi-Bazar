import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
const data = useLoaderData();
const {id} = useParams()
const book = data.find(b=>b.bookId == id)
const { bookName, author, image, tags, category, rating,review,yearOfPublishing,totalPages,publisher } = book;
console.log(book)
    
 
    
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
                        <button className="btn btn-outline">Read</button>
                        <button className="btn bg-[#50b1c9] text-white text-lg">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;