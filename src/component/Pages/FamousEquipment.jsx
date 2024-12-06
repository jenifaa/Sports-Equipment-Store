import React, { useEffect, useState } from "react";
import Famouse from "./Famouse";

const FamousEquipment = () => {
  
    const [famousEquipments, setFamousEquipments] = useState([]); 
    
    useEffect(() => {
      fetch("http://localhost:5000/equipment")
        .then((res) => res.json())
        .then((data) => {
          setFamousEquipments(data);
          
        });
    }, []);
  
 
  return (
    <div>
      <h2 className="my-10 text-center font-bold text-5xl">
        Our Most Rated Products
      </h2>
     <div className="bg-green-950 h-[500px]"></div>
    </div>
  );
};

export default FamousEquipment;
