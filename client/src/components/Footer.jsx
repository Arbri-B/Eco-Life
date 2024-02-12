import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaSkype, FaTwitter } from "react-icons/fa";

const Footer = () => {


    return (
        <>


            <footer id="footer">
                <div className="container">
                    <h3>Green</h3>
                    <p style={{color:"white"}}>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                    <div className="social-links">
                        <a href="#" class="twitter"><FaTwitter></FaTwitter></a>
                        <a href="#" class="facebook"><FaFacebook></FaFacebook></a>
                        <a href="#" class="instagram"><FaInstagram></FaInstagram></a>
                        <a href="#" class="google-plus"><FaSkype></FaSkype></a>
                        <a href="#" class="linkedin"><FaLinkedin></FaLinkedin></a>
                    </div>
                    <div className="copyright">
                        &copy; Copyright <strong><span>Green</span></strong>. All Rights Reserved
                    </div>
                   
                </div>
            </footer>

        </>
    )
}
export default Footer