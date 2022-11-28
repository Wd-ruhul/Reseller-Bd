import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import toast from "react-hot-toast";

const BookingModal = ({ modalProduct, setModalProduct }) => {
  const { product_name, soldprice, img } = modalProduct;
  const { user } = useContext(AuthContext);
  const image = img;
  const handleModalForm = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const phone = form.number.value;
    const location = form.location.value;
    let date = new Date().toJSON().slice(0, 10);

    // get the date and time

    // console.log(date,slot,name,email,phone)
    const booking = {
      bookingDate: date,

      name,
      email,
      phone,
      price,
      location,
      image,
    };
    console.log(booking);

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Product Booked")
        setModalProduct(null);
      });
  };



  return (
    <>
      <input type="checkbox" id="option-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="option-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{product_name}</h3>

          <form onSubmit={handleModalForm} className="grid grid-cols-1 gap-3">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              readOnly
              defaultValue={soldprice}
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <label className="label">
              <span className="label-text">Enter Phone Number</span>
            </label>
            <input
              type="text"
              name="number"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Meeting Location</span>
            </label>
            <input
              type="text"
              name="location"
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <input
              type="submit"
              value="Submit"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;