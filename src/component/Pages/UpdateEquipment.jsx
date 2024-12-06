const UpdateEquipment = () => {
    const handleUpdateUser = (e) =>{
        e.preventDefault();
        const email = e.target.userEmail.value;
        const name = e.target.userName.value;
        updateUser = {email,name};
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

    }
  return (
    <div>
      <div className="w-10/12 mx-auto bg-base-200 px-10 md:px-32 py-10 my-20">
        <div className="text-center my-5">
          <h1 className="font-bold text-3xl mb-10">Update Equipment</h1>
        </div>

        <form onSubmit={handleUpdateUser}>
         
          <div className="md:flex justify-between gap-6 items-center my-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">User Email</span>
              </div>
              <input
                type="text"
                name="userEmail"
                placeholder="Enter  Email"
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
                placeholder=" Enter User Name"
                className="input input-bordered w-full "
              />
            </label>
          </div>

         
          <input
            type="submit"
            value="Update"
            className="w-full py-3 text-center font-bold button bg-[#5c4E4E]  border-2 border-[#331A15] text-[#ffffff] rounded-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipment;
