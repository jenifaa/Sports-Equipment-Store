const Banner = () => {
  return (
    <div className="mb-[100px]">
      <div className="md:flex justify-between items-center w-11/12 mx-auto">
        <div>
          <div className="carousel rounded-box  w-36 h-36 md:h-[500px] md:w-[400px] relative">
            <div className="carousel-item w-full">
              <img
                src=" https://i.ibb.co.com/MDbHdcG/equip2.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/dGqpJqw/view-tennis-player-with-digital-art-style-effect.jpg"
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

          <div className="carousel rounded-box  w-36 h-36 md:h-[500px]   md:w-[400px] absolute top-[310px] left-[50px] md:left-[210px] md:top-[500px]">
            <div className="carousel-item w-full">
              <img
                src=" https://i.ibb.co.com/pWwLgCc/still-life-sport-arrangement.jpg "
                className="w-full h-[500px]"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src=" https://i.ibb.co.com/b1Pr1HC/top-view-still-life-sport-composition.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src=" https://i.ibb.co.com/RvPq4cc/equip.webp"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>

          <div className="carousel rounded-box w-36 h-36 md:h-[500px]  md:w-[400px]  absolute md:left-[500px] md:top-[250px]">
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/PzYfKx5/sports-tools.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/MSxnT7h/good-sport.jpg"
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
        <div className="md:pr-36 mt-44 md:mt-10">
          <div className="bg-white shadow-md rounded-lg p-6 w-64 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Website Launch
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Our website is almost ready for the grand launch.
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

          <div className="bg-white shadow-md rounded-lg p-6 w-64">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Features Development
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We are adding more features to enhance user experience.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-orange-500 h-2.5 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-500">40% Complete</p>
          </div>
        </div>
      </div>

      <div>
        <div  data-aos="fade-right" className=" md:mt-10 flex items-center gap-3 justify-end">
          <div className="bg-white shadow-md rounded-lg p-6 w-64 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Website Launch
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Our website is almost ready for the grand launch.
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
                style={{ width: "40%" }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-500">40% Complete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
