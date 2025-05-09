import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import Famous from "./Famous";
import EquipCard from "./EquipCard";
import { Link } from "react-router-dom";

const FamousEquipment = () => {
  const [famousEquipments, setFamousEquipments] = useState([]);

  useEffect(() => {
    fetch("https://equipment-store-server.vercel.app/equipment")
      .then((res) => res.json())
      .then((data) => {
        setFamousEquipments(data);
      });
  }, []);

  return (
    <div className="bg-base-300 pb-5">
      <p className="text-sm text-orange-600 text-center mb-2">
        -- get discount on your desire products
      </p>
      <h2 className="mb-4  py-3 text-center font-bold text-6xl font">
        Our Offers For You
      </h2>
      <Fade cascade>
        <p className="text-center mb-10  text-sm">
          "Why settle for one when you can have it all? Our bundle offers let
          you save more while getting the complete set you need. Buy any 2 items
          and get 30% off, or <br /> buy 3 and unlock 40% savings! Perfect for
          families, teams, or fitness enthusiasts. Stock up and save today!"
        </p>
      </Fade>
      <div className="py-5">
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 w-10/12 md:w-8/12 mx-auto gap-10 lg:gap-7 pt-10 pb-10">
          {famousEquipments.slice(2, 6).map((famous) => (
            <Famous key={famous._id} famous={famous}></Famous>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 w-10/12 md:w-8/12 mx-auto gap-10 lg:gap-7 pt-10 pb-10">
          {famousEquipments.slice(6, 10).map((equip) => (
            <EquipCard key={equip._id} equip={equip}></EquipCard>
          ))}
        </div>
      </div>
      <div className=" flex justify-center items-center my-3">
        <Link to="cart" className=" px-5 py-2 bg-[#2e2727] text-white mb-6 flex items-center gap-1"><FaShoppingCart className="text-xl"></FaShoppingCart>My Cart</Link>
      </div>
    </div>
  );
};

export default FamousEquipment;
