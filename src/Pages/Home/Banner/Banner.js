import React from 'react';
import sale from '../../../Assets/image/sale.png'

const Banner = () => {
  return (
    <div className="bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={sale}
          className=" md:w-1/2 rounded-lg shadow-2xl al"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;