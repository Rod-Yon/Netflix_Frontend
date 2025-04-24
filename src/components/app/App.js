import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import Home from '../../pages/Home';
import NotFound from '../../pages/Not_Found';
import Movies from '../../pages/Movies';
import TVshows from '../../pages/TVshows';
import NewAndPopular from '../../pages/NewAndPopular';
import MyList from '../../pages/MyList';
import Browse from '../../pages/Browse';
import AdminPage from '../../pages/Admin';

import './App.css';

export default function App() {

  const protected_routes = [
    { path: '/profile', element: <Profile /> },
    { path: '/home/:id', element: <Home /> },
    { path: '/movies', element: <Movies /> },
    { path: '/TVshows', element: <TVshows /> },
    { path: '/newandpopular', element: <NewAndPopular /> },
    { path: '/mylist', element: <MyList /> },
    { path: '/browse', element: <Browse /> },
    { path: '/admin', element: <AdminPage /> } 
  ];

  const authorization_check = () => {

    let storage_token = localStorage.getItem('token');
    let cookie_token = document.cookie.match(new RegExp('(^| )token=([^;]+)'));

    return Boolean(storage_token || (cookie_token && cookie_token[2]));
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {protected_routes.map(({ path, element }) => (
          <Route key={path} path={path} element={authorization_check() ? element : <Navigate to="/" replace />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};