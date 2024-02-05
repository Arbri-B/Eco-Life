
import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './views/Dashboard';
import { AuthProvider, useAuth } from './AuthContext';
import WelcomePage from './views/WelcomePage';

function App() {
  const { user } = useAuth();
  const token = localStorage.getItem('token');
  return (
    <BrowserRouter>
      <Routes>
        {token ? (  
          <>
          <Route path='/' element={<Dashboard user={user} />} />
            <Route path='/dashboard' element={<Dashboard user={user} />} />


          </>
        ) : (
          <>
            <Route path='*' element={<WelcomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </>

        )}
      </Routes>


    </BrowserRouter>
  )
}

export default App
