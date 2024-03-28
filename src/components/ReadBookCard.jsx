import { IoPersonOutline } from "react-icons/io5";
import { MdInsertPageBreak } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const ReadBookCard = ({ book }) => {
    const { bookId, bookName, author, image, tags, category, rating,  yearOfPublishing, totalPages, publisher } = book;
    return (
        <div className=" border p-2 mt-10 rounded-lg  ">
            <div className="hero-content justify-start items-start flex-col lg:flex-row">
                <div className='bg-base-200 rounded-xl w-full  lg:w-[300px] h-[300px] flex items-center justify-center'>
                    <img className="h-[90%] " src={image} alt="" />
                </div>
                <div className="space-y-5">
                    <h1 className="text-3xl font-bold">{bookName}</h1>
                    <p className="text-xl">By : {author}</p>
                    <div className="lg:flex items-center gap-6 space-y-2 ">
                        <div className="flex gap-4 ">
                            <div className="flex items-center gap-4 ">
                                <h1 className="text-xl font-bold">Tag</h1>
                                {
                                    tags.map(tag => <button key={tag} className='px-2 py-1  bg-[#f4fcf3] rounded-full text-[#23be0a]'>{tag}</button>)
                                }
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl flex items-center gap-2"><CiLocationOn /> Year of Publishing:<span className="font-semibold"> {yearOfPublishing} </span> </h1>
                        </div>
                    </div>
                    <div className="lg:flex items-center gap-8 text-xl space-y-2">
                        <h1 className="flex items-center gap-2"> <IoPersonOutline /> Publisher:  {publisher}</h1>
                        <p className="flex items-center gap-2"> <MdInsertPageBreak />Page  {totalPages}</p>
                    </div>
                    <hr />
                    <div className="space-x-5 space-y-6">
                        <button className='px-4 py-2  bg-[#e0eeff] rounded-full text-[#338eff]'>Category: {category}</button>
                        <button className='px-4 py-2  bg-[#fff3e1] rounded-full text-[#ffc774]'>Category: {rating}</button>
                        <Link to={`/bookDetails/${bookId}`} ><button className='px-4 py-2 mt-4  bg-green-500 rounded-full text-white'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReadBookCard.propTypes = {
    book: PropTypes.object
}

export default ReadBookCard;