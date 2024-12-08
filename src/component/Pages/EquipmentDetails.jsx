import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const EquipmentDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([]);
  const handleCommentSubmit = () => {
    if (inputValue.trim()) {
      setComments([...comments, inputValue]);
      setInputValue("");
    }
  };

  useEffect(() => {
  

    const singleCard = data.find(
      (equipment) => equipment._id === id || equipment._id === Number(id)
    );
  

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
      <div className="md:w-11/12 w-full mx-auto mb-24 bg-base-200 px-10 py-10 my-10">
        <div className="grid md:grid-cols-9 gap-10 mt-5 px-3">
          <div className="grid md:col-span-4">
            <figure className="md:px-5 pt-5 mb-10">
              <img
                src={equipment.photo}
                alt={equipment.name}
                className="rounded-xl w-full md:w-[400px]"
              />
            </figure>
            <div>
              <div className="mt-2 lg:flex items-center">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder=" Write here Your Review..."
                  className="md:w-80 w-full h-32 border-2 rounded-lg p-4 bg-[#5f5e5e]"
                />
                <button
                  onClick={handleCommentSubmit}
                  className="bg-[#5C4E4E] px-4 py-3 text-white font-semibold rounded-lg ml-7"
                >
                  Submit
                </button>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-bold mb-3">Reviews:</h3>
                <ul className="list-disc ml-5">
                  {comments.map((comment, index) => (
                    <li key={index} className="mb-2">
                      {comment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
    
          <div className="lg:col-span-5 w-full mt-4">
            <p className="font-semibold text-black text-3xl mb-3">{equipment.name}</p>
            <p className="mb-4">{equipment.details}</p>
            <p className="italic text-xl mb-4 text-green-800">{equipment.customization}</p>
            <p className="font-bold text-green-800 mb-4"><span className="text-xl font-semibold text-gray-600">Processing Time:</span>   ({equipment.time})</p>
            <div className="md:flex md:items-center md:justify-between gap-5">
              <h2 className="text-xl font-semibold text-green-500">${equipment.price}</h2>
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
