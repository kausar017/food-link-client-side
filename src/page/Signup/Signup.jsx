import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import singup from "../../assets/Lotty/signup.json";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";
import Swal from "sweetalert2";
import { LuSquareArrowOutUpLeft } from "react-icons/lu";

const Signup = () => {
  const navigat = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    document.title = "Food link | singup";
  }, []);

  const { handaleRegister, manageUsr, setUser, handaleGithub, handaleGoogle } =
    useContext(AuthContext);

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
  };

  const handalSubmit = (e) => {
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
    if (photourl == "https") {
      return Swal.fire("Please Valide Photo Url");
    }
    const password = form.password.value;
    if (validatePassword(password)) {
      return;
    }
    // console.log(name, email, photo, password);

    handaleRegister(email, password)
      .then((res) => {
        manageUsr(name, photourl);
        const user = res.user;
        setUser(user);
        Swal.fire("Registration successful!");
        navigat(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire(
          "Registration not successful! email allrady registared",
          error
        );
      });
    form.reset();
  };

  const handaleGoogleLogin = async () => {
    try {
      await handaleGoogle();
      navigat(from, { replace: true });
      Swal.fire("Google Login Succesfully");
    } catch (error) {
      Swal.fire("Google login Not Successfuly");
    }
  };

  const handaleGIthubLogin = () => {
    handaleGithub().then((data) => {
      // navigat(from);
      Swal.fire("google Login Succesfully", data);
    });
  };

  const isDisabled = true;

  return (
    <div>
      <div className="py-[120px] container mx-auto md:flex lg:justify-around max-sm:justify-center items-center space-y-5 lg:px-3">
        <div className="space-y-4 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center text-white">Singup</h1>
          <Lottie className="w-96 max-sm:w-60" animationData={singup}></Lottie>
        </div>
        <section className="w-full max-w-md space-y-3 rounded-xl   text-gray-100 ">
          <form
            onSubmit={handalSubmit}
            className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow border-2 backdrop-blur-xl "
          >
            <h2 className="w-full text-3xl font-bold leading-tight text-center">
              Signup
            </h2>
            <div>
              <label htmlFor="name" className="block mb-1 ml-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25  bg-white/20 "
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 ml-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25  bg-white/20 "
              />
            </div>
            <div>
              <label className="block mb-1 ml-1">Photo Url</label>
              <input
                type="url"
                name="photourl"
                placeholder="photo url"
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25  bg-white/20 "
              />
            </div>
            <div>
              <label className="block mb-1 ml-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="your Password"
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25  bg-white/20 "
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 border-2 text-white "
              >
                Signup
              </button>
            </div>

            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-white "></div>
              <p className="px-3 text-sm text-white ">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 bg-white "></div>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <Link
                onClick={handaleGoogleLogin}
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </Link>

              <Link
                onClick={!isDisabled ? handaleGIthubLogin : undefined}
                title="github email not provaided"
                aria-label="Log in with GitHub"
                className={`p-3 rounded-sm ${
                  isDisabled ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
              </Link>
              <Link to={"/"}>
                <button className="p-2 px-3 border flex items-center rounded-full gap-1 hover:shadow-lg hover:shadow-blue-600">
                  <LuSquareArrowOutUpLeft /> Back to Home
                </button>
              </Link>
            </div>

            <div>
              <p className="text-sm text-center sm:px-6 text-gray-400 ">
                {" "}
                have an account? please
                <Link
                  to={"/login"}
                  rel="noopener noreferrer"
                  className="underline text-gray-100 "
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Signup;
