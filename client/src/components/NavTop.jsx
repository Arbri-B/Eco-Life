import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../AuthContext';

const TopBar = () => {

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
        <>
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><Link to={'/'}>Green</Link></h1>

                    <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            
                            <li><Link className="nav-link scrollto active" to={`/`}>Home</Link></li>
                            <li><Link className="nav-link scrollto active" to={`/events`}>Events</Link></li>
                            <li><Link className="nav-link scrollto active" to={`/calculate`}>Calculate</Link></li>
                            
                          
                            <li><Link className="getstarted scrollto" to={'/event/new'}>Create event</Link></li>
                            <li><button className="getstarted scrollto" onClick={handleLogout}>Logout</button></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>

        </>
    )
}
export default TopBar;