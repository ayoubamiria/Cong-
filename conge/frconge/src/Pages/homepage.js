import React, { useEffect, useState } from "react";
import Footer from "./components/footer/footer.js"
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();

    const [connectedUser, setConnectedUser] = useState({});
    const getConnectedUserData = () => {// fonction permet de d'avoir les donnees qui ce trouvent le local storage
        setConnectedUser(JSON.parse(localStorage.getItem("user_data")));//modifaction de la forme au objet et l'affectee
    //guard : ce bloc peut etre mis dans le hook apres appel de la fonction 

       /* if (localStorage.getItem("user_date") == null)//si nest pas connecte  pas de donnee (null) et il veut acceder lil page home 
        { navigate("/signin"); } // auto redirection lil page login */
    
    };
    useEffect(() => {//appel au hook useEffect when we are redirecting to this page il faut auto appller getconnect 
        getConnectedUserData();// il y a in proble lors de la reconnection le user peut ouvrir la page home a travers l'url 
        //mais il trouve pas  les donnees null la solution est de creer un gards qui empeche l'ouverture de la page home 
        //le gard permet d'ouvrir l'acces au page home seulement lorsque le user a deja connecte(verifie s'il existe des donnees)
        //le test du verfication doit etre fait soit dans cette fonction soit dans l'autre 
        //car si il n ya pas des le debut de la rederition il fait une autre redirection retour a la page home
    }, []);

    return (
        <div className="home-page">
            <header className="header">
                <div className="header-left">
                    <span className="nav-item">ACCEUIL</span>
                    <span className="nav-item">NOTIFICATION</span>
                </div>
                <div className="header-right">
                    <span className="nav-item">PROFIL</span>
                    <button className="logout-button">SE DECONNECTER</button>
                </div>
            </header>
            <div className="content">
                <div className="image-section">
                    <img src="./frconge/src/images/home.jpg" alt="Buildings" />
                </div>
                <div className="menu-section">
                    <button className="menu-item">Creer Congé</button>
                    <button className="menu-item">Mes Congés</button>
                    <button className="menu-item">Ma Calendrier</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default Home;