

const BookCard = ({book}) => {
    
    return (
        <div className="card  bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10 w-[245px] h-[190px] mx-auto object-cover">
                <img src={book.image} alt="Shoes" className="rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;