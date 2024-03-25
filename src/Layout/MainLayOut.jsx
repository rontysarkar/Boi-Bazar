import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import './MainLayOUt.css'

const MainLayOut = () => {
    return (
        <div className="container mx-auto px-20 playfair">
            <div className="wark">
                <NavBar />
            </div>
            <Outlet/>
        </div>
    );
};

export default MainLayOut;