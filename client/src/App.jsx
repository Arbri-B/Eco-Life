
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
import Form from './components/Form';
import Chatroom from './components/Chatroom';
import { useJsApiLoader } from '@react-google-maps/api';
import Calculate from './components/Calculate';
import io from 'socket.io-client';

function App() {
  const { user } = useAuth();
  const token = localStorage.getItem('token');
  // const { isLoaded} =useJsApiLoader({
  //   googleMapsApiKey : "AIzaSyDNOnnW2lR3qZJqjZ8ZO2w4K0ajm-zmyGA",
  //   libraries: ['places'],
  // })

  const [socket] = useState(() => io(':8000'));
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [username, setUsername] = useState('');

  useEffect(() => {
    console.log('Running');
    const socket = io(':8000');

    const handleConnect = () => {
      console.log('Connected');
      setIsConnected(true);
    };

    const handleDisconnect = () => {
      console.log('Disconnected');
      setIsConnected(false);
    };

    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);

    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      socket.disconnect(true);
    };
  }, []);

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
            <Route path='/chatform' element={<Form user={user} username={username} setUsername={setUsername} socket={socket} />} />
            <Route path='/chatroom' element={<Chatroom user={user} username={username} setUsername={setUsername} socket={socket} />} />


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
