import { useState } from "react";
import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";
import React from "react";

import { Rating, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// import { useState } from "react";

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
      <div className="border p-6 rounded-xl bg-[#ffffff]">
        <div>
          <img className="w-full md:w-[300px] h-72 rounded-xl" src={photo} alt="" />
        </div>
        <h2 className="card-title flex items-center gap-3">{name}</h2>

        <div className="flex justify-between items-center">
          <p className="mt-2 font-semibold text-orange-800">{customization}</p>
          <div className="mt-2 flex items-center gap-2">
          <Rating className=""
            style={{ maxWidth: 90}}
            value={rating}
            readOnly
            // itemStyles={myStyles}
           
          />

            <span className="text-sm text-gray-500">({rating})</span>
          </div>
        </div>

        <div className="">
          <div className=""><span className="my-4 font-semibold mr-5">Available Products: </span><span className="font-bold text-orange-600">{quantity}</span></div>
          <div className=""><span className="my-4 font-semibold mr-5">Price: </span><span className="font-bold text-green-600">$ {price}</span></div>
        </div>

        <div>
          <Link  to={`/equipment/${equipment._id}`}>
              <button className="px-4 py-2 bg-[#5C4E4E] text-white font-bold my-4">View Details</button>
              </Link>
        </div>
      </div>

     
    </div>
  );
};

export default EquipmentCard;
