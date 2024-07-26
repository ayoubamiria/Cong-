import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const HomeRh = () => {
    const navigate = useNavigate();

    const [connectedUser, setConnectedUser] = useState({});
    const getConnectedUserData = () => {// fonction permet de d'avoir les donnees qui ce trouvent le local storage
        setConnectedUser(JSON.parse(localStorage.getItem("user_data")));//modifaction de la forme au objet et l'affectee
        //guard : ce bloc peut etre mis dans le hook apres appel de la fonction 

        /* if (localStorage.getItem("user_date") == null)//si nest pas connecte  pas de donnee (null) et il veut acceder lil page home 
         { navigate("/signin"); } // auto redirection lil page login */

    };
    useEffect(() => {//appel au hook useEffect when we are redirecting to this page il faut auto appller getconnect 
        getConnectedUserData();
    }, []);

    return (
        <div className="home-page">
            <header className="header">
                <div className="header-left">
                    <span className="nav-item">ACCEUIL</span>
                </div>
                <div className="header-right">
                    <span className="nav-item">PROFIL</span>
                    <button className="logout-button" onClick={() => navigate("/")}>SE DECONNECTER</button>
                </div>
            </header>
            <div className="content">
                <div className="image-section">
                    <img src="./frconge/src/images/home.jpg" alt="Buildings" />
                </div>
                <div className="menu-section">
                    <button className="menu-item" onClick={() => navigate("/verif")}>Valider/Rejeter</button>
                    <button className="menu-item" onClick={() => navigate("/creeconge")}>Creer Congé</button>
                    <button className="menu-item" onClick={() => navigate("/historique")}>Mes Congés</button>
                    <button className="menu-item" onClick={() => navigate("/calendar")}>Ma Calendrier</button>
                </div>
            </div>
        </div>
    );
};
export default HomeRh;