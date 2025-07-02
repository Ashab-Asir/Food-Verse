import React from "react";
import heroImg from "../assets/hero.png";
import customer1 from "../assets/customers/customer-1.jpg";
import customer2 from "../assets/customers/customer-2.jpg";
import customer3 from "../assets/customers/customer-3.jpg";
import customer4 from "../assets/customers/customer-4.jpg";
import customer5 from "../assets/customers/customer-5.jpg";
import customer6 from "../assets/customers/customer-6.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="bg-[#fdf2e9] text-[#2e1907] px-4 py-5 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:my-20">
          {/* Text Content */}
          <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-5 font-bold text-[#2e1907] tracking-loose">
              A healthy meal delivered to your door, every single day
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#555] mb-4">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>

            <div className="flex gap-3">
              <Link
                to="/menu"
                className="text-sm sm:text-base md:text-lg  
                bg-[#e67e22] hover:bg-[#cf711f] text-[#fff] rounded shadow hover:shadow-lg py-2 px-4 border hover:border-transparent"
              >
                See Menu
              </Link>
            </div>

            <div className="flex mt-7 flex-wrap justify-between items-center gap-4">
              {/* Customer Images */}
              <div className="flex">
                {[
                  customer1,
                  customer2,
                  customer3,
                  customer4,
                  customer5,
                  customer6,
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`customer-${i + 1}`}
                    className={`w-[45px] h-[45px] rounded-full border-4 border-white object-cover ${
                      i !== 3 ? "-mr-2.5" : ""
                    }`}
                  />
                ))}
              </div>

              {/* Customer Count Text */}
              <div className="text-sm sm:text-base md:text-lg font-bold">
                250,000+ meals delivered last year!
              </div>
            </div>
          </div>

          {/* Responsive Hero Image */}
          <div className="p-5 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-[720px] md:w-[600px] hidden md:block">
            <img src={heroImg} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
