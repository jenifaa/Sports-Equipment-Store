import React from "react";
import about from "../../assets/lottie/aboutUs.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
const ContactUs = () => {
  return (
    <div className="mt-32 ">
      <p className="text-sm text-orange-600 text-center mb-2">
        -- Know more about us
      </p>
      <h2 className="text-6xl mb-5 font font-bold text-center">Contact Us</h2>
      <div className="md:flex justify-between items-center mb-5">
        <Lottie className="md:w-96 flex-1" animationData={about}></Lottie>
        <div className="bg-base-200 flex-1 p-6 mx-8 rounded-lg shadow-md ">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Find Us</h2>

          <div className="  max-w-sm">
            <p className="mb-2">
              <span className="font-bold">📞 WhatsApp:</span> +1 (234) 567-890
            </p>
            <p className="mb-2">
              <span className="font-bold">📧 Email:</span> sportzone@gmail.com
            </p>
            <p className="mb-2">
              <span className="font-bold">🌐 Website:</span>{" "}
              <Link className="text-blue-500 underline">
                https://jenifa-equipment-store.surge.sh
              </Link>
            </p>
            <p className="mb-2">
              <span className="font-bold">📍 Location:</span> , Dhaka City,
              Bonani
            </p>
          </div>
          <p className="text-gray-700 italic mt-2">
            ✨ We’re here to assist you 24/7! ✨
          </p>
          <button className="btn bg-[#331A15] text-white mt-4">
            <Link to="https://mail.google.com/mail/u/0/#inbox">Contact Us</Link>
          </button>
        </div>
      </div>
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-sm text-orange-600 text-center mb-2">
            --Come to buy your desire products
          </p>
          <h2 className="text-4xl font font-bold text-center text-gray-800 md:text-5xl lg:text-6xl">
            Visit Our Store
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center md:text-xl lg:text-2xl">
            Find us in the heart of Dhaka for all your sports equipment needs.
          </p>

        
          <div className="mt-10 flex flex-col items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
              <h3 className="text-2xl font-semibold text-gray-800 md:text-3xl">
                Store Address
              </h3>
              <p className="mt-2 text-lg text-gray-600 md:text-xl">
                <span className="text-blue-900 font-semibold"> SportZone</span>
                <br />
                House 12, Road 5, Block E,
                <br />
                Banani, Dhaka 1213, Bangladesh
              </p>

              <div className="mt-6">
                <h4 className="text-xl font-medium text-gray-700">
                  Contact Us
                </h4>
                <p className="text-lg text-gray-600">
                  Phone:{" "}
                  <a href="tel:+8801234567890" className="text-primary">
                    +880 123-456-7890
                  </a>
                  <br />
                  Email:{" "}
                  <a href="mailto:info@yourstore.com" className="text-primary">
                    sportzone@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          
          <div className="mt-12 flex justify-center">
            <iframe
              className="w-full max-w-4xl h-96 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8366761747385!2d90.39945261543118!3d23.75280749460662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a9347315a3%3A0x2c6a55f44d3e89c2!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
              title="Store Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
