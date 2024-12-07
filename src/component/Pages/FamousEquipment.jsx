import React, { useEffect, useState } from "react";
import Famouse from "./Famouse";
import { Fade } from "react-awesome-reveal";

const FamousEquipment = () => {
  const [famousEquipments, setFamousEquipments] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/equipment")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFamousEquipments(data);
  //     });
  // }, []);

  return (
    <div>
      <h2 className="my-10 text-center font-bold text-5xl">
        Our Most Rated Products
      </h2>
      <Fade cascade>
        <p className="text-center my-5 text-5xl">I will gently appear as I enter the viewport</p>
      </Fade>
      <div className="bg-green-950 h-[500px]"></div>
    </div>
  );
};

export default FamousEquipment;
