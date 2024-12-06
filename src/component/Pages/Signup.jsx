import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../Main/AuthProvider";
import auth from "../firebase.init";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { creatNewUser ,setUser, setLoading} = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [register, setRegister] = useState(false);


  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const photo = form.photo.value;

    console.log(email, password, name, photo);
    // const newUser = { email, name };
     setError('');
     setRegister(false)

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
        console.log(user);
        setUser(true);
        setRegister(true);
        navigate(location?.state ? location.state : "/");
        
        
      })
      .catch((error) => {
        console.log(error.message);
        setRegister(false)
        setLoading(false);


      });

   
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-10/12 px-8 md:w-7/12 mx-auto bg-base-200  md:px-32 py-10 my-20">
        <div className="text-center my-5">
          <h1 className="font-bold text-3xl mb-10">SignUp Here</h1>
        </div>

        <form onSubmit={handleSignUp}>
          <div className=" my-5">
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
          <div className="md:flex justify-between gap-6 items-center my-5">
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
          

          <div className="md:flex justify-between gap-6 items-center my-5">
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
      </div>
      
    </div>
  );
};

export default Signup;
