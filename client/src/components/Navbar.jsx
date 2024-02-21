import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import { FaPowerOff } from 'react-icons/fa6';
import { FaBookBookmark } from 'react-icons/fa6';

const Navbar = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [toggle, setToggle] = useState(null);
  const [id, setId] = useState('');
  useEffect(() => {
    async function call() {
      await fetch('https://yogpath-wellness-project.vercel.app/profile', {
        credentials: 'include',
      }).then((response) => {
        response.json().then(({ _id, email, password }) => {
          setUserInfo({ _id, email, password });
          setId(_id);
        });
      });
    }
    call();
  }, [id, setUserInfo]);

  const logout = () => {
    fetch('https://yogpath-wellness-project.vercel.app/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  };

  const email = userInfo?.email;
  return (
    <nav className="fixed z-10 w-full bg-white border-b-4 mb-10">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-5">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Yogpath
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2 items-center">
          <Link to="/explore">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
            >
              Explore
            </button>
          </Link>
          {email && (
            <Link>
              <button
                type="button"
                onClick={() => setToggle((prev) => !prev)}
                // className="relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
              >
                <div className="relative w-10 h-10 overflow-hidden bg-gray-200 rounded-full ">
                  <svg
                    className="absolute w-12 h-12 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
              {toggle && (
                <ul className="absolute text-white bg-blue-700 p-5 rounded-lg ml-[-100px] mt-3">
                  <Link to={`/bookings/${userInfo._id}`}>
                    <li className="p-2 flex items-center gap-2">
                      <FaBookBookmark />
                      Bookings
                    </li>
                  </Link>

                  <hr className="w-full " />
                  <Link to="/">
                    <li
                      className="p-2 flex items-center gap-2"
                      onClick={logout}
                    >
                      <FaPowerOff />
                      Logout
                    </li>
                  </Link>
                </ul>
              )}
            </Link>
          )}
          {!email && (
            <Link to="/login">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
