

const BookCard = ({ book }) => {

    return (
        <div className="card card-compact  bg-base-100 shadow-xl p-6 ">
            <figure>
                <img className="w-80 h-56 border p-4 rounded-xl bg-gray-400" src={book.image} alt="Shoes" />
                </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;