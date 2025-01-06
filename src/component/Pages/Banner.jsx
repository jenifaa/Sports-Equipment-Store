import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import bg1 from "../../assets/images/sprots-banner.jpg";
import bg1 from "../../assets/images/Sport equipment cartoon vector set.jpg";
// import bg2 from "../../assets/images/top-view-still-life-sport-composition.jpg";
import bg2 from "../../assets/images/still-life-sport-arrangement.jpg";
import bg3 from "../../assets/images/42103.jpg";
// import Slide from "./Slide";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { motion } from "framer-motion";
// import { easeOut } from "framer-motion";
// import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import lottie from "../../assets/Animation - 1733508384416.json";

const Banner = () => {
  return (
    <div className=" mt-[200px] md:mt-20">
      {/* <div className="lg:flex justify-between items-center w-11/12 mx-auto">
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
      </div> */}
      <Swiper
        className="mySwiper w-full "
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img className="w-full h-[500px]" src={bg3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full h-[500px]" src={bg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full h-[500px]" src={bg1} alt="" />
        </SwiperSlide>
      </Swiper>

      {/* <div>
        <div
          // data-aos="fade-right"
          className="absolute hidden  -mt-5 z-10 lg:ml-80   lg:flex items-center gap-6 lg:justify-center pb-6"
        >
          <div className="bg-[#947c7c]  shadow-md rounded-lg p-3 w-64 mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Equipments Launch
            </h3>
            <p className="text-white text-sm mb-4">
              Our Equipments is almost ready for the grand launch.
            </p>

            <div className="w-full text-white rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>

            <p className="mt-2 text-sm text-white">80% Complete</p>
          </div>
          <div className="bg-[#947c7c] shadow-md rounded-lg p-3 w-64 mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              User Growth
            </h3>
            <p className="text-white text-sm mb-4">
              We’ve seen great growth in our user base this month.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
            <p className="mt-2 text-white text-sm ">65% Complete</p>
          </div>

          <div className="bg-[#947c7c] text-white shadow-md rounded-lg p-3 w-64 mb-6">
            <h3 className="text-lg font-semibold  mb-2">
              Features Development
            </h3>
            <p className="text-white text-sm mb-4">
              We are adding more features to enhance user experience.
            </p>
            <div className="w-full text-white rounded-full h-2.5">
              <div
                className="bg-orange-500 h-2.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
            <p className="mt-2 text-white text-sm ">90% Complete</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
