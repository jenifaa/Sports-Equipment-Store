import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const EquipmentDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { id } = useParams();
  const [equipment, setEquipment] = useState(false);
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleCommentSubmit = () => {
    if (inputValue.trim()) {
      setComments([...comments, inputValue]);
      setInputValue("");
    }
  };

//   category
// customization
// details
// name
// photo
// price
// quantity
// rating
// time
// _id

  useEffect(() => {
    const singleCard = data.find((equipment) => equipment._id === Number(id));

    setEquipment(singleCard);
  }, [data, id]);
//   const {
//    name,
//    photo,
//     category,
//     description,
    
//     pricing,
//   } = equipment;
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:w-10/12 w-full mx-auto mb-24">
        <div className=" grid md:grid-cols-9 gap-10 items-center mt-5 px-3">
          <figure className="md:px-5 pt-5 md:col-span-4">
            <img
              src={data.photo}
              
              className="rounded-xl w-full md:w-[400px]"
            />
          </figure>
          <div className="md:col-span-5">
            <p className="font-semibold text-3xl mb-3">
              Counselor: 
            </p>
            <p className="mb-4">{data.description}</p>
            <div className="md:flex md:items-center md:justify-between gap-5">
              <h2 className="text-xl font-semibold">avcddtggh</h2>
              <p className="text-gray-500">({data.category})</p>
            </div>

            <div className="md:flex md:justify-between md:items-center my-5">
              <p className="text-lg font-bold text-green-500">
                {" "}
                <span className="font-bold text-black">Duration:</span>{" "}
                
              </p>
              <p className="md:text-white md:bg-green-500 px-2 py-1 rounded-full font-semibold text-green-500">
                bvdtr
              </p>
            </div>
            <div className="mt-2 lg:flex items-center">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder=" Your Feedback..."
                className="md:w-80 w-full h-32 border-2 rounded-lg p-4"
              />
              <button
                onClick={handleCommentSubmit}
                className="bg-slate-800 px-4 py-3 text-white font-semibold rounded-lg ml-7"
              >
                Submit
              </button>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold mb-3">Comments:</h3>
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
      </div>
    </div>
  );
};

export default EquipmentDetails;
