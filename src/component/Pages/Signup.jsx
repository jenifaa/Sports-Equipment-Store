import Navbar from "./Navbar";

const Signup = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const rating = form.rating.value;
    // const price = form.price.value;
    // const customization = form.customization.value;
    // const category = form.category.value;
    // const details = form.details.value;
    // const quantity = form.quantity.value;
    // const time = form.time.value;
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
    console.log(email,password,name,photo);
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
                placeholder="Enter a Equipment name"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                name="email"
                placeholder=" Enter rating"
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
                type="text"
                name="password"
                placeholder="Enter Equipment Price"
                className="input input-bordered w-full "
              />
            </label>
            </div>
            {/* <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Customization</span>
              </div>
              <input
                type="text"
                name="customization"
                placeholder=" Enter Customization"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="md:flex justify-between gap-6 items-center my-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Processing Time</span>
              </div>
              <input
                type="text"
                name="time"
                placeholder="Enter processing time"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Quantity</span>
              </div>
              <input
                type="text"
                name="quantity"
                placeholder=" Enter Equipment quantity"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="md:flex justify-between gap-6 items-center my-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                name="category"
                placeholder="Enter  Category"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"
                name="details"
                placeholder=" Enter Equipment details"
                className="input input-bordered w-full "
              />
            </label>
          </div> */}

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
