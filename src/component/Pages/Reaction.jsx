import React, { useEffect } from "react";
import heart from '../../assets/hearth.png'
const Reaction = () => {
  const comments = [
    "Great product!",
    "Fast delivery!",
    "Highly recommend this store.",
    "Amazing quality!",
    "Best price in the market!",
    "Excellent customer service.",
    "The packaging was fantastic.",
    "The product quality exceeded my expectations.",
    "Quick response from support!",
    "Will definitely buy again.",
    "Five stars for sure!",
    "Loved the design and usability.",
    "Very satisfied with my purchase.",
    "Superb attention to detail.",
    "Delivery was on time.",
    "Affordable prices, great quality.",
    "The website was easy to navigate.",
    "Highly trusted store!",
    "Everything came in perfect condition.",
    "Best online shopping experience ever!",
  ];

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
      @keyframes slideUp {
        0% { transform: translateY(100%); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100%); opacity: 0; }
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const getRandomPosition = () => ({
    top: `${Math.random() * 80}%`, 
    left: `${Math.random() * 80}%`, 
  });

  return (
    <div>
      <div className="flex items-center gap-5 justify-center">
      <h2 className="my-10 text-center font-bold text-5xl">
        <span className="text-7xl italic text-red-800">L</span>ove From Our Customers
      </h2>
      <img className="w-10 pt-2" src={heart} alt="" />
      </div>
      <p className="text-center text-sm text-gray-600 mb-8">
        Discover what our customers love the most! Our top-rated products are known for their outstanding quality, durability, and performance. <br /> Don't miss out on the best products that have made a difference in countless lives. Take a look at some of the amazing <br /> reviews from our satisfied customers.
      </p>
      <div className="relative h-[600px] w-full overflow-hidden ">
        <div className="absolute w-full h-full">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="absolute bg-[#5C4E4E] text-[#ffff] p-4 shadow rounded-md"
              style={{
                animation: `slideUp 10s linear ${index * 1}s infinite`,
                ...getRandomPosition(),
              }}
            >
              {comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reaction;
