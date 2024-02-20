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
            <header id="header" class="d-flex align-items-center">
                <div class="container d-flex align-items-center">

                    <h1 class="logo me-auto"><Link to={'/'}>Green</Link></h1>

                    <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a>

                    <nav id="navbar" class="navbar">
                        <ul>
                            
                            <li><Link className="nav-link scrollto active" to={`/`}>Home</Link></li>
                            <li><Link className="nav-link scrollto active" to={`/events`}>Events</Link></li>
                            <li><Link className="nav-link scrollto active" to={`/calculate`}>Calculate</Link></li>
                            <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><Link className="getstarted scrollto" to={'/event/new'}>Create event</Link></li>
                            <li><button class="getstarted scrollto" onClick={handleLogout}>Logout</button></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>

        </>
    )
}
export default TopBar;