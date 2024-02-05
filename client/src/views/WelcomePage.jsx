import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const WelcomePage = () => {


    return (
        <div className="welcome-page d-flex justify-content-between align-items-center ">
            <div>
                <h2>Welcome to Eco-Life</h2>
                <p>In order to proceed, please</p>
                <Link className="wel-log" to={'/login'}>Login</Link> <p>or</p> <Link className="wel-log" to={'register'}>Register</Link>
            </div>

        </div>
    )
};

export default WelcomePage;
