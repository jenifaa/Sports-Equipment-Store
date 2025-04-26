import React from "react";
import daraz from "../../assets/images/daraz.png";
import evaly from "../../assets/images/evaly.jpg";
import tools from "../../assets/images/tools.png";
import tech from "../../assets/images/techshop.png";
import bdShop from "../../assets/images/bdshop.png";
const OurPartner = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16 px-6">
        <p className="text-sm text-orange-600 text-center mb-2">
          -- Meet Our Partners
        </p>
        <h2 className="text-6xl font font-bold text-center mb-5">
          Our Partners
        </h2>
        <p className="text-center text-gray-600 mb-10">
          We’re proud to collaborate with these industry-leading brands and
          organizations.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-10/12 mx-auto lg:grid-cols-5 gap-6">
          {/* Partner 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
            <img
              src={daraz}
              alt="Partner 1 Logo"
              className="max-w-full h-auto"
            />
            <h2 className="font-bold">Daraz</h2>
          </div>
          {/* Partner 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
            <img
              src={evaly}
              alt="Partner 2 Logo"
              className="max-w-full h-auto"
            />
          </div>
          {/* Partner 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
            <img
              src={tools}
              alt="Partner 3 Logo"
              className="max-w-full h-auto"
            />
          </div>
          {/* Partner 4 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
            <img src={tech} alt="Partner 4 Logo" className="max-w-32 h-auto" />
            <h2 className="font-bold">TechShop Bd</h2>
          </div>
          {/* Partner 5 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
            <img
              src={bdShop}
              alt="Partner 5 Logo"
              className="max-w-full h-auto"
            />
          </div>
          {/* Add more partners as needed */}
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
