/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const location = useLocation();

    if (location.pathname === "/" || location.pathname === "/adminpage") {
        return null; // Hide Navbar for paths "/" and "/adminpage"
    }

    return (
        <>
            <div className="Footer">
                <div className="Footer-logo">
                    <span style={{ color: "#FF4500" }}>SVR</span>
                    <span style={{ color: "#00FFFF" }}>HOSTEL</span>
                </div>
                <div className="Footer-links">
                    <h5>Quick Links</h5>
                    <ul>
                        <li>
                            <Link to="/reservations">RESERVATIONS</Link>
                        </li>
                        <li>
                            <Link to="/services">SERVICES</Link>
                        </li>
                        <li>
                            <Link to="/checkout">CHECKOUT</Link>
                        </li>
                        <li>
                            <Link to="/about">ABOUT US</Link>
                        </li>
                    </ul>
                </div>
                <div className="Footer-contact">
                    <address>
                        Cambridge
                        <br />
                        No 12/3 Funny Road,
                        <br />
                        Guindy, <br />
                        CHENNAI. <br />
                        +91 123456789
                    </address>
                </div>
            </div>
        </>
    );
};

export default Footer;