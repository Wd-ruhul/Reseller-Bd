import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({eachCategory}) => {
const {category,img,id} = eachCategory
  return (
    <Link to={`/products/${id}`}>
      <div className={`card card-side  shadow-xl  p-2 text-white bg-accent`}>
        <figure>
          <img src={img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">{category}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;