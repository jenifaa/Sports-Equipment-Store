

import Lottie from "lottie-react";
import lottie from '../../assets/Animation - 1733508384416.json'

const Banner = () => {
 
  return (
    <div className=" md:mb-[100px]">
      <div className="lg:flex justify-between items-center w-11/12 mx-auto">
        <div className="mb-[400px] md:mb-20 pb-8 md:pt-8 pt-8">
          <div className="carousel rounded-box w-full lg:h-[500px] lg:w-[400px] relative">
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/dGqpJqw/view-tennis-player-with-digital-art-style-effect.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src=" https://i.ibb.co.com/MDbHdcG/equip2.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/cg24cpD/futuristic-football-game-player.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>

         

          <div className="carousel rounded-box w-[300px] h-[300px] lg:h-[500px]  lg:w-[400px]  absolute lg:left-[500px] top-[700px] left-10 lg:top-[250px]">
            <div className="carousel-item w-full">
              <img
                src=" https://i.ibb.co.com/py3smQg/ball.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/PzYfKx5/sports-tools.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/tsyvHDY/sport-eq.jpg"
                className="w-full h-[500px]"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-20 md:mt-10 flex justify-center lg:justify-end">
          <div className="w-3/4 md:w-[500px] lg:w-[500px]">
            <Lottie animationData={lottie} />
          </div>
          </div>
      </div>

      <div>
        <div
          data-aos="fade-right"
          className=" md:mt-10 mt-5 pl-4 md:flex items-center gap-6 md:justify-center pb-6"
        >
          <div className="bg-white shadow-md rounded-lg p-6 w-64 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Equipments Launch
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Our Equipments is almost ready for the grand launch.
            </p>

            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>

            <p className="mt-2 text-sm text-gray-500">80% Complete</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 w-64 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              User Growth
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We’ve seen great growth in our user base this month.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-500">65% Complete</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 w-64 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Features Development
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We are adding more features to enhance user experience.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-orange-500 h-2.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-500">90% Complete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
