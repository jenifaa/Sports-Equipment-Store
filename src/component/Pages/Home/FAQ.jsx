import React from "react";
import img from "../../../assets/images/equip2.jpg";
import { MdSlowMotionVideo } from "react-icons/md";
import { Link } from "react-router-dom";
const FAQ = () => {
  return (
    <div className="bg-base-200 py-20">
      <div className="md:flex justify-between items-center gap-10 md:gap-20 w-11/12 mx-auto">
        <div className="md:w-1/2">
          <img className="relative" src={img} alt="" />
          <Link to="https://youtu.be/hmFQqjMF_f0?si=AAApqNLBCRZmik-G" className="flex items-center gap-1 px-8 py-5 md:ml-44  bg-[#5C4E4E] absolute lg:ml-[450px] text-2xl -mt-10 text-white"><MdSlowMotionVideo></MdSlowMotionVideo>Explore More...</Link>
        </div>
        <div className="md:w-1/2 mt-11 md:mt-1">
          <p className="text-sm text-orange-600 text-center mb-2">
            -- Frequently asked question
          </p>
          <h2 className="text-center md:text-7xl text-5xl mb-5 font-bold font ">FAQ</h2>
          <h2 className="text-4xl font-bold my-3 px-5">
            Quick Answer <br />
            Quick <span className="text-[#5C4E4E] text-4xl">Solution</span>
          </h2>
          <div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What types of sports equipment do you offer?
              </div>
              <div className="collapse-content">
                <p>
                  We offer a wide range of sports equipment, including
                  footballs, basketballs, tennis rackets, badminton rackets,
                  volleyballs, and much more. You can find high-quality
                  equipment for all your sporting needs, whether you're an
                  amateur or a professional player.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Can I customize my sports equipment?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, many of our sports equipment items can be customized. You
                  can add personalized names, logos, or select specific sizes
                  based on your preferences. Customization options are available
                  for products like footballs, tennis rackets, and basketballs.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                How can I place an order?
              </div>
              <div className="collapse-content">
                <p>
                  To place an order, simply browse through our website, select
                  your desired products, and add them to the cart. Once you're
                  ready to checkout, follow the on-screen instructions to
                  complete your order and make a payment.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Do you offer international shipping?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we offer international shipping to many countries. Please
                  check our shipping policy or enter your address during
                  checkout to see if we can ship to your location.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                How can I track my order?
              </div>
              <div className="collapse-content">
                <p>
                  Once your order is shipped, you will receive a tracking number
                  via email. You can use this tracking number to monitor the
                  status of your shipment on the carrier's website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
