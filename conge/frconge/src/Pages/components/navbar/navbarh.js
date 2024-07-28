import React from 'react';
import './navbar.css';
import { useNavigate } from "react-router-dom";

const NavbarH = () => {
    const navigate = useNavigate();
    return (
        <div className="App">
            <Navbar navigate={navigate} />
        </div>
    );
}

const Navbar = ({ navigate }) => {
    return (
        <div>
            <div className="navbar">
                <header className="header">
                    <div className="header-left">
                        <span className="nav-item">
                            <a style={{ fontFamily: 'Aclonica, sans-serif' }} href='/homerh'>ACCEUIL</a>
                        </span>
                        <span className="nav-item2">
                            <a style={{ fontFamily: 'Aclonica, sans-serif' }} href="/profil">PROFIL</a>
                        </span>
                    </div>
                    <div className="header-right">
                        <button className="logout-button" onClick={() => navigate("/")}>SE DECONNECTER</button>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default NavbarH;





