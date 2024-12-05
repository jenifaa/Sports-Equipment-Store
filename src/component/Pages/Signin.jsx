import Navbar from "./Navbar";

const Signin = () => {
  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
  
    const photo = form.photo.value;
    // const newEquipment = {
    //   name,
    //   rating,
    //   price,
    //   customization,
    //   category,
    //   details,
    //   photo,
    //   quantity,
    //   time,
    // };
    // console.log(newEquipment);
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
                type="text"
                name="email"
                placeholder="Enter a Equipment name"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                name="password"
                placeholder=" Enter Password"
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
            value="Sign in"
            className="w-full py-3 text-center font-bold button bg-[#5c4E4E]  border-2 border-[#331A15] text-[#ffffff] rounded-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default Signin;
