import React from "react";
import image from "../../assets/images/About us page-pana.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const AboutUs = () => {
  return (
    <section className="bg-base-200 py-24">
        <Helmet>
            <title>SportZone | About Us</title>
        </Helmet>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 md:text-6xl font lg:text-7xl">
          About Us
        </h2>
        <p className="mt-6 text-xl text-gray-600 text-center md:text-2xl lg:text-3xl">
          Your Partner in Every Game, Every Goal, and Every Victory.
        </p>

        {/* Image Section */}
        <div className="mt-12 flex justify-center">
          <img
            src={image}
            alt="About Us Banner"
            className="w-[600px] rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Empowering Your Passion for Sports
            </h3>
            <p className="mt-4 text-lg text-gray-600 md:text-xl">
              At <span className="font-bold text-primary">SportZone</span>, we
              believe in the power of sports to inspire, unite, and transform
              lives. That’s why we’re committed to providing high-quality,
              performance-driven equipment that helps athletes and enthusiasts
              achieve their goals.
            </p>
            <p className="mt-4 text-lg text-gray-600 md:text-xl">
              Whether you’re a seasoned professional or a weekend warrior, we’re
              here to support your journey every step of the way.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Why Choose Us?
            </h3>
            <ul className="mt-4 space-y-4 text-lg text-gray-600 md:text-xl">
              <li>
                <span className="font-bold text-primary">
                  ✓ Premium Quality:
                </span>
                We offer only the best sports gear from trusted brands.
              </li>
              <li>
                <span className="font-bold text-primary">✓ Expert Advice:</span>
                Our team is passionate about sports and ready to help.
              </li>
              <li>
                <span className="font-bold text-primary">
                  ✓ Unmatched Variety:
                </span>
                From beginner gear to pro-level equipment, we have it all.
              </li>
              <li>
                <span className="font-bold text-primary">
                  ✓ Community Focus:
                </span>
                We’re dedicated to fostering a love of sports in our local and
                global communities.
              </li>
            </ul>
          </div>
        </div>

       
        <div className="mt-16 flex justify-center">
          <Link to="/all" className="px-5 py-3 bg-primary text-white text-lg font-bold rounded-md shadow-md hover:bg-primary-focus transition">
            Explore Our Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
