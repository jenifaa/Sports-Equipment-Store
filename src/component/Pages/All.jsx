import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const All = () => {
  const loadedData = useLoaderData();
  const [users, setUsers] = useState(loadedData);
  const handleUserDelete = (id) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      fetch(`http://localhost:5000/users/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
        if (data.deletedCount) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

        const remainingUser = users.filter(user => user._id !== id);
        setUsers(remainingUser);
      }

      })



      
    });
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
              <th>
                <button onClick={() => handleUserDelete(user.id)} className="btn btn-ghost btn-xs">Delete</button>
              </th>
            </tr>
             
            })}

            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default All;
