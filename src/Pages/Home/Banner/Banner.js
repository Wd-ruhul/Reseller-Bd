import React from 'react';
import sale from '../../../Assets/image/sale.png'
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <section className='mt-5 mb-5'>
      <div className="bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={sale}
            className=" md:w-1/2 rounded-lg shadow-2xl al"
            alt=""
          />
          <div>
            <h1 className="text-4xl font-bold">
              Welcome To{" "}
              <span className="text-primary">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Reseller Bd")
                      .callFunction(() => {
                        console.log("String typed out!");
                      })
                      .pauseFor(2500)
                      .deleteAll()
                      .callFunction(() => {
                        console.log("All strings were deleted");
                      })
                      .start();
                  }}
                />
              </span>
            </h1>
            <p className="py-6">
              The Largest Marketplace in Bangladesh! which you can buy and sell
              almost everything! We help people buy and sell vehicles, find
              properties.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;