import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Main/AuthProvider";
import Loading from "./Loading";
import Swal from "sweetalert2";

const UpdateEquipment = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const loadedData = useLoaderData();

  const [update, setUpdate] = useState(null);
  const { id } = useParams();

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    const updateUser = {
      rating: e.target.rating.value,
      price: e.target.price.value,
      customization: e.target.customization.value,
      time: e.target.time.value,
      quantity: e.target.quantity.value,
      category: e.target.category.value,
      details: e.target.details.value,
      photo: e.target.photo.value,
    };

    try {
      const response = await fetch(
        `https://equipment-store-server.vercel.app/equipment/${id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updateUser),
        }
      );

      if (!response.ok) throw new Error("Failed to update equipment");

      const data = await response.json();
      Swal.fire({
        title: "Updated Successfully",
        text: "Equipment Update Successful",
        icon: "success"
      });
      navigate("/list");

    } catch (error) {
      console.error("Error updating equipment:", error);
     
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  
  return (
    <div className="bg-base-200 pt-14">
      <Navbar></Navbar>
      <div className="w-10/12 mx-auto bg-white px-10 md:px-32 py-10 my-20">
        <div className="text-center my-5">
          <h1 className="font-bold text-5xl mb-10">Update Equipment</h1>
        </div>

        <form onSubmit={handleUpdateUser}>
          <div className="md:flex justify-between gap-6 items-center my-5">
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
          <div className="md:flex justify-between gap-6 items-center my-5">
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
          </div>
          <div className="md:flex justify-between gap-6 items-center my-5">
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
            value="Update Equipment"
            className="w-full py-3 text-center font-bold button bg-[#5c4E4E]  border-2 border-[#331A15] text-[#ffffff] rounded-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipment;
