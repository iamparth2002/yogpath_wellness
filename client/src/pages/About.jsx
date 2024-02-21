import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Navigate, useParams } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { UserContext } from '../../context/UserContext';

const About = () => {
  const params = useParams();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [yoga, setYoga] = useState({});
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const [redirect, setRedirect] = useState(false);
  const [redirecttologin, setRedirecttologin] = useState(false);

  useEffect(() => {
    fetch(`https://yogpath-wellness-project.vercel.app/yogas/${params.id}`)
      .then((data) => data.json())
      .then((data) => setYoga(data));
  }, []);

  const setDateAndTime = async (e) => {
    // console.log(userInfo._id);
    e.preventDefault();
    if (date == null || time == null) {
      alert('Kindly choose date and time for the booking');
    } else if (!userInfo?._id) {
      alert('kindly log into an account');
      setRedirecttologin(true);
    } else {
      const response = await fetch('https://yogpath-wellness-project.vercel.app/bookings', {
        method: 'POST',
        body: JSON.stringify({ ...yoga, date, time, user: userInfo._id }),
        headers: { 'Content-type': 'application/json' },
        credentials: 'include',
      });
      if (response.ok) {
        alert('your booking is successful');
        setRedirect(true);
      }
    }
  };
  if (redirecttologin) {
    return <Navigate to={'/login'} />;
  }
  if (redirect) {
    return <Navigate to={'/explore'} />;
  }

  return (
    <>
      <div className="h-screen w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="flex-1 justify-center items-center mt-10">
          <img className="p-5 mt-24 md:mt-56 lg:mt-0" src={yoga.image} alt="" />
        </div>
        <div className="flex flex-1 flex-col space-y-5 p-5">
          <h1 className="flex items-center gap-3">
            <FaStar size={30} color="yellow" />
            <FaStar size={30} color="yellow" />
            <FaStar size={30} color="yellow" />
            <FaStar size={30} color="yellow" />
            {/* <p className="text-gray-700 text-lg mt-1">4.8</p> */}
          </h1>
          <h1 className="font-bold uppercase text-3xl  lg:text-6xl">
            {yoga.title}
          </h1>
          <h1 className="text-xl font-semibold">
            Price - ₹ {yoga.price}/month
          </h1>
          <div className='flex gap-2'>
            <input
              type="date"
              value={date}
              className='p-2 border-2'
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              value={time}
              className='p-2 border-2'
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          {/* <div className=''>

            <DateTimePicker className='h-[40px] ' onChange={onchange} value={value} />
            </div> */}

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-24 flex items-center gap-2"
            onClick={setDateAndTime}
          >
            Book
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
