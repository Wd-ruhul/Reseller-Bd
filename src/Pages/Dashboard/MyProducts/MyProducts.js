import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from "@tanstack/react-query";
import Link from "react-router-dom";

const MyProducts = () => {
  

  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/myproducts?email=${user?.email}`;

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  const { data: myproducts = [] } = useQuery({
    queryKey: ["myproducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log("d", data);
      return data;
    },
  });

  const handleDelete = (product) => {
    const agree = window.confirm(
      `Are you agree to delete ${product.product_name} ?`
    );

    if (agree) {
      alert(`delete ${product._id}`);
      fetch(`http:localhost:5000/myproduct/${product._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete Successfully");
            // const remainingUsers = displayUsers.filter(
            //   (usr) => usr._id !== user._id
            // );
            // setDisplayUsers(remainingUsers);
          }
        });
    }
  };



  return (
    <section>
      <h2 className="text-3xl text-primary">My Product </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>price</th>
              <th>Add Advertise</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myproducts.map((product, i) => (
              <tr className="hover" key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img
                        src={product.img}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </td>
                <td>{product.product_name}</td>
                <td>{product.soldprice} Tk</td>
                <td>{product.bookingDate}</td>
                <td>
                  <button onClick={()=>handleDelete(product._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyProducts;