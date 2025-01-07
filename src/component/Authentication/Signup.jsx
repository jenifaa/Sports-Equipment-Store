import { useContext, useEffect, useState } from "react";
// import Navbar from "./Navbar";
import { AuthContext } from "../Main/AuthProvider";
import auth from "../firebase.init";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import iconImg from "../../assets/icons/google (1).png";
import lottiSignUp from "../../assets/images/Sign up-rafiki.png";

import Navbar from "../Pages/Navbar";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  const { creatNewUser, setUser, setLoading, userUpdate, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [register, setRegister] = useState(false);

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
        toast.success("Login successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const newUser = { email, name };

    setError("");
    setRegister(false);

    if (password.length < 6) {
      setError("Password Should be At-least 6 character long");
      toast.error("Invalid password Information");
      return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        <>
          Password should contains : <br /> (1) At-least one uppercase,
          <br /> (2) one lowercase,
        </>
      );

      toast.error("Invalid password Information");
      return;
    }

    creatNewUser(email, password)
      .then((result) => {
        const user = result.user;

        toast.success("Registered Successfully");
        userUpdate({ displayName: name, photoURL: photo }).then((res) => {
          setUser((prev) => {
            return { ...prev, displayName: name, photoURL: photo };
          });
        });

        setRegister(true);
        navigate(location?.state ? location.state : "/");
        fetch("https://equipment-store-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {});
      })

      .catch((error) => {
        console.log(error.message);
        toast.error("Invalid Information.Please try again...");
        setRegister(false);
        setLoading(false);
      });
  };
  return (
    <div className="bg-base-200 pb-10">
      <Helmet>
        <title>SportZone | SignUp</title>
      </Helmet>
      <Navbar></Navbar>
     

      <div className="md:flex md:justify-between items-center md:px-24 mt-40 md:my-14">
      <img className=" md:w-1/2" src={lottiSignUp} alt="" />
      <div className="bg-white mx-10  md:w-1/2 px-10  md:mx-20 pt-5  mt-16">
       
       <div className="text-center my-3">
         <h1 className="font-bold text-5xl mb-3">SignUp Here</h1>
       </div>

       <form onSubmit={handleSignUp}>
         <div className=" ">
           <label className="form-control w-full ">
             <div className="label">
               <span className="label-text">Name</span>
             </div>
             <input
               type="text"
               name="name"
               placeholder="Enter Name"
               className="input input-bordered w-full "
             />
           </label>
           <label className="form-control w-full ">
             <div className="label">
               <span className="label-text">Email</span>
             </div>
             <input
               type="email"
               name="email"
               placeholder=" Enter Email"
               className="input input-bordered w-full "
             />
           </label>
         </div>
         <div className="md:flex justify-between gap-6 items-center">
           <label className="form-control w-full ">
             <div className="label">
               <span className="label-text">Password</span>
             </div>
             <input
               type="password"
               name="password"
               placeholder="Enter Password"
               className="input input-bordered w-full "
             />
           </label>
         </div>

         <div className="md:flex justify-between gap-6 items-center my-3">
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
         </div>
         <input
           type="submit"
           value="SignUp"
           className="w-full py-3 text-center font-bold button bg-[#5c4E4E]  border-2 border-[#331A15] text-[#ffffff] rounded-lg"
         />
       </form>
       {error && <p className="text-red-600 px-4 pb-4">{error}</p>}
       <p className="my-2 font-semibold text-base">Already Have An Account?  <Link className="font-bold text-blue-800" to='/login'>SignIn!</Link></p>
       <div className="divider">OR</div>

       <div className="my-4 ml-3  rounded-full lg:w-[50%] w-full">
         <button
           onClick={handleGoogleSignUp}
           className=" font-semibold flex justify-around items-center border-black border-2 p-3 rounded-full "
         >
           <img src={iconImg} alt="" className="w-8 mr-3" />
           <p className="text-black">Sign Up with Google</p>
         </button>
       </div>
     </div>
      </div>
    </div>
  );
};

export default Signup;
