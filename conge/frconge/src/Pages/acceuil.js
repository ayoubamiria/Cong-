import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import image from '../images/acceuil/2.png';
import image3 from '../images/acceuil/3.png';
import image4 from '../images/acceuil/4.png';
import image1 from '../images/acceuil/1.jpg';




const Acceuil =  () => {
 
  
        const navigate = useNavigate();
    return (
      
        <div className="page-d-acceuil">
            
                <div className="overlap"><div className="section111">
                <div className="text-wrapper"><a className="inscrire" href="/signup">S’INSCRIRE</a>
                  
                    <button className='btn signup' onClick={() => navigate("/signin")}>Se Connecter</button></div>


              
                    <div className="overlap-2">
                    <img className="unsplash" alt="Unsplash" src={image1} />
                    <p className="trouver-l-quilibre">TROUVER L’ÉQUILIBRE PARFAIT </p>
                    <p className="trouver-l-quilibre2"> POUR VOTRE FUTURE CONGES</p>

                    </div>
                    
                </div></div>
                <div className="section">
                    <div className="div-2">
                    <img className="integrations-all" alt="Integrations all" src={image}  />
                        <div className="div-3">
                            <p className="connect-your-tools">
                                Connect <br /> your tools, <br /> close your tabs
                            </p>
                            <p className="p">
                                Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+
                                integrations with tools you already use and love.
                            </p>
                            <div className="span">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-2"><a href="/signin">Voir Plus</a></div>
                                </div>
                                <div className="span-2">
                                    <div className="text-wrapper-3">→</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlap-3">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                    <div className="group" />
                    <div className="group">
                        <div className="group-2">
                            <div className="text-wrapper-4">Privacy Policy</div>
                            <div className="text-wrapper-5">Terms of Use</div>
                            <div className="text-wrapper-6">Legal</div>
                            <p className="text-wrapper-7">Copyright © 2024 Ayoub Amiria. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="rectangle-3" />
                <img className="unsplash-ns" alt="Unsplash ns" src={image4} />
                </div>
                <div className="overlap-4">
                    <div className="div-4">
                        <div className="div-5">
                            <div className="overlap-5">
                                <div className="overlap-wrapper">
                                    <div className="overlap-6">
                                        <div className="h">
                                            <div className="overlap-group-2">
                                                <div className="text-wrapper-8">All in a calendar,</div>
                                                <p className="text-wrapper-9">that’s a joy to use</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-wrapper-10">
                                    An entire meeting collaboration platform built inside a fast and modern calendar you and your team will
                                    love.
                                </p>
                            </div>
                            <div className="div-6">
                                <div className="div-7">
                                    <div className="text-wrapper-11"><a href='/signin'>Voir Plus</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                <img className="unsplash-vpwafrqtbzm" alt="Unsplash vpwafrqtbzm" src={image3} />
                </div>
            </div>
        );
    };

export default Acceuil