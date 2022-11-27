import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const handleAddProduct = (data) => {
    const category = data.category;
    const name = data.name;
    const orginalprice = data.orginalprice;
    const soldprice = data.soldprice;
    const mobile = data.mobile;
    const location = data.location;
    const purchaseYear = data.purchaseyear;
    const img = data.imgurl;
    const condition = data.condition;

    const products = {
      category,
      data: {
        product_name: name,
        orginal_price: orginalprice,
        soldprice,
        number: mobile,
        location,
        purchaseYear,
        img,
        condition,
      },
    };
    console.log(products);

    fetch("http://localhost:5000/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <section>
      <div className="flex justify-center">
        <div className="">
          <h2 className="text-primary text-2xl mb-5">Add Product </h2>

          <form onSubmit={handleSubmit(handleAddProduct)}>
            <div className="grid lg:grid-cols-2 gap-3">
              <select
                className="select select-primary w-full mb-5 "
                {...register("category")}
              >
                <option>Select Your Product Category</option>
                <option value="Mobile">Mobile</option>
                <option value="Electronics">Electronics</option>
                <option value="Vehicles">Vehicles</option>
              </select>
              <input
                {...register("name")}
                placeholder="Enter product Name"
                className="input input-bordered input-primary w-full  mb-5"
              />

              <input
                {...register("orginalprice")}
                placeholder="Enter Orginal Product Price"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("soldprice")}
                placeholder="Enter sold Price"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("mobile")}
                placeholder="Enter Mobile Number"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("location")}
                placeholder="Enter Location"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("purchaseyear")}
                placeholder="Enter Year of purchase"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("imgurl")}
                placeholder="Enter Product Image Url"
                className="input input-bordered input-primary w-full  mb-5"
              />
            </div>
            <h2>Condition</h2>
            <div className="flex justify-around mb-5">
              <label className="label cursor-pointer ">
                <span className="label-text mr-5">Excellent</span>
                <input
                  {...register("condition")}
                  type="radio"
                  value="Excellent"
                  className="radio checked:bg-red-500"
                  checked
                />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text mr-5">Good</span>
                <input
                  {...register("condition")}
                  type="radio"
                  value="Good"
                  className="radio checked:bg-blue-500"
                  checked
                />
              </label>
            </div>
            <input className="btn btn-primary w-full mb-5" type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
