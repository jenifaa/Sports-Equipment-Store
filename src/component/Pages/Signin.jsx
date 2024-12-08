import { useContext, useRef, useState } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../Main/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import iconImgLogin from '../../assets/google (1).png'

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
    <div>
      <Navbar></Navbar>
      <div className="w-10/12 px-8 md:w-7/12 mx-auto bg-base-200  md:px-32 py-10 my-20">
        <div className="text-center my-5">
          <h1 className="font-bold text-3xl mb-10">SignIn Here</h1>
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

          {/* <div className="md:flex justify-between gap-6 items-center my-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Photo</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo url"
                className="input input-bordered w-full "
              />
            </label>
          </div> */}
          <input
            type="submit"
            value="Sign in"
            className="w-full py-3 text-center font-bold button bg-[#5c4E4E]  border-2 border-[#331A15] text-[#ffffff] rounded-lg"
          />
        </form>
        <div className="my-4 ml-3  rounded-full lg:w-[38%] w-full">
          <button
            onClick={handleGoogleSignIn}
            className=" font-semibold flex justify-around items-center border-2 p-3 rounded-full "
          >
            <img src={iconImgLogin} alt="" className="w-8 mr-3" />
            <p>Sign Up with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
