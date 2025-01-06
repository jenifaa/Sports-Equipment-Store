import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCarts(data);
      });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
     <div className="w-10/12 mx-auto mt-32">
     <h2 className="text-5xl font-bold my-10">My Cart</h2>
     
     <div className="space-y-4">
       {carts.map((cart, index) => (
         <div
           key={index}
           className="p-4 bg-gray-100 rounded-lg shadow flex items-center gap-20"
         >
           {/* name, rating, price, customization, category, photo, quantity, */}
           <div>
             <img className="w-28 " src={cart.photo} alt="" />
           </div>
           <div>
             <h3 className="font-bold text-xl">{cart.name}</h3>
             <p className="text-gray-800 font-semibold italic">
               {cart.category}
             </p>
             <p className="text-gray-800 font-semibold italic">
               {cart.customization}
             </p>

             {/* <div className="items-center">
                 <p className="text-sm text-gray-800 italic">
                   <span className="text-gray-900 font-semibold">
                    :{" "}
                   </span>{" "}
                   {recommendation.recommenderName}
                 </p>
                 <p className="text-sm text-gray-500 italic">
                   {recommendation.currentDateAndTime}
                 </p>
               </div> */}
           </div>
         </div>
       ))}
     </div>
     </div>
      
    </div>
  );
};

export default Cart;
