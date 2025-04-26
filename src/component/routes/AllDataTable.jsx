import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const AllDataTable = () => {
  const [allDataTable, setAllDataTable] = useState([]);
  useEffect(() => {
    fetch("https://equipment-store-server.vercel.app/equipment")
      .then((res) => res.json())
      .then((data) => {
      
        setAllDataTable(data);
      });
  }, []);
  return (
    <div className="mt-32">
      <h2 className="text-center font-bold my-8 font text-4xl">All Equipments table</h2>
      <div className="my-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>rating</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {allDataTable.map((allData, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={allData.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{allData.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{allData.price}</td>
                  <td>{allData.rating}</td>
                  <th>
                    <Link to={`/equipment/${allData._id}`} className="px-4 py-2 bg-[#5c4e4e] text-white">Details</Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllDataTable;
