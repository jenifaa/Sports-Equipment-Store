import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const All = () => {
  const loadedData = useLoaderData();
 
  const [equipment, setEquipment] = useState([])
  const [users, setUsers] = useState(loadedData);
  const [sortDirection, setSortDirection] = useState(1);
 

    const handleSort = () => {
      console.log("Button clicked");
      const newSortDirection = sortDirection === 1 ? -1 : 1; 
      setSortDirection(newSortDirection);
    
      fetch(`https://equipment-store-server.vercel.app/equipment?sort=${newSortDirection}`)
        .then((res) => res.json())
        .then((data) => {
          setUsers(data); 
        })
        .catch((error) => console.error("Error fetching sorted data:", error));
    };
  




  
  
  return (
    <div>
      <div className="flex justify-center items-center my-5">
        <button
          onClick={handleSort}
          className="px-5 py-2 bg-[#2a0909] text-white font-bold"
        >
           Sort {sortDirection === 1 ? "Descending" : "Ascending"}
        </button>


{/* <button onClick={() => setSort(1)}>Sort Ascending</button> */}
      </div>
      <div className="overflow-x-auto h-screen ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
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
                  <td>
                    <div>${user.price}</div>
                  </td>
                  <td>{user.rating}</td>
                  <th>
                    <Link to={`/equipment/${user._id}`} className="btn">
                      details
                    </Link>
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
