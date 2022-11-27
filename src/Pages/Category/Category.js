import React from 'react';
import { useQuery } from "@tanstack/react-query";
import CategoryCard from './CategoryCard';

const Category = () => {

const { data: category = [], refetch } = useQuery({
  queryKey: ["category"],
  queryFn: async () => {
    const res = await fetch(`http://localhost:5000/category`);
    const data = await res.json();
    return data;
  },
});


  return (
    <section>
      <h2>category:{category.length}</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {category.map((eachCategory) => (
          <CategoryCard key={eachCategory.id}
            eachCategory={eachCategory}></CategoryCard>
        ))}
      </div>
    </section>
  );
};

export default Category;