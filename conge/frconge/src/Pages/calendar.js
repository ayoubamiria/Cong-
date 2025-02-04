import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import "react-big-calendar/lib/css/react-big-calendar.css";
import NavbarG from './components/navbar/navbar';
const localizer = momentLocalizer(moment);

const CongeCalendar = () => {
    const [events, setEvents] = useState([]);
   


    useEffect(() => {
        const fetchApprovedConges = async () => {
            try {
                const userData = localStorage.getItem("user_data");
                const userDataParsed = JSON.parse(userData);
                const userId = userDataParsed._id; // Assurez-vous que vous récupérez l'ID utilisateur correctement
                //const userId = '66a100f83932b021c7b5f48d'; // Remplacer par l'ID utilisateur explicitement
                const response = await axios.get(`http://localhost:3000/demande-conge/calandrier/${userId}`);
                const congesData = response.data.map(conge => ({
                    title: conge.type, // ou tout autre champ que vous souhaitez afficher comme titre
                    start: new Date(conge.startDate),
                    end: new Date(conge.endDate),
                    allDay: true, // ou false si vous avez des heures spécifiques
                }));
                setEvents(congesData);
            } catch (error) {
                console.error('Erreur lors de la récupération des congés approuvés', error);
            }
        };

        fetchApprovedConges();
    }, []);

    return (
        <div className="App" style={{ padding: "14px" }}>
            <NavbarG />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "800px" }}
            />
        </div>
    );
}

export default CongeCalendar;
