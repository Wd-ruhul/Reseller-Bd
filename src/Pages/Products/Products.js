import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductCard from './ProductCard';

const Products = () => {
  const products = useLoaderData()
  const [modalProduct,setModalProduct] = useState(null)
  console.log(products);
  


  return (
    <section>
      products
      <div className="grid lg:grid-cols-2 gap-3 ">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setModalProduct={setModalProduct}
          ></ProductCard>
        ))}
      </div>
      {modalProduct && (
        <BookingModal modalProduct={modalProduct}
        setModalProduct={setModalProduct}
        ></BookingModal>
      )}
    </section>
  );
};

export default Products;