import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import { useAuth } from '../AuthContext';

const Navbar =() => {
    const { logout } = useAuth();
    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            // Call the logout function from the AuthContext
            await logout();
            navigate('/')
            // Redirect or perform any other actions after successful registration
        } catch (error) {
            // Handle registration error
        }
    };

    return (
        <nav className="main-nav d-flex justify-content-between ">
            <Link className="nav-home" to={`/`}>Eco-Life</Link>
            <Link className="nav-home" to={`/events`}>Events</Link>
            <Link className=" btn btn-outline-primary custom-color" to={'/event/new'}>Create event</Link>
            <div className="nav-btn-holder d-flex justify-content-between">
            <button className=" btn btn-outline-primary custom-color" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar;