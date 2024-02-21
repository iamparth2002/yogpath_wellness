import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
// import { classes } from '../utils/data';

const Explore = () => {
  let [classes, setClasses] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [value, setValue] = useState(2000);
  const [rating, setRating] = useState(5);
  useEffect(() => {
    fetch('http://localhost:4000/yogas', {
      credentials: 'include',
    })
      .then((data) => data.json())
      .then((data) => {
        setClasses(data);
        setFilteredClasses(data);
      });
  }, []);
  // const filterData = () => {
  //   const getData = classes.filter((classVal) => classVal.price <= value);
  //   console.log(getData);
  // };
  useEffect(() => {
    classes = [...filteredClasses];
    const getData = classes.filter((classVal) => classVal.price <= value);
    setClasses(getData);
  }, [value]);

  useEffect(() => {
    classes = [...filteredClasses];
    const getData = classes.filter((classVal) => classVal.rating <= rating);
    setClasses(getData);
  }, [rating]);
  return (
    <div className="flex">
      <div className="flex">
        <aside
          id="default-sidebar"
          className=" top-20 fixed z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3 text-xl">Price</span>
                </a>
                <div className="flex flex-col-reverse p-2 text-white text-lg">
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      id="price"
                      name={value}
                      min="0"
                      max="2000"
                      step="100"
                      onChange={(e) => {
                        return setValue(e.target.value);
                      }}
                      // onChange={filterData}
                    />
                    <label htmlFor="price" className="mr-1">
                      {value}
                    </label>
                  </div>
                </div>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-xl">
                    Rating
                  </span>
                </a>
                <div className="flex flex-col-reverse p-2 text-white text-lg">
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      id="rating"
                      name={rating}
                      min="0"
                      max="5"
                      onChange={(e) => {
                        return setRating(e.target.value);
                      }}
                      // onChange={filterData}
                    />
                    <label htmlFor="price" className="mr-1">
                      {rating}
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div className="mt-20">
        <ul className="sm:ml-64 flex flex-wrap p-5 justify-center">
          {classes ? (
            classes.map((item, index) => <Card key={index} data={item} />)
          ) : (
            <h1 className="text-3xl">Loading...</h1>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Explore;
