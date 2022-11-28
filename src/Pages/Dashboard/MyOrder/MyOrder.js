import React, {useContext} from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from "@tanstack/react-query";
import  Link from "react-router-dom";

const MyOrder = () => {
  const { user } = useContext(AuthContext);

const url = `http://localhost:5000/bookingg?email=${user?.email}`;

// useEffect(() => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => setData(data));
// }, []);

const { data: bookingg = [] } = useQuery({
  queryKey: ["bookingg", user?.email],
  queryFn: async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log("d", data);
    return data;
  },
});

  return (
    <div>
      <h2 className="3xl">My Appointment </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>price</th>
              <th>Booking Date</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {bookingg.map((booking, i) => (
              <tr className="hover" key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img
                        src={booking.image}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </td>
                <td>{booking.title}</td>
                <td>{booking.price} Tk</td>
                <td>{booking.bookingDate}</td>
                <td><button>pay</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;