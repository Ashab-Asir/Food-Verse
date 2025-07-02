import React from "react";
import heroImg from "../assets/hero.png";
import customer1 from "../assets/customers/customer-1.jpg";
import customer2 from "../assets/customers/customer-2.jpg";
import customer3 from "../assets/customers/customer-3.jpg";
import customer4 from "../assets/customers/customer-4.jpg";
import customer5 from "../assets/customers/customer-5.jpg";
import customer6 from "../assets/customers/customer-6.jpg";
const Hero = () => {
  return (
    <section>
      <div className="bg-black text-white px-15 py-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:my-20">
          {/* Text Content */}
          <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-5">
            <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
              TechFest
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Space : The Timeless Infinity
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Explore your favourite events and register now to showcase your
              talent and win exciting prizes.
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a>

            <div className="flex mt-7 flex-wrap justify-between items-center gap-4">
              <div className="flex w-1.5/3">
                <img
                  className=" -mr-2.5 w-[45px] h-[45px] rounded-full border-3 border-amber-200 object-cover"
                  src={customer1}
                  alt="customer1"
                />
                <img
                  className=" -mr-2.5 w-[45px] h-[45px] rounded-full border-3 border-amber-200 object-cover"
                  src={customer2}
                  alt="customer2"
                />
                <img
                  className=" -mr-2.5 w-[45px] h-[45px] rounded-full border-3 border-amber-200 object-cover"
                  src={customer3}
                  alt="customer3"
                />
                <img
                  className="  w-[45px] h-[45px] rounded-full border-3 object-cover border-amber-200 "
                  src={customer4}
                  alt="customer4"
                />
                <img
                  className=" -mr-2.5 w-[45px] h-[45px] rounded-full border-3 border-amber-200 object-cover"
                  src={customer5}
                  alt="customer5"
                />
                <img
                  className=" -mr-1 w-[45px] h-[45px] rounded-full border-3 border-amber-200 object-cover"
                  src={customer6}
                  alt="customer6"
                />
              </div>
              <div className="font-bold">
                250,000+ meals delivered last year!
              </div>
            </div>
          </div>

          {/* Responsive Images */}
          <div className="p-5 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-[720px] justify-center md:w-[600px] hidden md:block lg:block ">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
