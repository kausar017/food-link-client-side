import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/Logo/foode-logo.png'
import './Navbar.css'
import { AuthContext } from "../../Provaider/AuthProvaider";
import bg from '../../assets/bg/Sprinkle.svg'


const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const { user, handalLogout } = useContext(AuthContext)


    const handaleLogout = () => {
        handalLogout()
    }


    const link = <>
        <div className="sm:flex md:flex-col lg:flex-row gap-3">
            <NavLink to={'/'} rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 -mb-1 dark:border-">Home</NavLink>
            <NavLink to={'/available'} rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 -mb-1 dark:border-">Available Foods</NavLink>
            <NavLink to={'/addfood'} rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 -mb-1 dark:border-">Add Food</NavLink>
            <NavLink to={'/managmyfood'} rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 -mb-1 dark:border-">Manage My Foods</NavLink>
            <NavLink to={'/foodrequest'} rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 -mb-1 dark:border-">My Food Request</NavLink>
        </div>
    </>

    return (
        <div>
            <header className="pb-10 pt-6  dark:bg-gray-100 text-gray-100 dark:text-gray-800 z-10 fixed w-full"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // height: "100vh",
                    width: "100%",

                }}
            >
                <div className="container flex justify-between h-10 mx-auto">
                    <Link to={'/'} rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex gap-2 items-center p-2 ">
                        <img className="w-14" src={logo} alt="" />
                        <h1 className="text-3xl font-bold">Food Link</h1>
                    </Link>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        {link}
                    </ul>

                    {/* Drop Down Button */}
                    <div className="relative lg:hidden">
                        <button onClick={toggleDropdown} className="px-4 py-2 text-white bg-gray-700 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100 dark:text-gray-800">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>


                        {dropdownOpen && (
                            <div className="absolute right-0 w-48 mt-2 bg-gray-700 text-white rounded shadow-md flex flex-col justify-center items-center">
                                {
                                    user ? <div className=" flex flex-col items-center pt-2">
                                        <img title={user?.displayName} className="w-8 h-8 rounded-full border-2" src={user?.photoURL} alt="" />
                                        <h3>{user?.displayName}</h3>
                                    </div> : ""
                                }
                                {link}
                                {
                                    user ?
                                        <div className="pb-2">
                                            <Link onClick={handaleLogout} rel="noopener noreferrer" href="#" className="flex items-center justify-center px-4 py-2 -mb-1 dark:border-">Logout</Link >
                                        </div>

                                        : <div>

                                            <Link to={'/singup'} rel="noopener noreferrer" href="#" className="flex items-center justify-center px-4 py-2 -mb-1 dark:border-">Signup</Link>
                                            <Link to={'/login'} rel="noopener noreferrer" href="#" className="flex items-center justify-center px-4 py-2 -mb-1 dark:border-">Login</Link >
                                        </div>
                                }


                            </div>
                        )}
                    </div>

                    <div className="max-sm:hidden md:hidden lg:block">
                        <div className="flex justify-center items-center gap-3">
                            <div>
                                {
                                    user ?
                                        <div className=" flex flex-col items-center">
                                            <img title={user?.displayName} className="w-12 h-12 rounded-full border-2" src={user?.photoURL} alt="" />
                                            <h3>{user?.displayName}</h3>
                                        </div>

                                        : <img className="w-12 h-12 rounded-full border-2" src='https://i.postimg.cc/yxBM0XS4/user.png' alt="" />

                                }
                            </div>
                            <div>
                                {
                                    user ? <Link onClick={handaleLogout} type="button" className="px-4 py-2 text-sm font-semibold border rounded-lg border-gray-100 dark:border-gray-800 text-gray-100 dark:text-gray-800">
                                        Logout
                                    </Link> : <div className="items-center flex-shrink-0 hidden lg:flex">
                                        <Link to={'/singup'} className="self-center px-8 py-3 rounded">Signup</Link>
                                        <Link to={'/login'} type="button" className="px-4 py-2 text-sm font-semibold border rounded-lg border-gray-100 dark:border-gray-800 text-gray-100 dark:text-gray-800">
                                            Login
                                        </Link>

                                    </div>
                                }
                            </div>

                        </div>
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Navbar;
