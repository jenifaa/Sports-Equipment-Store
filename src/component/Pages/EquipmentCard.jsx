import { useState } from "react";
import { Link } from "react-router-dom";

import React from "react";

import { Rating, ThinStar } from "@smastrom/react-rating";

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
    <div>
      <div className="border p-3 rounded-xl bg-[#ffffff]">
        <div>
          <img
            className="w-full h-44 rounded-xl"
            src={photo}
            alt=""
          />
        </div>
        <h2 className="card-title flex items-center gap-3">{name}</h2>

        <div className="">
          <p className="mt-2 font-semibold text-orange-800">{customization}</p>
          <div className="mt-2 flex items-center gap-2">
            <Rating
              className=""
              style={{ maxWidth: 90 }}
              value={rating}
              readOnly
            />

            <span className="text-sm text-gray-500">({rating})</span>
          </div>
        </div>

        
          {/* <p className="font-bold text-orange-600">
            {quantity} Available
          </p> */}

          <p className="font-bold text-xl text-green-600">$ {price}</p>
        

        <div>
          <Link to={`/equipment/${equipment._id}`}>
            <button className="px-4 py-2 bg-[#5C4E4E] rounded-md text-white font-bold mt-2">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
