import { useContext, useRef, useState } from "react";
// import Navbar from "../Pages/Navbar";
import { AuthContext } from "../Main/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import iconImgLogin from "../../assets/icons/google (1).png";
import loginLottie from "../../assets/lottie/login.json";

import Navbar from "../Pages/Navbar";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const Signin = () => {
  const { userLogin, setUser, setUserLogin, signInWithGoogle } =
    useContext(AuthContext);
  const [login, setLogin] = useState(false);
  const [error, setError] = useState([]);
  const emailRef = useRef();

  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
        toast.success("Login successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;

        setUser(user);

        navigate(location?.state ? location.state : "/");
        toast.success("Login SuccessFully");

        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        const createdAt = result?.user?.metadata?.creationTime;
      })
      .catch((error) => {
        console.log(error);
        setError({ login: error.code });
        toast.error("Invalid Email or Password");
      });
  };
  return (
    <div className="bg-base-300 mt-40 md:mt-20 pb-10">
      <Helmet>
        <title>SportZone | SignIn</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="md:flex mx-auto w-10/12 gap-40">
        <Lottie className="md:w-1/2" animationData={loginLottie}></Lottie>
        <div className=" md:w-1/2 md:mx-14 px-10 bg-white   py-10 my-10">
          <div className="text-center">
            <h1 className="font-bold text-5xl ">SignIn Here</h1>
          </div>

          <form onSubmit={handleSignin}>
            <div className=" my-5">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="input input-bordered w-full "
                />
              </label>

              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder=" Enter Password"
                  className="input input-bordered w-full "
                />
              </label>
            </div>

            <input
              type="submit"
              value="Sign in"
              className="w-full py-3 text-center font-bold button bg-[#5c4E4E]  border-2 border-[#331A15] text-[#ffffff] rounded-lg"
            />
          </form>
          <p className="my-2 font-semibold text-base">
            Doesn't Have An Account?{" "}
            <Link className="font-bold text-blue-800" to="/register">
              SignUp!
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="my-4 ml-3  rounded-full lg:w-[50%] w-full">
            <button
              onClick={handleGoogleSignIn}
              className=" font-semibold flex justify-around border-black items-center border-2 p-3 rounded-full "
            >
              <img src={iconImgLogin} alt="" className="w-8 mr-3" />
              <p className="text-black">Sign Up with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
