
import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './views/Dashboard';
import EditEvent from './components/EditEvent';
import CreateEvent from './components/EventForm';
import DisplayOne from './components/SingleEvent';
import Events from './components/Events';
import { AuthProvider, useAuth } from './AuthContext';
import WelcomePage from './views/WelcomePage';
import Eco from './components/Eco';
import Zero from './components/Zero';
import { useJsApiLoader } from '@react-google-maps/api';
import Calculate from './components/Calculate';

function App() {
  const { user } = useAuth();
  const token = localStorage.getItem('token');
  // const { isLoaded} =useJsApiLoader({
  //   googleMapsApiKey : "AIzaSyDNOnnW2lR3qZJqjZ8ZO2w4K0ajm-zmyGA",
  //   libraries: ['places'],
  // })
  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <>
            <Route path='/' element={<Dashboard user={user} />} />
            <Route path='/dashboard' element={<Dashboard user={user} />} />
            <Route path='/events' element={<Events user={user} />} />
            <Route path='/event/:id' element={<DisplayOne user={user} />} />
            <Route path='/event/new' element={<CreateEvent user={user} />} />
            <Route path='/event/edit/:id' element={<EditEvent user={user} />} />
            <Route path='/eco' element={<Eco user={user} />} />
            <Route path='/zero' element={<Zero user={user} />} />
            <Route path='/calculate' element={<Calculate user={user} />} />


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
