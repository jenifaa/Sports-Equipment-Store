import { useEffect, useState } from "react";

import { Rating, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const All = () => {
  const loadedData = useLoaderData();
  const [search, setSearch] = useState("");
  const [isGrid, setIsGrid] = useState(false);

  const [equipment, setEquipment] = useState([]);
  const [users, setUsers] = useState(loadedData);
  console.log(users);
  const [sortDirection, setSortDirection] = useState(null);

  return (
    <div className="bg-base-300">
      <Helmet>
        <title>SportZone | All Equipments </title>
      </Helmet>
      <div className="md:flex md:justify-center items-center gap-10 pt-24">
        <div className="md:flex items-center  md:justify-center gap-5">
          <div className="md:w-96 px-8  my-10">
            <label className="input input-bordered flex items-center gap-2">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="grow"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 px-10">
        {users
          .filter((user) => {
            return search.toLowerCase() === ""
              ? user
              : user.name.toLowerCase().includes(search);
          })
          .map((user) => (
            <div key={user._id} className="border p-3 rounded-xl bg-[#ffffff]">
              <div>
                <img
                  className="w-full h-44 rounded-xl"
                  src={user.photo}
                  alt=""
                />
              </div>
              <h2 className="card-title flex items-center gap-3">
                {user.name}
              </h2>

              <div className="">
                <p className="mt-2 font-semibold text-orange-800">
                  {user.customization}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Rating
                    className=""
                    style={{ maxWidth: 90 }}
                    value={user.rating}
                    readOnly
                  />

                  <span className="text-sm text-gray-500">({user.rating})</span>
                </div>
              </div>

              <p className="font-bold text-orange-600">
                {user.quantity} Available
              </p>

              <p className="font-bold text-xl text-green-600">$ {user.price}</p>

              <div>
                <Link to={`/equipment/${user._id}`}>
                  <button className="px-4 py-2 bg-[#5C4E4E] text-white font-bold my-2">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default All;
