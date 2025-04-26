import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const EquipmentCard = ({ equipment }) => {
  const [rate, setRate] = useState(0);
  const {
    name,
    rating,
    price,
    customization,
    category,
    details,
    photo,
    quantity,
    time,
  } = equipment;

  return (
    <div className="border px-4 pt-4 pb-2 rounded-xl bg-white flex flex-col h-full">
      <div className="flex-grow">
        <img className="w-full h-32 px-2 rounded-xl" src={photo} alt={name} />
      </div>
      <div className="flex flex-col justify-between flex-grow mt-1">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="mt-1 text-sm text-orange-800">{customization}</p>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <p className="mt-1 font-bold text-xl text-green-600">$ {price}</p>
        <Link to={`/equipment/${equipment._id}`}>
          <button className="px-3 py-1 bg-[#5C4E4E] text-white text-sm  font-bold hover:bg-[#4B3D3D] transition duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EquipmentCard;
