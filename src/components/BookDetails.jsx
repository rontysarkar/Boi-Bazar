import { useParams } from "react-router-dom";
import useBooksData from "../Hooks/useBooksData";
import { useEffect, useState } from "react";

const BookDetails = () => {
    const [singleBook,setSingleBook] = useState();
    const {data} = useBooksData();
    const {id} = useParams();
 
    console.log(singleBook)
    useEffect(()=>{
       if(data){
        const book = data.find(book => book.bookId==id)
       
       setSingleBook(book)
       }
    },[data]);
    return (
        <div className=" min-h-[80vh] mt-12 rounded-3xl ">
            <div className="hero-content flex-col lg:flex-row justify-between  ">
                <div className="bg-base-200 min-h-[80vh] w-4/6 ">
                <img src='{}' className="max-w-sm  rounded-lg " />
                </div>
                <div className="w-1/2 space-y-5">
                    {/* <h1 className="text-4xl font-bold ">{bookName}</h1>
                    <h5 className="text-xl font-semibold">By : {author}</h5> */}
                    <hr />
                    <h2 className="text-xl font-semibold">function</h2>
                    <hr />
                    <p className="text-lg"> <span className="text-xl font-bold">Review</span> : Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare.
                        Id neque neque pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh tristique massa non.</p>
                    <div className="flex gap-4 ">
                        <h1 className="text-xl font-bold">tag</h1>
                        <a href="">comdy</a><a href="">thilire</a>
                    </div>
                    <hr />
                   
                    <div className="flex gap-10 text-lg">
                    <h1>Number of Pages:</h1> <span className="font-bold ml-8 ">355</span>
                     
                    </div>
                    <div className="flex gap-10 text-lg">
                    <h1>Publisher:</h1> <span className="font-bold ml-24">J.B Lippincott & Co.</span>
                    
                    </div>
                    <div className="flex gap-10 text-lg">
                    <h1>Number of Pages:</h1> <span className="font-bold ml-8 ">1960</span>
                    
                    </div>
                    <div className="flex gap-10 text-lg">
                    <h1>Rating:</h1> <span className="font-bold ml-28 ">4.8</span>
                    
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