import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import "./test.css";
import NavbarG from './components/navbar/navbar';

export const Test = () => {
    const userData = localStorage.getItem("user_data");
    const userDataParsed = JSON.parse(userData);
    const userId = userDataParsed._id; // Assurez-vous que vous récupérez l'ID utilisateur correctement

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [selectedLeaveType, setSelectedLeaveType] = useState('maladie');
    const [days, setDays] = useState(0); // Example days count

    const handleLeaveTypeChange = async (e) => {
        setSelectedLeaveType(e.target.value);
        try {
            const response = await axios.get(`http://localhost:3000/solde/${userId}/${e.target.value}`);
            const remainingDays = response.data.remainingDays; // Adjust according to your API response
            setDays(remainingDays);
            toast.success(`Remaining days updated: ${remainingDays}`);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to fetch remaining days");
        }
    };

    return (
        <div className="profile">
            <Toaster />
            <div className='navbarprof'> <NavbarG /></div>
            <div className="overlap-group">
                <form>
                    <div className="overlap-wrapper">
                        <div className="overlap-2">
                            <div className="firstname">
                                <div className="overlap-group-21">
                                    <div className="div-wrapper1">
                                        <div className="text-wrapper-5">
                                            <input className='input12' type="text" value={days} />Jour(s)
                                        </div>
                                    </div>
                                    <div className="text-wrapper-6"><b>Choisir le type de Congé</b></div>
                                </div>
                            </div>
                            <div className="email">
                                <div className="overlap-51">
                                    <div className="text-wrapper-21"><b>Nombre de jours restant:</b></div>
                                    <div className="text-wrapper-10">
                                        <select className='select' value={selectedLeaveType} onChange={handleLeaveTypeChange}>
                                            <option value="maladie">Maladie</option>
                                            <option value="vacance">Vacances</option>
                                            <option value="personnel">Personnel</option>
                                            <option value="other">Autres</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                    <div className="rectangle-3" />
                    <div className="text-wrapper-17"><a href='/securite'>Securite</a></div>
                    <div className="text-wrapper-18"><a href='/solde'>Solde</a></div>
                    <div className="text-wrapper-19"><a href='/profil'>Informations</a></div>
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
            <div className="text-wrapper-20">{firstName} {lastName}</div>
            <img className="jpg" alt="Jpg" src="about01-jpg.png" />
        </div>
    );
};
export default Test;
