import { useState } from "react";

const EquipmentCard = ({ equipment }) => {
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

  return (
    <div>



        <div className="border p-6 rounded-xl">
            <div>
                <img className="w-full h-72 rounded-xl" src={photo} alt="" />
            </div>
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">{rating}</div>
            </h2>
            <p>{customization}</p>
            <div className="">
              <div className="">{quantity}</div>
              <div className="">{price}</div>
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
