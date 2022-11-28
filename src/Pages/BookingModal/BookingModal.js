import React from 'react';

const BookingModal = ({ modalProduct }) => {
  const { product_name } = modalProduct;
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

          <form className="grid grid-cols-1 gap-3">
            <input
              type="text"
              disabled
              placeholder=""
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              readOnly
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
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