import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Contact from "../../page/Contact/Contact";

const MainLayOut = () => {
    return (
        <>
            <div className="">
                {/* Navbar */}
                <Navbar></Navbar>
                {/* Outlet */}
                <div className='min-h-[calc(100vh-100px)]'>
                    <Outlet></Outlet>
                </div>
                <div>
                    {/* <Contact></Contact> */}
                </div>
                {/* Footer */}
                <Footer></Footer>
                

            </div>
           
        </>

    );
};

export default MainLayOut;