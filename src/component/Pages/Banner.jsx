import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import bg1 from "../../assets/images/Sport equipment cartoon vector set.jpg";

import bg2 from "../../assets/images/still-life-sport-arrangement.jpg";
import bg3 from "../../assets/images/42103.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import lottie from "../../assets/Animation - 1733508384416.json";
import Slide from "../Slider/Slide";

const Banner = () => {
  return (
    <Swiper
      className="mySwiper mt-20"
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <Slide
          image={bg3}
          text1={
            <>
              <span className="leading-normal">
                "Unleash the Athlete Within – <br />
                <motion.span className="ml-4">
                  Gear That Powers Performance!
                </motion.span>
                ; "
              </span>
            </>
          }
          text2={
            <>
              <span className="text-start">
                <Typewriter
                  options={{
                    strings: [
                      "Discover top-quality sports gear at SportZone!",
                      "We provide equipment for all levels – from beginners to pros.",
                      "Join us and take your game to the next level with premium gear!",
                    ],
                    autoStart: true,
                    loop: true,
                    typeSpeed: 30,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </>
          }
        ></Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          image={bg2}
          text1={
            <>
              <span className="leading-normal">
                "Unleash the Athlete Within – <br />
                <motion.span className="ml-4">
                  Gear That Powers Performance!
                </motion.span>
                ; "
              </span>
            </>
          }
          text2={
            <>
              <span className="text-start">
                <Typewriter
                  options={{
                    strings: [
                      "Discover top-quality sports gear at SportZone!",
                      "We provide equipment for all levels – from beginners to pros.",
                      "Join us and take your game to the next level with premium gear!",
                    ],
                    autoStart: true,
                    loop: true,
                    typeSpeed: 30,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </>
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          image={bg1}
          text1={
            <>
              <span className="leading-normal">
                "Unleash the Athlete Within – <br />
                <motion.span className="ml-4">
                  Gear That Powers Performance!
                </motion.span>
                ; "
              </span>
            </>
          }
          text2={
            <>
              <span className="text-start">
                <Typewriter
                  options={{
                    strings: [
                      "Discover top-quality sports gear at SportZone!",
                      "We provide equipment for all levels – from beginners to pros.",
                      "Join us and take your game to the next level with premium gear!",
                    ],
                    autoStart: true,
                    loop: true,
                    typeSpeed: 30,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </>
          }
        ></Slide>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
