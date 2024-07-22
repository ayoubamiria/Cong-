import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();

    const [connectedUser, setConnectedUser] = useState({});
    const getConnectedUserData = () => {// fonction permet de d'avoir les donnees qui ce trouvent le local storage
        setConnectedUser(JSON.parse(localStorage.getItem("user_data")));//modifaction de la forme au objet et l'affectee
    //guard : ce bloc peut etre mis dans le hook apres appel de la fonction 

        if (localStorage.getItem("user_date") == null)//si nest pas connecte  pas de donnee (null) et il veut acceder lil page home 
        { navigate("/signin"); } // auto redirection lil page login 
    
    };
    useEffect(() => {//appel au hook useEffect when we are redirecting to this page il faut auto appller getconnect 
        getConnectedUserData();// il y a in proble lors de la reconnection le user peut ouvrir la page home a travers l'url 
        //mais il trouve pas  les donnees null la solution est de creer un gards qui empeche l'ouverture de la page home 
        //le gard permet d'ouvrir l'acces au page home seulement lorsque le user a deja connecte(verifie s'il existe des donnees)
        //le test du verfication doit etre fait soit dans cette fonction soit dans l'autre 
        //car si il n ya pas des le debut de la rederition il fait une autre redirection retour a la page home
    }, []);

    return (
        <>
            <h1> Hello  </h1>
        </>
    );
};
export default Home;