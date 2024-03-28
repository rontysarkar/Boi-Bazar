import { NavLink } from "react-router-dom";
import bookSvg from '../assets/bok.svg'


const NavBar = () => {
    return (
        <div className="navbar mt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/listedBooks'} >Listed Book</NavLink></li>
                        <li><NavLink to={'/latestBook'} >Latest Book</NavLink></li>
                        <li><NavLink to={'/pagesToRead'} >Pages To Read</NavLink></li>
                        <li><NavLink to={'/aboutUs'} >About Us</NavLink></li>
                    </ul>
                </div>
                <a className="btn  btn-ghost  text-xl lg:text-3xl text-secondary font-bold ">Boi<img className="w-6" src={bookSvg} alt="" /> <span className="text-primary">Bazar </span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-4  font-bold">
                    <li><NavLink to={'/'} className={({ isActive, isPending }) =>
                      isActive
                        ? "border border-green-400 text-green-400"
                        : isPending
                        ? "pending"
                        : ""
                    } >Home</NavLink></li>
                    <li><NavLink to={'/listedBooks'}  className={({ isActive, isPending }) =>
                      isActive
                        ? "border border-green-400 text-green-400"
                        : isPending
                        ? "pending"
                        : ""
                    } >Listed Books</NavLink></li>
                    
                    <li><NavLink to={'/latestBook'}  className={({ isActive, isPending }) =>
                      isActive
                        ? "border border-green-400 text-green-400"
                        : isPending
                        ? "pending"
                        : ""
                    } >Latest Books</NavLink></li>
                    <li><NavLink to={'/pagesToRead'}  className={({ isActive, isPending }) =>
                      isActive
                        ? "border border-green-400 text-green-400"
                        : isPending
                        ? "pending"
                        : ""
                    } >Pages To Read</NavLink></li>
                    <li><NavLink to={'/aboutUs'}  className={({ isActive, isPending }) =>
                      isActive
                        ? "border border-green-400 text-green-400"
                        : isPending
                        ? "pending"
                        : ""
                    } >About Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex space-x-4">
                <a className="btn bg-green-400 text-white">Sign In</a>
                <a className="btn bg-[#59c6d2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;