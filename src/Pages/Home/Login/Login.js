import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Login = () => {
  const { logIn, loginWithGoogle } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

   const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

    const handleSignIn = (data) => {
      console.log("data", data);
      logIn(data.email, data.password)
        .then((result) => {
          const user = result.user;

          console.log(user);
          navigate(from, { replace: true });
        })

        .catch((error) => console.log(error));
  };
   const handleGoogleSignIn = () => {
     loginWithGoogle()
       .then((result) => {
         const user = result.user;
         console.log("🚀 ~ file: Login.js ~ line 36 ~ .then ~ user", user);
         navigate(from, { replace: true });
       })
       .catch((error) => {
         console.error(error);
       });
   };

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-96">
          <h2 className="text-primary text-2xl mb-5">Sing In</h2>

          <form onSubmit={handleSubmit(handleSignIn)}>
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

            <input className="btn btn-primary w-full mb-5" type="submit" />
          </form>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="w-full btn btn-outline"
          >
            Contuine With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
