import { createContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet, useLocation } from "react-router-dom";
// import useReadSortData from "../Hooks/useReadSortData";
import { getReadInfo } from "../utility/getReadInfo"
import { getWishListInfo } from "../utility/getWishListInfo";

// eslint-disable-next-line react-refresh/only-export-components
export const sortContext = createContext('')



const ListedBooks = () => {
    const { pathname } = useLocation();
    const [index, setIndex] = useState(1)

    const [listedBooks, setListedBook] = useState([])

    useEffect(() => {
        const localStorageReadData = getReadInfo()
        const localStorageWishData = getWishListInfo()

        if (pathname == '/listedBooks') {
            setListedBook(localStorageReadData)
        } else {
            setListedBook(localStorageWishData)
        }

    }, [pathname])



    const handleRatingSort = () => {

        const ratingSort = listedBooks.sort((a, b) => a.rating - b.rating)
        setListedBook([...ratingSort])

    }

    const handlePageSort = () => {
        const pageSort = listedBooks.sort((a, b) => a.totalPages - b.totalPages);
        setListedBook([...pageSort])
    }

    const handleYearSort = () => {
        const yearSort = listedBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing)
        setListedBook([...yearSort])
    }







    return (
        <div>
            <div className="bg-base-200 py-8 my-6 rounded-2xl" >
                <h1 className="text-5xl text-center font-bold  ">Books</h1>
            </div>
            <div className="flex justify-center mb-20">
                <details className="dropdown  ">
                    <summary className="m-1 btn bg-green-500 text-white text-xl px-8 ">Sort By <IoIosArrowDown className="ml-3" /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52">
                        <li onClick={() => handleRatingSort()} ><a>Rating</a></li>
                        <li onClick={handlePageSort} ><a>Number of Pages</a></li>
                        <li onClick={handleYearSort}><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>

            <div className="flex items-center lg:-mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  text-gray-100">
                <Link to='' onClick={() => setIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${index === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 text-gray-50`}>
                    <span className="text-gray-500 font-bold text-xl">Read Books</span>
                </Link>
                <Link to={'wishlist'} onClick={() => setIndex(2)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${index === 2 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 text-gray-50`}>

                    <span className="text-gray-500 font-bold text-xl">Wishlist Books</span>
                </Link>

            </div>
            <hr />
            <Outlet context={[listedBooks]} />
        </div>
    );
};

export default ListedBooks;