import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainLayOut = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Outlet */}
            <div className='min-h-[calc(100vh-100px)]'>
            <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;