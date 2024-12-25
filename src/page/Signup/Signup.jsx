import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import singup from '../../assets/Lotty/signup.json'
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";
import Swal from "sweetalert2";
import bg from '../../assets/bg/Sprinkle.svg'

const Signup = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const pathname = location.state || '/'

    useEffect(() => {
        document.title = "Food link | REGISTER"
    }, [])

    const { handaleRegister, manageUsr, setUser } = useContext(AuthContext)

    // Password validation function
    const validatePassword = (password) => {
        const uppercasePattern = /[A-Z]/;
        const lowercasePattern = /[a-z]/;
        const lengthPattern = /.{6,}/;

        if (!uppercasePattern.test(password)) {
            return Swal.fire("Password must contain at least one uppercase letter.");

        }
        if (!lowercasePattern.test(password)) {
            return Swal.fire("Password must contain at least one lowercase letter.");

        }
        if (!lengthPattern.test(password)) {
            return Swal.fire("Password must be at least 6 characters long.");

        }

    }

    const handalSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if (name?.length < 5) {
            return Swal.fire("your name Must be more than 5 characters long.");
        }
        const email = form.email.value;
        if (email?.length < 12) {
            return Swal.fire("Your Email Must be more than 12 characters long.");
        }
        const photourl = form.photourl.value;
        if (photourl == 'https') {
            return Swal.fire("Please Valide Photo Url");
        }
        const password = form.password.value;
        if (validatePassword(password)) {
            return
        }
        // console.log(name, email, photo, password);

        handaleRegister(email, password)
            .then(res => {
                manageUsr(name, photourl);
                const user = res.user
                setUser(user);
                Swal.fire("Registration successful!");
                navigate(pathname);
            })
            .catch(error => {
                Swal.fire("Registration not successful! email allrady registared", error);
            })
        form.reset()
    }



    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // height: "100vh",
                width: "100%",

            }}
        >
            <div className="py-[120px] container mx-auto md:flex lg:justify-around max-sm:justify-center items-center space-y-5 lg:px-3">
                <div className="space-y-4 flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold text-center text-white">Singup</h1>
                    <Lottie className="w-96 max-sm:w-60" animationData={singup}></Lottie>
                </div>
                <section className="w-full max-w-md space-y-3 rounded-xl  dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                    <form onSubmit={handalSubmit} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow border-2 backdrop-blur-xl dark:bg-gray-50">
                        <h2 className="w-full text-3xl font-bold leading-tight text-center">Signup</h2>
                        <div>
                            <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                            <input id="name" type="text" name="name" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-rose-400 focus:dark:ring-rose-600 bg-white/20 dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                            <input type="email" name="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-rose-400 focus:dark:ring-rose-600 bg-white/20 dark:bg-gray-100" />
                        </div>
                        <div>
                            <label className="block mb-1 ml-1">Photo Url</label>
                            <input type="url" name="photourl" placeholder="photo url" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-rose-400 focus:dark:ring-rose-600 bg-white/20 dark:bg-gray-100" />
                        </div>
                        <div>
                            <label className="block mb-1 ml-1">Password</label>
                            <input type="password" name="password" placeholder="your Password" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-rose-400 focus:dark:ring-rose-600 bg-white/20 dark:bg-gray-100" />
                        </div>
                        <div>
                            <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 border-2 text-white hover:dark:ring-rose-600 dark:text-gray-50">Signup</button>
                        </div>
                        <div>
                            <p className="text-sm text-center sm:px-6 text-gray-400 dark:text-gray-600"> have an account? please
                                <Link to={'/login'} rel="noopener noreferrer" className="underline text-gray-100 dark:text-gray-800">Login</Link>
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </div>

    );
};

export default Signup;