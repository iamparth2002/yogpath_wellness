import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-full h-screen bg-[url('https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 gap-4">
         
            <h1 className='text-white font-bold text-4xl'>Lets do Yoga</h1>
            <input className='p-3 rounded-full outline-none' type="text"  placeholder='Search for classes...'/>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
