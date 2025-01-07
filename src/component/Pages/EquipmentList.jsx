import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";

import { AuthContext } from "../Main/AuthProvider";
import Loading from "./Loading";
import { Helmet } from "react-helmet-async";
import { FaEdit } from "react-icons/fa";
const EquipmentList = () => {
  //   const equipmentData = useLoaderData();
  const { user, loading } = useContext(AuthContext);

  const [myEquipments, setMyEquipments] = useState([]);

  useEffect(() => {
    fetch(
      `https://equipment-store-server.vercel.app/myEquipment?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyEquipments(data);
      });
  }, [user?.email]);

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
        fetch(`https://equipment-store-server.vercel.app/equipment/${id}`, {
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

              setMyEquipments(
                myEquipments.filter((myEquipment) => myEquipment._id !== id)
              );
              //   setCards(remainingUser);
            }
          });
      }
    });
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-base-200 mt-40 md:mt-20 pt-10">
      <Helmet>
        <title>EquipmentList</title>
      </Helmet>
      <h2 className="text-center  text-3xl font-bold py-5">My equipments</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {myEquipments.map((myEquipment) => (
              <tr key={myEquipment._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={myEquipment.photo} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{myEquipment.name}</div>
                    </div>
                  </div>
                </td>
                <td>${myEquipment.price}</td>
                <td>{myEquipment.rating}</td>
                <td>{myEquipment.quantity}</td>
                <th>
                  <button
                    onClick={() => handleUserDelete(myEquipment._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <MdDeleteForever className="text-red-600 text-xl" />
                  </button>
                </th>
                <th>
                  <Link
                    to={`/update/${myEquipment._id}`}
                    className="btn btn-ghost btn-xs"
                  >
                    Edit<FaEdit className="text-xl"></FaEdit>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EquipmentList;
