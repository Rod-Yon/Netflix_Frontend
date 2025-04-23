import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import TVshows from '../../pages/TVshows';
import NewAndPopular from '../../pages/NewAndPopular';
import MyList from '../../pages/MyList';

import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/TVshows' element={<TVshows />} />
        <Route path='/newandpopular' element={<NewAndPopular />} />
        <Route path='/mylist' element={<MyList />} />
      </Routes>
    </Router>
  );
};