import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import Swal from "sweetalert2";

const EquipmentList = () => {
  const equipmentData = useLoaderData();
  //   const id = useParams();


  const [cards, setCards] = useState(equipmentData);




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

              setCards(cards.filter((card) => card._id !== id));
              //   setCards(remainingUser);
            }
          });
      }
    });
  };
  console.log(equipmentData);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div key={card._id} className="bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={card.photo}
                alt={card.name || "Equipment Image"}
                className="rounded-xl w-[300px] h-[300px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{card.name || "Untitled"}</h2>
              <p>{card.customization}</p>
              <div className="card-actions">
                <Link to={`/update/${card._id}`} className="btn btn-primary">
                  Update
                </Link>
                <button
                  onClick={() => handleUserDelete(card._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentList;
