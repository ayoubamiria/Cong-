import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const [connectedUser, setConnectedUser] = useState({});
    const getConnectedUserData = () => {// fonction permet de d'avoir les donnees qui ce trouvent le local storage
       /* setConnectedUser(JSON.parse(localStorage.getItem("user_data")));//modifaction de la forme au objet et l'affectee
    //guard : ce bloc peut etre mis dans le hook apres appel de la fonction 

        if (localStorage.getItem("user_data") == null)//si nest pas connecte  pas de donnee (null) et il veut acceder lil page home 
        {
            console.log(localStorage.getItem("user_data"));
            navigate("/signin");// auto redirection lil page login 
        } */
    
    

  
        const userData = localStorage.getItem("user_data");
        if (userData==null) {            navigate("/signin");

            
        } else {setConnectedUser(JSON.parse(userData));
        }
    
 
    };
    useEffect(() => {//appel au hook useEffect when we are redirecting to this page il faut auto appller getconnect 
        getConnectedUserData();// il y a in proble lors de la reconnection le user peut ouvrir la page home a travers l'url 
        //mais il trouve pas  les donnees null la solution est de creer un gards qui empeche l'ouverture de la page home 
        //le gard permet d'ouvrir l'acces au page home seulement lorsque le user a deja connecte(verifie s'il existe des donnees)
        //le test du verfication doit etre fait soit dans cette fonction soit dans l'autre 
        //car si il n ya pas des le debut de la rederition il fait une autre redirection retour a la page home
    }, []);
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Aclonica&display=swap';
        document.head.appendChild(link);
    }, []);

    return (
        
        <div className="home-page">
            <header className="header1">
                <div className="header-left1">

                    <span className="nav-item4"><a style={{ fontFamily: 'Aclonica, sans-serif' }} href='/home'>ACCEUIL</a></span>
                    <span className="nav-item21"><a style={{ fontFamily: 'Aclonica, sans-serif' }} href="/profil">PROFIL</a></span>
                </div>
                <div className="header-right1">
                    
                    <button className="logout-button" onClick={() => navigate("/")}>SE DECONNECTER</button>
                </div>
            </header>
            <div className="content">
                <div className="image-section">
                  
                </div>
                <div className="menu-section">
                    <button className="menu-item" onClick={() => navigate("/creeconge")}><b>Creer Congé</b></button>
                    <button className="menu-item" onClick={() => navigate("/historique")}><b>Mes Congés</b></button>
                    <button className="menu-item2" onClick={() => navigate("/calendar")}><b>Ma Calendrier</b></button>
                </div>
            </div>
   
        </div>
    );
};
export default Home;