import React, { useEffect, useState } from 'react';
// import { classes } from '../utils/data';
import Card from '../components/Card';
import { Link, json } from 'react-router-dom';

const Home2 = () => {
  const [classes, setClasses] = useState([]);
  const [searchVal, setSearchVal] = useState(null);
  const [searchTitles, setSearchTitles] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/yogas', {
      credentials: 'include',
    })
      .then((data) => data.json())
      .then((data) => {
        setClasses(data);
        setSearchTitles(data);
      });
  }, []);

  return (

    <div>
      <div className="h-screen w-full  bg-[url('https://images.unsplash.com/photo-1600881333168-2ef49b341f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D')] sm:bg-[url('https://images.unsplash.com/photo-1532798442725-41036acc7489?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center ">
        <div className="backdrop-brightness-50 h-full">
          <div className="mx-auto flex flex-col items-center justify-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
              <h1 className="mt-20 text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
                Let's not stress for
                <span className="text-blue-800 dark:text-blue-500"> Yoga </span>
                classes.
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-xl">
                Awaken Your Body and Mind: Dive Into Our Yoga Classes.
              </p>
            </div>
            <div className="flex flex-col w-11/12 md:w-8/12 xl:w-6/12">
              <div className="flex rounded-md w-full">
                <input
                  type="text"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="w-full p-5 rounded-md border-2 border-gray-300 placeholder-current outline-none bg-gray-200"
                  placeholder="Search for Classes..."
                />
                {/* <button
                  className="inline-flex items-center gap-2 bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md"
                  onClick={showResults}
                >
                  <span>Find</span>
                  
                </button> */}
              </div>
              {searchVal &&(<div className="bg-white rounded p-3 max-h-[350px]  overflow-scroll no-scrollbar">
                
                {searchTitles
                  .filter((item) =>
                    item.title.toLowerCase().includes(searchVal)
                  )
                  .map((item) => (
                    <Link to={`/yogas/${item._id}`}>
                    <h1 className=" border-b-2 font text-lg mb-3 pb-2 last:border-none last:mt-2 ">
                      {item.title}
                    </h1>
                    
                     </Link> 
                    
                  ))}
                {/* {searchTitles.map((item) => (
                  
                ))} */}
              </div>)
               }
              
            </div>
          </div>
        </div>
      </div>

      {/* listin */}
      <div className="h-screen px-5 mt-10">
        <h1 className="text-5xl sm:text-7xl text-center font-bold">
          Featured Courses
        </h1>
        <h2 className="text-xl sm:text-3xl text-center mt-2">
          Explore from daily fitness to advance yoga and wellness courses from
          yogpath
        </h2>
        <ul className="flex flex-wrap mt-10 items-center justify-center">
          {classes.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home2;
