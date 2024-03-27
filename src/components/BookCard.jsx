
import { CiStar } from "react-icons/ci";

import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {

    const {bookId, bookName, author, image, tags, category, rating } = book;

    return (
        <div className="mx-auto">
            <Link className="mx-auto" to={`/bookDetails/${bookId}`}>
            <div className="card card-compact bg-base-100 border p-6 mx-auto cursor-pointer ">
                <figure className="lg:w-[350px] lg:h-56 border mx-auto  rounded-xl bg-gray-50 p-4">
                    <img className=" w-[90%] h-[90%]  " src={image} alt="Shoes" />
                </figure>
                <div className='flex my-4 gap-4'>
                    {
                        tags.map(tag => <button key={tag} className='px-2 py-1  bg-[#f4fcf3] rounded-full text-[#23be0a]'>{tag}</button>)
                    }
                </div>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p className='text-base'>By: {author}</p>
                    <div className='border-b-2 border-dashed py-3'></div>
                </div>
                <div className='flex justify-between px-3 text-lg'>
                    <h1>{category}</h1>
                    <div className="flex justify-center items-center gap-2">
                        <p >{rating}</p>
                        <CiStar className="text-xl mt-1" />
                    </div>
                </div>
            </div>
        </Link>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.object
}

export default BookCard;