import React, { useEffect, useState } from "react";

import { Fade } from "react-awesome-reveal";
import Famous from "./Famous";
import EquipCard from "./EquipCard";

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
    <div>
      <h2 className="my-10  text-center font-bold text-5xl">
        Our Offers For You
      </h2>
      <Fade cascade>
        <p className="text-center my-5 text-sm">
          "Why settle for one when you can have it all? Our bundle offers let
          you save more while getting the complete set you need. Buy any 2 items 
          and get 30% off, or <br /> buy 3 and unlock 40% savings! Perfect for
          families, teams, or fitness enthusiasts. Stock up and save today!"
        </p>
      </Fade>
      <div className="bg-base-200 py-5">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 w-8/12 mx-auto gap-4 pt-10 pb-5">
          {famousEquipments.slice(4,7).map((famous) => (
            <Famous key={famous._id} famous={famous}></Famous>
          ))}
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 w-8/12 mx-auto gap-4 pb-10">
          {famousEquipments.slice(8, 10).map((equip) => (
           <EquipCard key={equip._id} equip={equip}></EquipCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamousEquipment;
