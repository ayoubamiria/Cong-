import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./styleprof.css";
import NavbarG from './components/navbar/navbar';
import image1 from '../images/unknown.jpeg';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export const Profile = () => {
    const navigate = useNavigate();
    const userData = localStorage.getItem("user_data");
    const userDataParsed = JSON.parse(userData);
    const userId = userDataParsed._id; // Assurez-vous que vous récupérez l'ID utilisateur correctement
 // example after extracting the ID from local storage
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthDate] = useState('');
    const submitModif = async (e) => {
        //refresh****
        try {
            const response = await axios.put(`http://localhost:3000/users/${userId}/profil/information`, {
                firstName,
                lastName,
                email,
                birthdate,
            });
            console.log("Profile updated:", response.data);
            toast.success('Profile updated!');
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("Error updating profile:", error);
        }
    };    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/users/${userId}`);
                const user = response.data;
                setFirstName(user.firstName);
                setlastName(user.lastName);
                setEmail(user.email);
                setBirthDate(user.birthdate);
            } catch (error) {
                console.error('Error fetching the user data:', error);
            }
        };

        fetchData();
    }, [userId]);
    return (
        <div className="profile">
          <div className='navbarprof'> <NavbarG /></div>
           
            <div className="overlap-group">
                <form onSubmit={submitModif}>
                    <div className="overlap-wrapper">
                        <div className="overlap-2">
                            <div className="firstname">
                                <div className="overlap-group-2">
                                    <div className="div-wrapper">
                                        <div className="text-wrapper-5">
                                            <input className='input1' type="text" value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)} name="prenom" default={lastName} />
                                        </div>
                                    </div>
                                    <div className="text-wrapper-6">Prenom</div>
                                </div>
                            </div>
                            <div className="city">
                                <div className="overlap-3">
                                    <div className="text-wrapper-7">
                                        <input type="text" className='input1' name="cin" defaultValue="*******" />
                                    </div>
                                </div>
                                <div className="overlap-4">
                                    <div className="text-wrapper-7">
                                        <input type="text" className='input1' name="idEmpl" defaultValue="****" />
                                    </div>
                                </div>
                                <div className="text-wrapper-8">CIN</div>
                                <div className="text-wrapper-9">ID EMPL</div>
                            </div>
                            <div className="email">
                                <div className="overlap-5">
                                    <div className="text-wrapper-10">
                                        <input type="email" className='input1' name="email" value={email}
                                            onChange={(e) => setEmail(e.target.value)} defaultValue={email} />
                                    </div>
                                </div>
                                <div className="text-wrapper-11">Email</div>
                            </div>
                            <div className="email-2">
                                <div className="overlap-5">
                                    <div className="text-wrapper-10">
                                        <input type="date" className='input1' name="dateDeNaissance" value={birthdate}
                                            onChange={(e) => setBirthDate(e.target.value)}  defaultValue={birthdate} />
                                    </div>
                                </div>
                                <p className="date-de-naissance">
                                    <span className="span">Date </span>
                                    <span className="text-wrapper-12">de naissance</span>
                                </p>
                            </div>
                            <div className="password">
                                <div className="overlap-6">
                                    <div className="text-wrapper-10">
                                        <input type="text" className='input1' name="departement" defaultValue="Entrer votre departement..." />
                                    </div>
                                </div>
                                <div className="text-wrapper-11">Departement</div>
                            </div>
                            <div className="address">
                                <div className="overlap-6">
                                    <div className="text-wrapper-13">
                                        <input type="text" className='input1' name="adresse" defaultValue="Entrer votre adresse..." />
                                    </div>
                                </div>
                                <div className="text-wrapper-14">Adresse</div>
                            </div>
                            <div className="address-2">
                                <div className="overlap-6">
                                    <div className="text-wrapper-13">
                                        <input type="tel" className='input1' name="numeroTelephone" defaultValue="Entrer votre numéro..." />
                                    </div>
                                </div>
                                <div className="text-wrapper-14">Numero Telephone</div>
                            </div>
                            <div className="lastname">
                                <div className="overlap-7">
                                    <div className="text-wrapper-15">
                                        <input type="text" className='input1' name="nom" value={lastName}
                                            onChange={(e) => setlastName(e.target.value)} defaultValue={lastName} />
                                    </div>
                                </div>
                                <div className="text-wrapper-16">Nom</div>
                            </div>
                        </div>
                    </div>
                    <div className="rectangle-111" />
                    <div className="rectangle-23" />
                    <div className="rectangle-31" />
                    <div className="text-wrapper-17"><a href='/securite'>Securite</a></div>
                    <div className="text-wrapper-18"><a href='/solde'>Solde</a></div>
                    <div className="text-wrapper-19"><a href='/profil'>Informations</a></div>
                    <div className="button"><input type='reset' className="reset" value="Annuler" />
                        <button  className="submit"type="submit" onClick={()=>{navigate("/profil")}}>Envoyer</button></div>
                    
                </form>
            </div>
            <div className="group-wrapper">
                <div className="div">
                    <div className="text-wrapper">Privacy Policy</div>
                    <div className="text-wrapper-2">Terms of Use</div>
                    <div className="text-wrapper-3">Legal</div>
                    <p className="p">Copyright © 2024 Nura Operations Pty Ltd. All rights reserved.</p>
                </div>
            </div>
            <div className="text-wrapper-20">{firstName} { lastName }</div>
            <img className="jpg" alt="Jpg" src={image1} />

        </div>

    );
};
