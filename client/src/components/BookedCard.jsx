import  { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';

const BookedCard = ({ data }) => {
  const { _id, time, title, rating, date, image, trainer } = data;
  const [redirect, setRedirect] = useState(false);
  const { userInfo } = useContext(UserContext);

  const deleteBooking = async () => {
    const ans = window.confirm('Are you sure you want to delete this booking?');
    if (ans) {
      const status = await fetch(`http://localhost:4000/bookings/${_id}`, {
        method: 'DELETE',
      });
      if (status.ok) {
        setRedirect(true);
      }
    }
  };
  if (redirect) {
    return <Navigate to={`/bookings/${userInfo._id}`} />;
  }
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
        <img className="h-" src={image} alt="random" />
        <div className="px-6 py-4">
          <div className="flex items-center gap-3 mb-2">
            <FaStar size={20} color="yellow" />
            <p className="text-gray-700 text-base mt-1">{rating}</p>
          </div>
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">By - {trainer}</p>
        </div>
        <hr className="mb-2 " />
        <div className=" flex items-center px-6 pb-4 justify-between flex-wrap">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full flex items-center gap-2">
            <FaCalendarAlt />
            {date}
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full flex items-center gap-2">
            <FaClock />

            {time}
          </button>
          <button
            className="bg-red-500 hover:bg-blue-700 text-white py-2 px-4 rounded-xl flex items-center gap-2"
            onClick={deleteBooking}
          >
            {/* <FiShoppingCart /> */}
            delete
          </button>
        </div>
      </div>
    </>
  );
};

export default BookedCard;
