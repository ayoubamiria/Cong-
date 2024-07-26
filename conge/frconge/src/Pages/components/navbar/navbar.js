import React from 'react';
import './navbar.css';

function NavbarG() {
    return (
        <div className="App">
            <Navbar />
        </div>
    );
}

const Navbar = () => {
   
    return (
        <div>
        <nav className="navbar">
            <div className="navbar-container">
                <img src="path-to-logo" alt="Logo" className="./images/navbar.png" />
                <ul className="nav-links">
                    <li><a href="/home">Accueil</a></li>
                   
                    <li><a href="#profile">Profil</a></li>
                </ul>
                <button className="logout-button">Se Déconnecter</button>
            </div>
        
            </nav>
        
        </div>
    );
}



export default NavbarG;
