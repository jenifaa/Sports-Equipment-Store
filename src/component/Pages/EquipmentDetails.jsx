import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const EquipmentDetails = () => {
    const data = useLoaderData(); 
    const { id } = useParams();
    const [equipment, setEquipment] = useState(null); 
  
    useEffect(() => {
      console.log("Loaded Data:", data);
      console.log("ID from Params:", id);
  
      const singleCard = data.find((equipment) => equipment._id === id || equipment._id === Number(id));
      console.log("Matched Equipment:", singleCard);
  
      setEquipment(singleCard || null); 
    }, [data, id]);

  if (!equipment) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-10">
          <p>Loading Equipment Details...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="md:w-10/12 w-full mx-auto mb-24">
        <div className="grid md:grid-cols-9 gap-10 items-center mt-5 px-3">
          <figure className="md:px-5 pt-5 md:col-span-4">
            <img
              src={equipment.photo}
              alt={equipment.name}
              className="rounded-xl w-full md:w-[400px]"
            />
          </figure>
          <div className="md:col-span-5">
            <p className="font-semibold text-3xl mb-3">{equipment.name}</p>
            <p className="mb-4">{equipment.details}</p>
            <div className="md:flex md:items-center md:justify-between gap-5">
              <h2 className="text-xl font-semibold">${equipment.price}</h2>
              <p className="text-gray-500">({equipment.category})</p>
            </div>

            <div className="md:flex md:justify-between md:items-center my-5">
              <p className="text-lg font-bold text-green-500">
                <span className="font-bold text-black">Quantity:</span>{" "}
                {equipment.quantity}
              </p>
              <p className="md:text-white md:bg-green-500 px-2 py-1 rounded-full font-semibold text-green-500">
                {equipment.rating} ⭐
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;
