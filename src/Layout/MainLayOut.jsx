import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import './MainLayOUt.css'
import { Toaster } from "react-hot-toast";

const MainLayOut = () => {
    return (
        <div className="container mx-auto lg:px-20 ">
            <div className="wark">
                <NavBar />
            </div>
            <Outlet/>
            <Toaster />
        </div>
    );
};

export default MainLayOut;