import React from "react";
import apple from "../../assets/icons/apple-logo.png";
import windows from "../../assets/icons/microsoft.png";
import playStore from "../../assets/icons/playstore.png";
import { Link } from "react-router-dom";
import bg from "../../assets/images/freepik.jpg";
const DownLoad = () => {
  return (
    <div className="bg-base-300 py-8">
      <p className="text-sm text-orange-600 text-center mb-2">
        -- Visit our app
      </p>
      <h2 className="text-5xl font font-bold mb-4 text-center">
        Download Our App
      </h2>
      <p className="text-sm text-center mb-8">
        Get the best of our services right at your fingertips. Download the app
        now to explore <br /> all the amazing features.
      </p>
      <div
        className="hero  flex-1"
        // style={{
        //   backgroundImage: `url(${bg})`,
        // }}
      >
        <div className="">
          <div className="mb-5 md:flex justify-between gap-10 py-10 items-center">
          
            <Link to="https://www.apple.com/app-store" className="flex flex-col items-center border-black border rounded-full mb-5 md:mb-0 px-20 py-2">
              <img className="w-16 mb-3" src={apple} alt="App Store" />
              <p className="text-lg font-medium ">App Store</p>
            </Link>
            <Link  to="https://play.google.com/store/apps?hl=en" className="flex flex-col items-center border-black border rounded-full px-20 py-2">
              <img className="w-16 mb-3" src={playStore} alt="Play Store" />
              <p className="text-lg font-medium ">Play Store</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownLoad;
