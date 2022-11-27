import React from 'react';

const ProductCard = ({product}) => {
  const {
   product_name,
    orginal_price,
    soldprice,
    number,
    location,
    purchaseYear,
    img,
    condition,
    post_date,
  } = product;
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="image" className="rounded-xl w-40" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product_name}</h2>
        <p className="text-xl text-primary">
          post on : <span>{post_date}</span>
        </p>
        <div className="grid grid-cols-2 gap-3">
          <p>location: {location}</p>
          <p>Use Time {purchaseYear} Year</p>
          <p>Orginal Price:{orginal_price} Tk</p>
          <p>Resell Price:{soldprice} Tk</p>
        </div>
        <p>Seller :</p>
        <div className="card-actions">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;