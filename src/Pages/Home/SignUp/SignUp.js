import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Context/AuthProvider'
import { Link } from 'react-router-dom';


const SignUp = () => {

const {createUser} = useContext(AuthContext)

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const handleSignUp = (data) => {
    console.log('data', data)
       createUser(data.email, data.password)
         .then((result) => {
           const user = result.user;

           console.log(user);
         })

         .catch((error) => console.log(error));
  };

  
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-96">
          <h2 className="text-primary text-2xl mb-5">Sign Up</h2>

          <form onSubmit={handleSubmit(handleSignUp)}>
            <input
              {...register("name")}
              placeholder="Enter Name"
              className="input input-bordered input-primary w-full  mb-5"
            />

            <input
              {...register("email")}
              placeholder="Enter Email"
              className="input input-bordered input-primary w-full  mb-5"
            />
            <input
              {...register("password")}
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
                <span className="label-text mr-5">seller</span>
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
            Already  have an account ?{" "}
            <Link className="text-primary" to="/login">
              please Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
