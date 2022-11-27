import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
  const  products  = useLoaderData()
  console.log(products);
  


  return (
    <section>
      products
      <div className='grid lg:grid-cols-2 gap-3 '>
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default Products;