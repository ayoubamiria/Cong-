import React from 'react';
import "./footer.css";
const Footer = () => {
    

    return (
        <footer className="footer">
            <div className="footer-content">
               
                <div className="footer-links">
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        
                    </ul>
                </div>
             
            </div>
            <div className="footer-copyright">
                <p>&copy; 2024 Nura Operations Pty Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;