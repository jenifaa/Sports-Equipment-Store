import { useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import React from "react";

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
  // console.log(equipment);

  const ratingChanged = (newRating) => {
    setRate(newRating); // Update local state with the new rating
    console.log(`New Rating for ${name}: ${newRating}`);
  };

  return (
    <div>
      <div className="border p-6 rounded-xl">
        <div>
          <img className="w-full h-72 rounded-xl" src={photo} alt="" />
        </div>
        <h2 className="card-title flex items-center gap-3">{name}</h2>

        <div className="flex gap-5 items-center">
          <p>{customization}</p>
          <div className="mt-4 flex items-center gap-2">
            {/* <ReactStars
                  count={5}
                  value={rating}
                  isHalf={true}
                  edit={false}
                  size={24}
                  activeColor="#ffd700"
                  emptyColor="#ddd"
                />
                 */}

            <span className="text-sm text-gray-500">({rating})</span>
          </div>
        </div>

        <div className="">
          <div className="">{quantity}</div>
          <div className="">{price}</div>
        </div>

        <div>
          {/* <Link  to={`/equipment/${equipment._id}`}>
              <button>View Details</button>
              </Link> */}
        </div>
      </div>

      {/* <img src={photo} alt="" /> */}
      {/* <div className="card w-96 ">
          <figure>
            <img
              src={photo}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">{rating}</div>
            </h2>
            <p>{customization}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{quantity}</div>
              <div className="badge badge-outline">{price}</div>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default EquipmentCard;
