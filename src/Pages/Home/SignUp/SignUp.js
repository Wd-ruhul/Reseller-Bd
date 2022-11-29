import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Context/AuthProvider'
import { Link } from 'react-router-dom';
import login from "../../../Assets/image/login.jpg";


const SignUp = () => {

const {createUser} = useContext(AuthContext)

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const handleSignUp = (data) => {
    console.log('data', data)
       createUser(data.email, data.password)
         .then((result) => {
           saveUser(data.name, data.email,data.category);
           const user = result.user;

           console.log(user);
         })

         .catch((error) => console.log(error));
  };

   const saveUser = (name, email, category) => {
     const user = { name, email, category };

     fetch("http://localhost:5000/users", {
       method: "POST",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(user),
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
       });
   };



  return (
    <section className="p-5" style={{ background: `url(${login})` }}>
      <div className="flex justify-center">
        <div className="w-96">
          <h2 className="text-primary text-2xl mb-5">Sign Up</h2>

          <form onSubmit={handleSubmit(handleSignUp)}>
            <input
              {...register("name", { required: true })}
              placeholder="Enter Name"
              className="input input-bordered input-primary w-full  mb-5"
            />

            <input
              {...register("email", { required: true })}
              placeholder="Enter Email"
              className="input input-bordered input-primary w-full  mb-5"
            />
            <input
              {...register("password", { required: true })}
              placeholder="Enter Password"
              className="input input-bordered input-primary w-full  mb-5"
            />
            <h2>Category:</h2>
            <div className="flex justify-around mb-5">
              <label className="label cursor-pointer ">
                <span className="label-text mr-5">Buyer</span>
                <input
                  {...register("category")}
                  type="radio"
                  value="Buyer"
                  className="radio checked:bg-red-500"
                  checked
                />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text mr-5">Seller</span>
                <input
                  {...register("category")}
                  type="radio"
                  value="seller"
                  className="radio checked:bg-blue-500"
                  checked
                />
              </label>
            </div>
            <input className="btn btn-primary w-full mb-5" type="submit" />
          </form>

          <p>
            Already have an account ?{" "}
            <Link className="text-primary" to="/login">
              please Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
