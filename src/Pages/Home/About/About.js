import React from 'react';

const About = () => {
  return (
    <section>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          About Reseller Bd The Largest Marketplace in Bangladesh!
        </div>
        <div className="collapse-content">
          <p>
            Reseller Bd is a platform on which you can buy and sell almost
            everything! We help people buy and sell vehicles, find properties,
            get jobs or recruit employees, buy and sell mobile phones, purchase
            electronic products, and much more. With more than 50 categories our
            solutions are built to be safe, smart, and convenient for our
            customers.
          </p>

          <h2>Buy, Sell in Bangladesh</h2>
          <p>
            Every month, hundreds of millions of people use Reseller Bd to find
            and sell mobiles, cars and more through classified ads. To sell used
            items quickly, Reseller Bd offers Ad Promotion features. Reseller
            Bd.com has an extensive collection of new and used goods, making it
            easier for users to quickly buy new items or buy used items at their
            desired location. To buy online, users easily can reach their
            desired products through filtering options.
          </p>

          <div className='flex justify-center'>
            <div>
              <h2>Only Four Steps To Get Product</h2>
              <ul className="steps">
                <li className="step step-primary">Register</li>
                <li className="step step-primary">Choose plan</li>
                <li className="step">Purchase</li>
                <li className="step">Receive Product</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;