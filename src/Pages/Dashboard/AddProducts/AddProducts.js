import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";
import {Navigate ,  useLocation, useNavigate } from "react-router-dom";


const AddProducts = () => {

  const {user} = useContext(AuthContext)
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

    const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard/myproduct";

  const email = user.email



  const handleAddProduct = (data) => {
    const id = data.id;
    const name = data.name;
    const orginalprice = data.orginalprice;
    const soldprice = data.soldprice;
    const mobile = data.mobile;
    const location = data.location;
    const purchaseYear = data.purchaseyear;
    const img = data.imgurl;
    const condition = data.condition;
    let today = new Date();

    // get the date and time
    let now = today.toLocaleString();

    const products = {
      id,
      email,
      product_name: name,
      orginal_price: orginalprice,
      soldprice,
      number: mobile,
      location,
      purchaseYear,
      img,
      condition,
      post_date: now,
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
        toast("Product Successfully Added")
      
        navigate(from, { replace: true });
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
                {...register("id", { required: true })}
              >
                <option >
                  Select Your Product Category
                </option>
                <option value="m01">Mobile</option>
                <option value="e01">Electronics</option>
                <option value="v01">Vehicles</option>
              </select>
              <input
                {...register("name", { required: true })}
                placeholder="Enter product Name"
                className="input input-bordered input-primary w-full  mb-5"
              />

              <input
                {...register("orginalprice", { required: true })}
                placeholder="Enter Orginal Product Price"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("soldprice", { required: true })}
                placeholder="Enter sold Price"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("mobile", { required: true })}
                placeholder="Enter Mobile Number"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("location", { required: true })}
                placeholder="Enter Location"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("purchaseyear", { required: true })}
                placeholder="Enter Year of purchase"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("imgurl", { required: true })}
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
