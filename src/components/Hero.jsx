import { Link } from 'react-router-dom';
import bookImg from '../assets/images/book.png'

const Hero = () => {
    return (
        <div className="hero  lg:min-h-[70vh] mt-12 rounded-3xl bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img  src={bookImg} className=" w-[60%] lg:max-w-sm  rounded-lg " />
                    <div className="w-1/2">
                        <h1 className=" text-2xl lg:text-6xl font-bold align-baseline  ">Books to freshen up <span  >your bookshelf</span></h1>
                        <Link to={'/listedBooks'}><button className="btn bg-green-500 mt-7 text-white text-lg">View The List</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default Hero;