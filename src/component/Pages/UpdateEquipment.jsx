import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const UpdateEquipment = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  const [update, setUpdate] = useState(null);
  const {id} = useParams();
  // const { email, name } = loadedData || {};
  // const { email, name, rating, price, customization, time, quantity, category, details, photo } = loadedData || {};
 

 useEffect(() =>{
  fetch("http://localhost:5000/users")
  .then(res => res.json())
  .then(data => {
    setUpdate(data[5]);
  })
  .catch((error) => console.log("Error fetching user data:", error));
 },[])



  // const {email,name} = loadedData;
  const handleUpdateUser =async (e) => {
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
      const response = await fetch(`http://localhost:5000/equipment/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updateUser),
      });

      if (!response.ok) throw new Error("Failed to update equipment");

      const data = await response.json();
      console.log("Update successful:", data);
      alert("Equipment updated successfully!");
    } catch (error) {
      console.error("Error updating equipment:", error);
      alert("An error occurred while updating the equipment.");
    }
  };



  if (!update) {
    return <div>Loading user data...</div>;
  }


    // fetch(`http://localhost:5000/users/${loadedUser._id}`, {
    //     method: 'PUT',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(updateUser)
    // })
    // .then(res => res.json())
    // .then(data =>{
    //     console.log(data);
    // })
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-10/12 mx-auto bg-base-200 px-10 md:px-32 py-10 my-20">
        <div className="text-center my-5">
          <h1 className="font-bold text-3xl mb-10">Update Equipment</h1>
        </div>

        <form onSubmit={ handleUpdateUser}>
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
                value={update.email}
                disabled
                
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

                value={update.name} 
                disabled
              
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
