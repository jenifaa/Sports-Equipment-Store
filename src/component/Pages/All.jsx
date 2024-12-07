import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const All = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  const [users, setUsers] = useState(loadedData);
  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/equipment/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingUser = users.filter((user) => id !== user._id);
              setUsers(remainingUser);
            }
          });
      }
    });
  };

  return (
    <div>

      <div className="flex justify-center items-center my-5">
        <button className="px-5 py-2 bg-[#2a0909] text-white font-bold"> Sort</button>
      </div>
      <div className="overflow-x-auto h-screen ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Category</th>
              <th>Rating </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">
                        {user.customization}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{user.category}</div>
                  </td>
                  <td>{user.rating}</td>
                  <th>
                    <Link to={`/equipment/${user._id}`} className="btn">
                      details
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleUserDelete(user._id)}
                      className="btn"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default All;
