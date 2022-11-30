import React from 'react';
import { useQuery } from "@tanstack/react-query";
import CategoryCard from './CategoryCard';

const Category = () => {

const { data: category = [], refetch } = useQuery({
  queryKey: ["category"],
  queryFn: async () => {
    const res = await fetch(`https://assignment-twelve-server-sigma.vercel.app/category`);
    const data = await res.json();
    return data;
  },
});


  return (
    <section className="mb-5 mt-5">
      <h2  className="text-2xl font-bold ">
        BROWSE ITEM BY CATEGORY
      </h2>
      <div  className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {category.map((eachCategory) => (
          <CategoryCard
            key={eachCategory.id}
            eachCategory={eachCategory}
          ></CategoryCard>
        ))}
      </div>
    </section>
  );
};

export default Category;