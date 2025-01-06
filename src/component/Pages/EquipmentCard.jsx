import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const EquipmentCard = ({ equipment }) => {
  const [rate, setRate] = useState(0);
  const { name, rating, price, customization, category, details, photo, quantity, time } = equipment;

  return (
    <div className="border p-4 rounded-xl bg-white flex flex-col h-full">
      <div className="flex-grow">
        <img className="w-full h-44 rounded-xl" src={photo} alt={name} />
      </div>
      <div className="flex flex-col justify-between flex-grow mt-2">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="mt-2 text-sm text-orange-800">{customization}</p>

      

        <p className="mt-2 font-bold text-xl text-green-600">$ {price}</p>

       
      </div>

      <div className="mt-2">
        <Link to={`/equipment/${equipment._id}`}>
          <button className="px-3 py-2 bg-[#5C4E4E] text-white rounded-md font-bold hover:bg-[#4B3D3D] transition duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EquipmentCard;
