import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Navbar from './components/Navbar';
import Home2 from './pages/Home2';
import Login from './pages/Login';
import About from './pages/About';
import Register from './pages/Register';

import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { UserContextProvider } from '../context/UserContext';
import Bookings from './pages/Bookings';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home2 />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/yogas/:id'} element={<About />} />
          <Route path={'/explore'} element={<Explore />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/bookings/:id'} element={<Bookings />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
