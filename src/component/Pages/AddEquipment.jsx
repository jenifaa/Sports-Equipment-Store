import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Main/AuthProvider";
import helmet from "helmet";
import bg from "../../assets/images/11065.jpg";
import { Helmet } from "react-helmet-async";
const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const handleAddEquipment = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const customization = form.customization.value;
    const category = form.category.value;
    const details = form.details.value;
    const quantity = form.quantity.value;
    const time = form.time.value;
    const photo = form.photo.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const newEquipment = {
      name,
      rating,
      price,
      customization,
      category,
      details,
      photo,
      quantity,
      time,
      userEmail,
      userName
    };

    form.reset();
    fetch("https://equipment-store-server.vercel.app/equipment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Added!",
            text: "Your Equipment added.",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      
        // height: "100vh",
      }}
      className=" pt-16 pb-10 "
    >
      <Helmet>
        <title>SportZone | Add Equipments</title>
      </Helmet>
      <div className="w-10/12 md:w-8/12 mx-auto bg-white border-4 border-gray-300 p-6 rounded-lg shadow-lg  px-10  py-10 mt-20">
        <div className="text-center ">
          <h1 className="font-bold text-3xl md:text-5xl ">Add New Equipment</h1>
        </div>

        <form onSubmit={handleAddEquipment}>
          <div className="md:flex justify-between gap-10 items-center my-5">
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
                <span className="label-text">Rating</span>
              </div>
              <input
                type="text"
                name="rating"
                placeholder=" Enter rating"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="md:flex justify-between gap-10 items-center my-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="text"
                name="price"
                placeholder="Enter Equipment Price"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
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
          <div className="md:flex justify-between gap-10 items-center my-5">
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
          <div className="md:flex justify-between gap-10 items-center my-5">
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
          </div>
          <div className="md:flex justify-between gap-10 items-center my-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">User Email</span>
              </div>
              <input
                type="text"
                name="userEmail"
                value={user?.email}
                readOnly
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">User Name</span>
              </div>
              <input
                type="text"
                name="userName"
                value={user?.displayName}
                readOnly
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <div className="md:flex justify-between gap-10 items-center my-5">
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
            value="Add Equipment"
            className="w-full py-3 text-center font-bold button bg-[#5c4E4E]  border-2 border-[#331A15] text-[#ffffff] rounded-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
