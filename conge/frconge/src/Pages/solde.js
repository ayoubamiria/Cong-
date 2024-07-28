import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import "../Pages/page-css/solde.css";
import NavbarG from './components/navbar/navbar';
import image1 from '../images/unknown.jpeg';

const Solde = () => {
    const userData = localStorage.getItem("user_data");
    const userDataParsed = userData ? JSON.parse(userData) : null;

    const [firstName, setFirstName] = useState(userDataParsed ? userDataParsed.firstName : '');
    const [lastName, setLastName] = useState(userDataParsed ? userDataParsed.lastName : '');
    const [selectedLeaveType, setSelectedLeaveType] = useState('maladie');
    const [days, setDays] = useState(0);

    useEffect(() => {
        if (!userDataParsed) {
            toast.error("User data not found. Please log in again.");
        }
    }, [userDataParsed]);

    const handleLeaveTypeChange = async (e) => {
        setSelectedLeaveType(e.target.value);
        try {
            const response = await axios.get(`http://localhost:3000/solde/${userDataParsed._id}/${e.target.value}`);
            console.log("API Response:", response.data); // Log the response data
            const remainingDays = response.data.remainingDays; // Adjust according to your API response structure
            if (remainingDays !== undefined) {
                setDays(remainingDays);
                toast.success(`Remaining days updated: ${remainingDays}`);
            } else {
                toast.error("Failed to fetch remaining days. Please check the API response.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to fetch remaining days");
        }
    };

    if (!userDataParsed) {
        return <div>Error: User data not found. Please log in again.</div>;
    }

    return (
        <div className="profile">
            <Toaster />
            <div className="text-wrapper-20">{firstName} {lastName}</div>
            <div className='navbarprof'> <NavbarG /></div>
            <div className="overlap-group">
                <form>
                    <div className="overlap-wrapper">
                        <div className="overlap-2">
                            <div className="firstname">
                                <div className="overlap-group-21">
                                    <div className="div-wrapper1">
                                        <div className="text-wrapper-55">
                                            <input className='input123' type="text" value={days} readOnly /> Jour(s)
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
            <img className="jpg" alt="Jpg" src={image1} />
        </div>
    );
};

export default Solde;
