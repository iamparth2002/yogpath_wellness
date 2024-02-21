import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookedCard from '../components/BookedCard';
import NoBookingyet from '../components/NoBookingyet';

const Bookings = () => {
  const params = useParams();
  const [booked, setBooked] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/bookings/${params.id}`, {
      credentials: 'include',
    }).then((response) => {
      response.json().then((data) => {
        setBooked(data);
      });
    });
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl lg:text-5xl font-bold mt-20 p-5 uppercase ">
        Your bookings : 
      </h1>
      <div className="flex flex-wrap gap-2 p-5 justify-center md:justify-start ">
        {booked ? 
          booked.map((book) => <BookedCard key={Math.random} data={book} />)
         : 
          <NoBookingyet />
        }
      </div>
    </div>
  );
};

export default Bookings;
